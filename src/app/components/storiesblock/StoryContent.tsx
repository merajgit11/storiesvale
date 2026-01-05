'use client';

interface StoryContentProps {
  content: string;
  title?: string;
}

export default function StoryContent({ content, title }: StoryContentProps) {
  // Fallback in case content is empty
  if (!content) {
    return (
      <section className="w-full max-w-4xl mx-auto py-12 text-center text-gray-400 italic">
        This story has no content yet.
      </section>
    );
  }

  return (
    <section
      className="w-full max-w-4xl overflow-hidden mx-auto py-12 pb-4 text-gray-800 px-4 md:px-0"
      style={{
        fontFamily: "'Merriweather', Georgia, Cambria, 'Times New Roman', Times, serif",
      }}
    >
      {/* We use dangerouslySetInnerHTML because the content from the editor 
        contains HTML tags like <p>, <strong>, <em>, etc. 
      */}
      <div
        id="storyContent"
        className="story-body text-[1.25rem] leading-[2rem] md:text-[1.5rem] md:leading-[2.8rem] tracking-normal"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <style jsx global>{`
        /* Styling the HTML elements coming from the database */
        #storyContent p {
          margin-bottom: 1.5rem;
        }
        #storyContent strong {
          font-weight: 700;
          color: #1a1a1a;
        }
        #storyContent em {
          font-style: italic;
        }
        #storyContent h2, #storyContent h3 {
          font-family: sans-serif;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
      `}</style>
    </section>
  );
}