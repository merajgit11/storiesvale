'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressCTA() {
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const story = document.getElementById('storyContent');
      if (!story) return;

      const storyTop = story.offsetTop;
      const storyHeight = story.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;
      const distanceScrolled = scrollY - storyTop;
      const totalScrollable = storyHeight;

      let percent = (distanceScrolled / totalScrollable) * 100;
      percent = Math.min(Math.max(percent, 0), 100); // Clamp 0–100
      setProgress(percent);

      // Show/hide CTA card
      setShowCTA(percent >= 99);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Circular Progress */}
      <div
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg"
        style={{ display: progress > 0 && progress < 100 ? 'flex' : 'none' }}
      >
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background Circle */}
          <path
            className="text-gray-200"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress Circle */}
          <path
            className="text-yellow-500"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${progress}, 100`}
            stroke="currentColor"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute text-xs font-bold text-gray-700">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Floating CTA Card */}
      {showCTA && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-full max-w-xs bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50 animate-fadeInUp transition-all">
          {/* Dismiss Button */}
          <button
            onClick={() => setShowCTA(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-sm font-bold"
          >
            ×
          </button>

          {/* CTA Content */}
          <p className="text-sm text-gray-800 font-medium mb-3">
            Enjoyed this story?
          </p>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-all mb-2">
            Subscribe to Author
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all mb-2">
            Explore Mystery Stories
          </button>

          <a
            href="/write-story"
            className="block text-center text-sm text-gray-500 hover:text-indigo-600 font-medium"
          >
            Become a Writer →
          </a>
        </div>
      )}
    </>
  );
}
