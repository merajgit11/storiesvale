'use client';
import Image from 'next/image';
import Link from 'next/link'; // For navigation
import { useRef } from 'react';

interface Story {
  id: number;
  title: string;
  slug: string;
  cover_image: string;
  category?: { name: string };
  author?: { name: string };
}


export default function NewReleases({ stories, loading }: { stories: Story[], loading: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (loading) return <div className="p-10 text-center"></div>;


  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 pb-6 bg-white" id="topstoryrated">
      <h2 className="text-xl font-bold text-[#000000] mb-2 px-6 md:px-13">New Releases</h2>

      <div className="relative ">
        {/* Left Arrow */}
        <button
          onClick={() => scrollByAmount(-300)}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollByAmount(300)}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Stories */}
        <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar space-x-5 px-6">
          {stories.map((story) => (
            <Link 
              key={story.id} 
              href={`/story/${story.slug}`} // Link to the dynamic reader page
              className="min-w-[200px] max-w-[200px] group"
            >
              <div className="bg-[#eff5f3] rounded-xl overflow-hidden transition-all hover:shadow-lg">
                <img
                  src={story.cover_image ? `https://api11.storiesvale.com/public/${story.cover_image}` : '/img/placeholder.jpg'}
                  alt={story.title}
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform"
                />
                <div className="py-4 px-3">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {story.category?.name || 'Story'}
                  </p>
                  <h3 className="text-sm font-semibold text-black line-clamp-2 min-h-[40px]">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-500">By {story.author?.name || 'StoriesVale'}</p>
                  <div className="text-yellow-600 text-sm mt-1">★★★★☆ (5)</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
