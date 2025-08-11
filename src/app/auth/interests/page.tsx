'use client';

import App from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useState } from 'react';
import { Check } from 'lucide-react';

const categories = [
  'Adventure', 'Childrens', 'Fantasy',
  'Comedy', 'Fiction', 'Historical Fiction',
  'Horror', 'Inspirational', 'LGBTQ+',
  'Mystery', 'Non-Fiction', 'Romance',
  'Science Fiction'
];

export default function InterestsPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelected(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleContinue = () => {
    alert(`Selected Categories: ${selected.join(', ')}`);
    // Save or navigate here
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-2xl font-semibold mb-2 text-black">
            Select Categories as per your Interest
          </h1>
          <p className="text-gray-600 mb-8">
            The choice won’t limit your experience
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {categories.map(category => {
              const isSelected = selected.includes(category);
              return (
                <button
  key={category}
  onClick={() => toggleCategory(category)}
  className={`relative border-2 rounded-md px-4 py-3 font-medium flex items-center justify-center text-black transition duration-150
    ${
      isSelected
        ? 'border-[#1d2f49]'
        : 'border-gray-300 hover:border-[#1d2f49]'
    } bg-white`}
>
  {category}
  {isSelected && (
    <span className="absolute right-1 text-[#fff] bg-[#2ee081] rounded-full" style={{padding:3,top:"-12px"}}>
      <Check size={16} strokeWidth={3} />
    </span>
  )}
</button>

              );
            })}
          </div>

          <button
            onClick={handleContinue}
            className="w-full max-w-xs bg-[#1d2f49] text-white py-3 rounded-md font-semibold hover:bg-[#1d2f49] transition"
          >
            Continue
          </button>
        </div>
      </div>
      <App />
    </>
  );
}
