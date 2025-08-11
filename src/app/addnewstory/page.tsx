'use client';

import React, { useState, useCallback, useEffect, ChangeEvent, FormEvent } from 'react';
import dynamic from 'next/dynamic';
import Headeraddnewstory from '../components/addnewstoryheader/page';

// Dynamically import StoryEditor with SSR disabled
const StoryEditor = dynamic(() => import('../components/StoryEditor'), {
  ssr: false,
});

type StoryTitleInputProps = {
  initialTitle?: string;
  onTitleChange: (title: string) => void;
};

const StoryTitleInput: React.FC<StoryTitleInputProps> = ({ initialTitle = '', onTitleChange }) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    if (onTitleChange) {
      onTitleChange(title);
    }
  }, [title, onTitleChange]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
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
          fontFamily: `'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif`,
        }}
      />
    </div>
  );
};

export default function AddStoryPage() {
  const [storyTitle, setStoryTitle] = useState<string>('');
  const [storyContentHtml, setStoryContentHtml] = useState<string>('');
  const [storyContentJson, setStoryContentJson] = useState<object>({});

  const handleTitleChange = useCallback((newTitle: string) => {
    setStoryTitle(newTitle);
  }, []);

  const handleEditorChange = useCallback((html: string, json: object) => {
    setStoryContentHtml(html);
    setStoryContentJson(json);
  }, []);

  const handleSubmitStory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Submitting Story:');
    console.log('Title:', storyTitle);
    console.log('Content (HTML):', storyContentHtml);
    console.log('Content (JSON):', storyContentJson);

    // Example API call placeholder
    // try {
    //   const response = await fetch('/api/stories', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       title: storyTitle,
    //       contentHtml: storyContentHtml,
    //       contentJson: storyContentJson,
    //     }),
    //   });
    //   if (response.ok) {
    //     alert('Story submitted successfully!');
    //     setStoryTitle('');
    //   } else {
    //     alert('Failed to submit story.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting story:', error);
    //   alert('An error occurred.');
    // }
  };

  return (
    <>
      <Headeraddnewstory />

      <div style={{ maxWidth: '800px', margin: '32px auto' }}>
        <form
          onSubmit={handleSubmitStory}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <StoryTitleInput
            initialTitle={storyTitle}
            onTitleChange={handleTitleChange}
          />

          <div>
            <StoryEditor onContentChange={handleEditorChange} />
          </div>

          <button
            type="submit"
            className="publish-button"
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1em',
              alignSelf: 'flex-start',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#218838';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#28a745';
            }}
          >
            Publish Story
          </button>
        </form>
      </div>
    </>
  );
}
