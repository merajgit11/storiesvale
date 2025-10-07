'use client';

import Image from 'next/image';
import { useRef } from 'react';

const stories = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.2,
    image: '/img/wolf.jpg',
  },
  {
    id: 2,
    title: 'Ikigai',
    author: 'Héctor García',
    category: 'Self Help',
    rating: 4.3,
    image: '/img/story-image-2.jpg',
  },
  {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Self Help',
    rating: 4.4,
    image: '/img/story-image.jpg',
  },
  {
    id: 4,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Self Help',
    rating: 4.5,
    image: '/img/story-image-3.jpg',
  },
  {
    id: 5,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Self Help',
    rating: 4.6,
    image: '/img/story-image-4.jpg',
  },
   {
    id: 6,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.2,
    image: '/img/wolf.jpg',
  },
  {
    id: 7,
    title: 'Ikigai',
    author: 'Héctor García',
    category: 'Self Help',
    rating: 4.3,
    image: '/img/story-image-2.jpg',
  },
  {
    id: 8,
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Self Help',
    rating: 4.4,
    image: '/img/story-image.jpg',
  },
  {
    id: 9,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Self Help',
    rating: 4.5,
    image: '/img/story-image-3.jpg',
  },
  {
    id: 10,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Self Help',
    rating: 4.6,
    image: '/img/story-image-4.jpg',
  },
];

export default function EdiorsPicks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 pb-6 bg-white" id="topstoryrated">
      <h2 className="text-xl font-bold text-[#000000] mb-2 px-6 md:px-13">Edior's Picks</h2>

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
        <div
  ref={scrollRef}
  className="flex overflow-x-auto scroll-smooth whitespace-nowrap no-scrollbar space-x-4 md:space-x-[20px] px-2"
  id="paddleftright"
>
          {stories.map((story) => (
            <div
              key={story.id}
              className="mt-2 min-w-[200px] max-w-[200px] bg-[#eff5f3] rounded-xl snap-start shrink-0 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={200}
                height={280}
                className="rounded-t-md w-full h-[280px] object-cover"
              />
              <div className="py-4 px-3">
                <p className="text-xs text-gray-500 uppercase mb-1">{story.category}</p>
                <h3 className="text-md font-semibold line-clamp-2 min-h-[55px] text-black">{story.title}</h3>
                <p className="text-sm text-gray-600">By {story.author}</p>
                <div className="text-yellow-600 text-sm mt-1">★★★★☆ ({story.rating})</div>
              </div>
            </div>
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
