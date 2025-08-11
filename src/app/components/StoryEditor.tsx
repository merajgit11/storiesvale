// components/StoryEditor.js
'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Optional: Add your toolbar buttons here */}
    </div>
  );
};

const StoryEditor = ({
  initialContent = '<p>Start writing your amazing story here...</p>',
  onContentChange,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const json = editor.getJSON();
      if (onContentChange) onContentChange(html, json);
    },
    editorProps: {
      attributes: {
        style: `
          min-height: 300px;
          padding: 16px;
          outline: none;
          border: none;
          line-height: 1.5;
          color: #333;
          font-size: 1.2rem;
          overflow-y: auto;
          font-family: 'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif;
        `,
      },
    },
  });

  return (
    <div style={{
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      backgroundColor: 'white',
      width: '100%',
    }}>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default StoryEditor;
