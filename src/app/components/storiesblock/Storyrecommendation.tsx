'use client';

import Image from 'next/image';
import { useRef } from 'react';

const stories = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self Help',
    rating: 4.2,
    image: '/img/wolf.jpg',
  },
  {
    title: 'Ikigai',
    author: 'Héctor García',
    category: 'Self Help',
    rating: 4.3,
    image: '/img/story-image-2.jpg',
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Self Help',
    rating: 4.4,
    image: '/img/story-image.jpg',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    category: 'Self Help',
    rating: 4.5,
    image: '/img/story-image-3.jpg',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Self Help',
    rating: 4.6,
    image: '/img/story-image-4.jpg',
  },
  {
    title: 'Thinking, Fast & Slow',
    author: 'Daniel Kahneman',
    category: 'Self Help',
    rating: 4.1,
    image: '/img/story-image-5.jpg',
  },
  {
    title: 'Start with Why',
    author: 'Simon Sinek',
    category: 'Self Help',
    rating: 4.3,
    image: '/img/story-image-6.jpg',
  },
  {
    title: '48 Laws of Power',
    author: 'Robert Greene',
    category: 'Self Help',
    rating: 4.0,
    image: '/img/story-image-2.jpg',
  },
  {
    title: 'You Are a Badass',
    author: 'Jen Sincero',
    category: 'Self Help',
    rating: 4.0,
    image: '/img/story-image.jpg',
  },
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    category: 'Self Help',
    rating: 4.5,
    image: '/img/story-image-2.jpg',
  },
];

export default function Storyrecommendation() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-[#1d2f49]" id="topstoryrated">
  <h2 className="text-xl font-bold text-[#fff] mb-6 px-6 md:px-10">Recomended Stories</h2>

  <div className="relative px-6 md:px-10">
    {/* Left Arrow */}
    <button
      onClick={() => scroll('left')}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Right Arrow */}
    <button
      onClick={() => scroll('right')}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Scrollable Stories */}
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
    >
      {stories.map((story, index) => (
        <div
          key={index}
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
</section>

  );
}
