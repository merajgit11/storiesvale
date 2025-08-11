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
  { name: 'Creative Writing', icon: <PenLine className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Psychology', icon: <Brain className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Art & Design', icon: <Palette className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'History', icon: <Landmark className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Nature', icon: <Leaf className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Travel', icon: <Mountain className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Music', icon: <Music className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Movies', icon: <Film className="w-5 h-5 text-[#2ee081]" /> },
  { name: 'Poetry', icon: <Mic className="w-5 h-5 text-[#2ee081]" /> },
];

export default function OtherCategories() {
  return (
    <div className=" py-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Categories</h3>
      <div className="flex flex-wrap gap-3">
        {otherCategories.map((cat, index) => (
          <a
            key={index}
            href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition duration-200 bg-[#f9fafb] text-gray-700 hover:bg-gray-100 border border-gray-200"
          >
            {cat.icon}
            {cat.name}
          </a>
        ))}
      </div>
    </div>
  );
}
