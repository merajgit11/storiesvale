'use client';

import { useState } from 'react';
import { List, LayoutGrid } from 'lucide-react';
import StoryCard from './StoryCard';
import StoryDetailCard from './StoryDetailCard';
import SubCategories from './SubCategories';
import CategoryTags from './CategoryTags';
import OtherCategories from './OtherCategories';
import FaqSection from './FaqSection';
import CategoryAboutSection from './CategoryAboutSection';

// ✅ Define props interface
interface StoryListProps {
  category: string;
  filter: string;
}

const allStories = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Story Title #${i + 1}`,
  author: `Author ${i + 1}`,
  category: ['Adventure', 'Mystery', 'Self Help'][i % 3],
  rating: 3 + ((i % 20) / 5),
  image: `/img/story-${(i % 6) + 1}.jpg`,
  description: `This is a short description of story #${i + 1}, packed with excitement and learning.`,
  comments: (i * 3) % 50,
  editorsPick: i % 5 === 0,
  trendingScore: Math.random(),
}));

const filterOptions = [
  { key: 'all', label: 'All Stories' },
  { key: 'topRated', label: 'Top Rated' },
  { key: 'mostCommented', label: 'Most Commented' },
  { key: 'editorsPick', label: "Editor's Pick" },
  { key: 'trending', label: 'Trending' },
];

export default function StoryList({ category, filter }: StoryListProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');
  const [activeFilter, setActiveFilter] = useState(filter);

  const filtered = allStories
    .filter((s) => {
      if (activeFilter === 'topRated') return s.rating >= 4;
      if (activeFilter === 'mostCommented') return s.comments >= 10;
      if (activeFilter === 'editorsPick') return s.editorsPick;
      if (activeFilter === 'trending') return s.trendingScore > 0.7;
      return true;
    })
    .sort((a, b) => {
      if (activeFilter === 'topRated') return b.rating - a.rating;
      if (activeFilter === 'mostCommented') return b.comments - a.comments;
      if (activeFilter === 'trending') return b.trendingScore - a.trendingScore;
      return a.id - b.id;
    });

  return (
    <>
      <div className="py-8 md:px-10 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR */}
          <aside
            className="w-full lg:w-72 sticky top-10 shrink-0 h-fit"
            style={{ borderRight: '1px solid', paddingRight: 10 }}
          >
            <SubCategories />
            <CategoryTags />
            <OtherCategories />
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex-1 pr-4">
            {/* Filter & View Mode */}
            <div className="flex flex-col md:flex-row justify-end items-center gap-6 mb-6">
              <div className="w-full md:w-auto">
                <select
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 bg-white text-black w-full md:w-auto"
                >
                  {filterOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full ${
                    viewMode === 'grid'
                      ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-500'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('detail')}
                  className={`p-2 rounded-full ${
                    viewMode === 'detail'
                      ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-500'
                      : 'text-gray-500 hover:text-blue-500'
                  }`}
                  title="List View"
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Story Content */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-6">
                {filtered.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((story) => (
                  <StoryDetailCard key={story.id} story={story} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <CategoryAboutSection />
      <FaqSection />
    </>
  );
}
