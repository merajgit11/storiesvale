'use client';
import { useState } from 'react';

export default function RatingComment() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (index) => setRating(index);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { rating, comment });
    // You can replace the above line with API call logic
  };

  return (
    <section className="w-full max-w-4xl overflow-hidden mx-auto text-gray-800">
      <div className="max-w-4xl mx-auto p-6 rounded-lg bg-gray-50 shadow-sm">
        {/* Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Leave a Rating & Comment
        </h2>

        {/* User Info & Comment Box */}
        <div className="flex items-start gap-3 relative">
          {/* Avatar */}
          <img
            src="/img/textured-bg-purple.webp"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex-1">
            {/* Name */}
            <p className="font-semibold text-gray-800 mb-1 mt-2">
              Meraj Publication
            </p>

            <form onSubmit={handleSubmit}>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 storyrating">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleStarClick(i)}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`text-4xl transition ${
                      (hoverRating || rating) >= i
                        ? 'text-yellow-400'
                        : 'text-gray-400'
                    }`}
                  >
                    &#9733;
                  </button>
                ))}
              </div>

              {/* Comment Box */}
              <div className="commntdiv mt-6">
                <textarea
                  rows="3"
                  placeholder="What are your thoughts?"
                  className="w-full bg-gray-100 rounded-md p-3 text-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-[#1d2f49] text-white px-6 py-3 rounded hover:bg-[#20bc68] transition font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
