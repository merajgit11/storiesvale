'use client';

import {
  Flame,
  Ghost,
  Sparkles,
  BookOpen,
  Heart,
  User,
  Star,
  Globe,
  Rocket,
  PenLine,
  Brain,
  Palette,
  Landmark,
  Leaf,
  Mountain,
  Music,
  Film,
  Mic,
} from 'lucide-react';

const otherCategories = [
  { name: 'Romance', icon: <Heart className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Horror', icon: <Ghost className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Fantasy', icon: <Sparkles className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Sci-Fi', icon: <Globe className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Drama', icon: <User className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Fanfiction', icon: <BookOpen className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Thriller', icon: <Flame className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Mystery', icon: <Flame className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'History', icon: <Landmark className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Travel', icon: <Leaf className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Adventure', icon: <Mountain className="w-5 h-5 text-[#2ee081]" /> },
  
];

export default function OtherCategories() {
  return (
    <div className="pt-0 py-4 mb-6 sticky top-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Categories</h3>
      <div className="flex flex-wrap gap-3">
        {otherCategories.map((cat, index) => (
          <a
            key={index}
            href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center gap-2 px-2 py-2 rounded-xl text-[15px] font-medium transition duration-200 bg-[#f9fafb] text-gray-700 hover:bg-gray-100 border border-gray-200"
          >
            {cat.icon}
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
}
