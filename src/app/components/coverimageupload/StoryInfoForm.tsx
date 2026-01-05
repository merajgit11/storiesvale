'use client';

import { useState, KeyboardEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  "Popular", "Romance", "Horror", "Fantasy", "Sci-Fi", "Adventure", 
  "Drama", "Fanfiction", "Thriller", "Creative Writing", "Psychology", 
  "Art & Design", "History", "Nature", "Travel", "Music", "Movies", "Poetry"
];

interface Props {
  storyId: string;
}

export default function StoryInfoForm({ storyId }: Props) {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  
  // Form State
  const [formData, setFormData] = useState({
    description: '',
    category_id: '',
    maturity: 'none',
    copyright_notice: ''
  });

  // 1. Fetch existing data on load
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}`, {
          headers: { 'Authorization': `Bearer mock_admin_token_12345` }
        });
        if (res.ok) {
          const { story } = await res.json();
          setFormData({
            description: story.description || '',
            category_id: story.category_id?.toString() || '',
            maturity: story.maturity || 'none',
            copyright_notice: story.copyright_notice || ''
          });
          if (story.tags) {
            setTags(typeof story.tags === 'string' ? story.tags.split(',') : story.tags);
          }
        }
      } catch (err) {
        console.error("Failed to fetch story details", err);
      }
    };
    if (storyId) fetchStory();
  }, [storyId]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}`, {
        method: 'POST', // Still POST for method spoofing
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer mock_admin_token_12345` 
        },
        body: JSON.stringify({
          ...formData,
          tags: tags.join(','),
          status: 'published',
          _method: 'PUT' // Method spoofing
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Story details saved successfully!");
        router.push(`/story/${result.story.slug}`);
      }
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setLoading(false);
    }
  };

  const addTag = (value: string) => {
    const cleaned = value.trim().replace(/,$/, '');
    if (cleaned && !tags.includes(cleaned.toLowerCase())) {
      setTags([...tags, cleaned.toLowerCase()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  return (
    <div className="lg:w-8/12 w-full space-y-5">
      <h2 className="text-xl font-semibold text-black border-b pb-2">Story Details</h2>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1 text-black text-sm">Story Description</label>
        <textarea
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="What is your story about?"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Category */}
        <div>
          <label className="block font-medium mb-1 text-black text-sm">Category</label>
          <select
            value={formData.category_id}
            onChange={(e) => setFormData({...formData, category_id: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white"
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((cat, idx) => (
              <option key={idx} value={idx + 1}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Maturity */}
        <div>
          <label className="block font-medium mb-1 text-black text-sm">Content Rating (Maturity)</label>
          <select
            value={formData.maturity}
            onChange={(e) => setFormData({...formData, maturity: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg text-black bg-white"
          >
            <option value="none">Everyone</option>
            <option value="13+">Teens (13+)</option>
            <option value="18+">Mature (18+)</option>
          </select>
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block font-medium mb-1 text-black text-sm">Tags</label>
        <div className="w-full p-2 border border-gray-300 rounded-lg flex flex-wrap gap-2 min-h-[48px] bg-white">
          {tags.map((tag, idx) => (
            <span key={idx} className="flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md border">
              {tag}
              <button onClick={() => setTags(tags.filter((_, i) => i !== idx))} className="ml-2 text-gray-400 hover:text-red-500">×</button>
            </span>
          ))}
          <input
            type="text"
            value={inputValue}
            placeholder="Action, Fantasy..."
            className="text-black flex-1 p-1 outline-none text-sm"
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      {/* Copyright */}
      <div>
        <label className="block font-medium mb-1 text-black text-sm">Copyright Notice</label>
        <input
          type="text"
          value={formData.copyright_notice}
          onChange={(e) => setFormData({...formData, copyright_notice: e.target.value})}
          placeholder="e.g. © 2025 Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
        <p className="text-sm text-gray-500 mt-1">
You can use <strong>© 2025 Your Name</strong> or a pen name to protect your content.
</p>
      </div>

      <div className="pt-4">
        <button 
          onClick={handleSave}
          disabled={loading}
          className="text-white px-8 py-3 rounded-lg font-bold transition-all hover:opacity-90 active:scale-95" 
          style={{ background: '#1d2f49' }}
        >
          {loading ? 'Saving...' : 'Save Details'}
        </button>
      </div>
    </div>
  );
}