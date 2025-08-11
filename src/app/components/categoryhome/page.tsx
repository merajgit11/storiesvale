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

const categories = [
  { name: 'Popular', icon: <Star className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Romance', icon: <Heart className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Horror', icon: <Ghost className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Fantasy', icon: <Sparkles className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Sci-Fi', icon: <Globe className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Adventure', icon: <Rocket className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Drama', icon: <User className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Fanfiction', icon: <BookOpen className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Thriller', icon: <Flame className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Creative Writing', icon: <PenLine className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Psychology', icon: <Brain className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Art & Design', icon: <Palette className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'History', icon: <Landmark className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Nature', icon: <Leaf className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Travel', icon: <Mountain className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Music', icon: <Music className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Movies', icon: <Film className="w-6 h-6 text-[#2ee081]" /> },
  { name: 'Poetry', icon: <Mic className="w-6 h-6 text-[#2ee081]" /> },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#eff5f387] py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
          A world of stories in your pocket
        </h2>
        <p className="text-gray-500 text-xl">What are you interested in?</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl text-xs font-medium transition duration-200 bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            >
              {cat.icon}
              <span className="text-lg">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}