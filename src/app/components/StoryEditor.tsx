'use client';
import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// 1. Define the types for your props
interface StoryEditorProps {
  initialContent?: string;
  onContentChange?: (html: string, json: any) => void;
}

const StoryEditor: React.FC<StoryEditorProps> = ({
  initialContent = '',
  onContentChange,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const json = editor.getJSON();
      // 2. Call the prop function if it exists
      if (onContentChange) {
        onContentChange(html, json);
      }
    },
    editorProps: {
      attributes: {
        style: `
          min-height: 400px;
          padding: 16px;
          outline: none;
          border: none;
          line-height: 1.6;
          color: #333;
          font-size: 1.25rem;
          font-family: 'Merriweather', Georgia, serif;
        `,
      },
    },
  });

  // Critical: This updates the editor content when data is fetched from the API
  useEffect(() => {
    if (editor && initialContent && editor.isEmpty) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  return (
    <div style={{
      borderRadius: '8px',
      backgroundColor: 'white',
      width: '100%',
    }}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default StoryEditor;