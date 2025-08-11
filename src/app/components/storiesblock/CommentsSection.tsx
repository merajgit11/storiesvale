'use client';

import { useState } from 'react';

const allComments = [
  {
    id: 1,
    name: 'Sarah Lind',
    avatar: 'img/story-image-2.jpg',
    likedBy: 'Donna',
    likedByAvatar: '/img/story-image-2.jpg',
    text: 'This story really made me reflect. The writing is vivid and emotional — looking forward to more!',
  },
  {
    id: 2,
    name: 'John Doe',
    avatar: 'img/story-image-2.jpg',
    likedBy: 'Ali',
    likedByAvatar: '/img/story-image-2.jpg',
    text: 'Very engaging read! Keep up the great work.',
  },
  {
    id: 3,
    name: 'Emily Zhang',
    avatar: 'img/story-image-2.jpg',
    likedBy: 'Ravi',
    likedByAvatar: '/img/story-image-2.jpg',
    text: 'I love how real the characters felt!',
  },
  {
    id: 4,
    name: 'Marcus Reyes',
    avatar: 'img/story-image-2.jpg',
    likedBy: 'Maya',
    likedByAvatar: '/img/story-image-2.jpg',
    text: 'Looking forward to the next story in this series.',
  },
  {
    id: 5,
    name: 'Nina Patel',
    avatar: 'img/story-image-2.jpg',
    likedBy: 'Zoe',
    likedByAvatar: '/img/story-image-2.jpg',
    text: 'Your stories always spark deep thought. Loved it!',
  },
];

export default function StoryComments() {
  const [replyingTo, setReplyingTo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const initialComments = allComments.slice(0, 3);
  const extraComments = allComments.slice(3);

  const renderComment = (comment) => (
    <div
      key={comment.id}
      className="relative flex items-start gap-4 group border-b border-gray-200 rounded p-5 py-6 pb-6 transition-colors hover:bg-gray-50"
    >
      <img
        src={comment.avatar}
        alt="User Avatar"
        className="w-10 h-10 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
            {comment.name}
            <span className="flex items-center text-sm font-semibold text-emerald-600 border border-emerald-600 rounded-md px-2 py-0.5">
              <img
                src={comment.likedByAvatar}
                alt={`Author ${comment.likedBy}`}
                className="w-4 h-4 rounded-full object-cover mr-1"
              />
              Liked by {comment.likedBy}
            </span>
          </h4>

          <div className="relative">
            <button
              className="hover:text-gray-700 text-gray-400 transition"
              onClick={() => {}}
            >
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>

        <p className="text-[15px] text-gray-700 mt-2 leading-relaxed">
          {comment.text}
        </p>

        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <button className="flex items-center gap-1 hover:text-yellow-500 transition">
            <i className="fa-solid fa-star"></i>
            <span>Like</span>
          </button>
          <button
            className="hover:text-indigo-600 transition"
            onClick={() =>
              setReplyingTo(replyingTo === comment.id ? null : comment.id)
            }
          >
            Reply
          </button>
        </div>

        {replyingTo === comment.id && (
          <div className="mt-3 reply-box">
            <textarea
              rows="3"
              className="w-full border rounded p-2 text-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
              placeholder="Write your reply..."
            ></textarea>
            <div className="flex justify-end mt-2 gap-2">
              <button
                className="px-3 py-1 text-sm rounded bg-gray-300 hover:bg-gray-400 transition"
                onClick={() => setReplyingTo(null)}
              >
                Cancel
              </button>
              <button className="px-3 py-1 text-sm rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 space-y-4 replies-container text-gray-700"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-20">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Comments ({allComments.length})
      </h3>

      {initialComments.map(renderComment)}

      {!showAll && extraComments.length > 0 && (
        <div className="text-left mt-6">
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition"
            onClick={() => setShowAll(true)}
          >
            View All Comments
          </button>
        </div>
      )}

      {showAll &&
        extraComments.map((comment) => (
          <div key={comment.id} className="mt-4">
            {renderComment(comment)}
          </div>
        ))}
    </div>
  );
}
