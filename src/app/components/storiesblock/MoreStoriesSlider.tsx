import React from "react";
import Image from "next/image";

const MoreStoriesSlider = () => {
  return (
    <section className="storiestr py-12 relative" id="viewmorestories">
      <div>
        <h2 className="text-1xl font-bold text-white mb-6">View more like this</h2>

        <div className="slider-container relative">
          {/* Left Arrow */}
          <button className="scroll-left absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button className="scroll-right absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Cards */}
          <div className="story-scroll -mx-6 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-mandatory pb-4">
            {[...Array(10)].map((_, idx) => {
              const titles = [
                "Atomic Habits",
                "Ikigai",
                "Deep Work",
                "Rich Dad Poor Dad",
                "The Alchemist",
                "Thinking, Fast & Slow",
                "Start with Why",
                "48 Laws of Power",
                "You Are a Badass",
                "The Power of Now",
              ];
              const authors = [
                "James Clear",
                "Héctor García",
                "Cal Newport",
                "Robert Kiyosaki",
                "Paulo Coelho",
                "Daniel Kahneman",
                "Simon Sinek",
                "Robert Greene",
                "Jen Sincero",
                "Eckhart Tolle",
              ];
              const ratings = [4.2, 4.3, 4.4, 4.5, 4.6, 4.1, 4.3, 4.0, 4.0, 4.5];
              return (
                <div
                  key={idx}
                  className="story-card min-w-[200px] max-w-[200px] bg-white rounded-xl snap-start shrink-0 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <Image
                    src={`/img/story-image-${(idx % 6) + 1}.jpg`}
                    alt={`Book cover of ${titles[idx]}`}
                    className="story-cover"
                    loading="lazy"
                    width={200}
                    height={260}
                  />
                  <div className="py-4 px-3 story-details">
                    <p className="text-xs text-gray-500 uppercase mb-1">Self Help</p>
                    <h3 className="text-lg font-semibold line-clamp-2 min-h-[55px]">
                      {titles[idx]}
                    </h3>
                    <p className="text-sm text-gray-600">By {authors[idx]}</p>
                    <div className="rating text-yellow-600 text-sm mt-1">
                      ★★★★☆ ({ratings[idx]})
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreStoriesSlider;
