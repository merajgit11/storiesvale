'use client';

import { useState, KeyboardEvent } from 'react';

export default function StoryInfoForm() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTag = (value: string) => {
    const cleaned = value.trim().replace(/,$/, '');
    if (cleaned && !tags.includes(cleaned.toLowerCase())) {
      const newTags = [...tags, cleaned.toLowerCase()];
      setTags(newTags);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, idx) => idx !== indexToRemove);
    setTags(newTags);
  };

  return (
    <div className="lg:w-8/12 w-full space-y-5">
      <h2 className="text-xl font-semibold text-black">Story Details</h2>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block font-medium mb-1 text-black">Story Description</label>
        <textarea
          id="description"
          rows={3}
          className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className="block font-medium mb-1 text-black">Category</label>
        <select
          id="category"
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        >
          <option value="-1">Select a category</option>
          <option value="11">Adventure</option>
          <option value="4">Romance</option>
          <option value="5">Science Fiction</option>
          {/* ...other options */}
        </select>
      </div>

      {/* Sub-category placeholder */}
      <div id="subcategory-container" className="hidden">
        <label className="block font-medium mb-2 text-black">Sub-Category</label>
        <div id="subcategory-buttons" className="flex flex-wrap gap-2 text-black">
          {/* Sub-category buttons will go here */}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <label htmlFor="tags" className="block font-medium mb-1 text-black">Tags</label>
        <div
          className="w-full p-2 border border-gray-300 rounded-lg flex flex-wrap gap-2 min-h-[48px] cursor-text"
          onClick={() => document.getElementById('tag-input')?.focus()}
        >
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="flex items-center bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {tag}
              <button
                onClick={() => removeTag(idx)}
                className="ml-2 text-blue-500 hover:text-red-600 focus:outline-none"
                type="button"
              >
                &times;
              </button>
            </span>
          ))}
          <input
            id="tag-input"
            type="text"
            value={inputValue}
            placeholder="Type and press Enter or comma"
            className="text-black flex-1 p-1 outline-none bg-transparent text-sm"
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <input type="hidden" name="tags" value={tags.join(',')} />
      </div>

      {/* Maturity */}
      <div>
        <label htmlFor="maturity" className="block font-medium mb-1 text-black">Content Rating</label>
        <select
          id="maturity"
          name="maturity"
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        >
          <option value="none">No</option>
          <option value="13+">13+</option>
          <option value="18+">18+</option>
        </select>
      </div>

      {/* Copyright */}
      <div>
        <label htmlFor="copyright" className="block font-medium mb-1 text-black">Copyright Notice</label>
        <input
          id="copyright"
          type="text"
          placeholder="e.g. © 2025 Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
        <p className="text-sm text-gray-500 mt-1">
          You can use <strong>© 2025 Your Name</strong> or a pen name to protect your content.
        </p>
      </div>

      {/* Save Button */}
      <div className="pt-4">
        <button className="text-white px-6 py-3 rounded font-semibold transition nextbutton" style={{ background: '#1d2f49' }}>
          Save Details
        </button>
      </div>
    </div>
  );
}
