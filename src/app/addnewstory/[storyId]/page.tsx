'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useParams } from 'next/navigation';
import Headeraddnewstory from '../../components/addnewstoryheader/page';

// Configuration
const API_BASE_URL = 'https://api11.storiesvale.com/api'; // Update to your Laravel URL
const ADMIN_TOKEN = 'mock_admin_token_12345';
const AUTOSAVE_DELAY = 3000; // 3 seconds

const StoryEditor = dynamic(() => import('../../components/StoryEditor'), {
  ssr: false,
});



type StoryTitleInputProps = {
  initialTitle?: string;
  onTitleChange: (title: string) => void;
};

const StoryTitleInput: React.FC<StoryTitleInputProps> = ({ initialTitle = '', onTitleChange }) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setTitle(val);
    onTitleChange(val);
  };

  

  return (
    <div>
      <textarea
        className="title-textarea placeholder-gray-400"
        placeholder="Title your story..."
        id="story-title"
        value={title}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '4px',
          fontSize: '2.2rem',
          minHeight: '40px',
          resize: 'vertical',
          boxSizing: 'border-box',
          border: 'none',
          outline: 'none',
          fontFamily: `'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif`,
        }}
      />
    </div>
  );
};

export default function AddStoryPage() {
  const router = useRouter();
  const params = useParams();
  const currentUrlId = params.storyId as string;
  const isCreatingDraft = useRef(false);

  

  // States
  const [storyId, setStoryId] = useState<string | null>(currentUrlId === 'new' ? null : currentUrlId);
  const [storyTitle, setStoryTitle] = useState<string>('');
  const [storyContentHtml, setStoryContentHtml] = useState<string>('');
  const [storyContentJson, setStoryContentJson] = useState<object>({});
  const [saveStatus, setSaveStatus] = useState<string>('Idle');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Refs to prevent unnecessary saves and track changes
  const hasChanges = useRef(false);
  const saveTimer = useRef<NodeJS.Timeout | null>(null);

  const storyIdRef = useRef<string | null>(currentUrlId === 'new' ? null : currentUrlId);
  const isCurrentlySaving = useRef(false); // New lock

  // 1. Fetch data if editing
  useEffect(() => {
    if (storyId && storyId !== 'new') {
      const fetchStory = async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/stories/${storyId}`, {
            headers: { 'Authorization': `Bearer ${ADMIN_TOKEN}` }
          });
          if (res.ok) {
            const data = await res.json();
            setStoryTitle(data.title);
            setStoryContentHtml(data.content);
          }
        } catch (error) {
          console.error("Failed to fetch story:", error);
        } finally {
          setIsInitialLoad(false);
        }
      };
      fetchStory();
    } else {
      setIsInitialLoad(false);
    }
  }, [storyId]);

  // 2. The Save Function (Handles both POST and PUT)
 
 
  const createDraftIfNeeded = async () => {
    if (
      storyIdRef.current ||
      isCreatingDraft.current || // 🔐 HARD LOCK
      isCurrentlySaving.current
    ) return;
  
    if (!storyTitle.trim() && !storyContentHtml.trim()) return;
  
    isCreatingDraft.current = true; // 🔒 lock
    setSaveStatus('Saving...');
  
    try {
      const response = await fetch(`${API_BASE_URL}/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify({
          title: storyTitle,
          content: storyContentHtml,
          status: 'draft',
        }),
      });
  
      const result = await response.json();
  
      if (response.ok && result.story_id) {
        const newId = result.story_id.toString();
        storyIdRef.current = newId;
        setStoryId(newId);
        window.history.replaceState(null, '', `/addnewstory/${newId}`);
        setSaveStatus('Saved');
        hasChanges.current = false;
      }
    } catch {
      setSaveStatus('Error');
    } finally {
      isCreatingDraft.current = false; // 🔓 unlock
    }
  };

  
  useEffect(() => {
    if (isInitialLoad || !hasChanges.current) return;
  
    if (saveTimer.current) clearTimeout(saveTimer.current);
  
    saveTimer.current = setTimeout(() => {
      if (!storyIdRef.current) {
        createDraftIfNeeded(); // POST once
      } else {
        performSave(false); // PUT
      }
    }, AUTOSAVE_DELAY);
  
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [storyTitle, storyContentHtml, isInitialLoad]);
  
  
  // 3. Autosave Effect (Debounced)
  const performSave = useCallback(async (isManualPublish = false) => {
    if (!storyIdRef.current || isCurrentlySaving.current) return;
  
    isCurrentlySaving.current = true;
    setSaveStatus('Saving...');
  
    try {
      const response = await fetch(
        `${API_BASE_URL}/stories/${storyIdRef.current}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ADMIN_TOKEN}`,
          },
          body: JSON.stringify({
            title: storyTitle,
            content: storyContentHtml,
            status: isManualPublish ? 'published' : 'draft',
          }),
        }
      );
  
      if (response.ok) {
        setSaveStatus(isManualPublish ? 'Published!' : 'Saved');
        hasChanges.current = false;
      }
    } catch {
      setSaveStatus('Error');
    } finally {
      isCurrentlySaving.current = false;
    }
  }, [storyTitle, storyContentHtml]);
  
  const handleTitleChange = (newTitle: string) => {
    setStoryTitle(newTitle);
    hasChanges.current = true;
    setSaveStatus('Typing...');
  };

  const handleEditorChange = (html: string, json: object) => {
    setStoryContentHtml(html);
    setStoryContentJson(json);
    hasChanges.current = true;
    setSaveStatus('Typing...');
  };

 

  const handleSubmitStory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Perform the final save
    await performSave(false); 
  
    // 2. If we have a storyId, redirect to the details page
    if (storyIdRef.current) {
      router.push(`/addnewstory/${storyIdRef.current}/details`);
    }
  };

  return (
    <>
     
     <Headeraddnewstory 
      title={storyTitle} 
      status={saveStatus} 
      storyId={storyId}
    />
      <div style={{ maxWidth: '800px', margin: '32px auto' }}>
        {/* <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '10px', textAlign: 'right' }}>
          {saveStatus}
        </div> */}
        <form onSubmit={handleSubmitStory} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <StoryTitleInput
            initialTitle={storyTitle}
            onTitleChange={handleTitleChange}
          />
          <div>
            <StoryEditor 
              initialContent={storyContentHtml} 
              onContentChange={handleEditorChange} 
            />
          </div>
          <button
            type="submit"
            className="publish-button"
            style={{
              padding: '12px 24px', backgroundColor: '#28a745', color: 'white',
              fontWeight: 'bold', borderRadius: '5px', border: 'none',
              cursor: 'pointer', fontSize: '1.1em', alignSelf: 'flex-start'
            }}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}