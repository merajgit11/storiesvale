'use client';

import Image from 'next/image';

interface StoryCardProps {
  story: {
    title: string;
    description: string;
    content: string;
    cover_image: string;
    published_at: string;
    category?: { name: string }; // Assuming Laravel returns the category relationship
    user?: {
      name: string;
      avatar?: string;
    };
  };
}

export default function StoryCard({ story }: StoryCardProps) {
  // 1. Calculate Read Time (Avg 200 words per minute)
  const calculateReadTime = (text: string) => {
    const words = text ? text.split(/\s+/).length : 0;
    const minutes = Math.ceil(words / 200);
    return minutes < 1 ? 1 : minutes;
  };

  // 2. Format Date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Draft';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // 3. Construct Image URL
  const coverUrl = story.cover_image 
    ? `https://api11.storiesvale.com/public/${story.cover_image}`
    : '/img/default-cover.jpg';

  return (
    <section className="py-12 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden mb-12 transition-all">
            <div className="md:flex">
              
              {/* Dynamic Story Image */}
              <div className="md:w-2/5 p-4 flex items-center justify-center bg-gray-50 rounded">
                <img
                  src={coverUrl}
                  alt={story.title}
                  className="w-auto h-60 md:h-80 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Story Details */}
              <div className="p-5 md:p-6 md:w-3/5">
                
                {/* Dynamic Category */}
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {story.category?.name || 'Uncategorized'}
                  </span>
                </div>

                {/* Dynamic Title */}
                <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-2 mt-5 leading-tight">
                  {story.title}
                </h1>

                {/* Dynamic Description/Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm md:text-base italic">
                  {story.description || "No description provided for this story."}
                </p>

                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm mb-6 gap-4">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(story.published_at)}</span>
                  </div>

                  <div className="text-gray-400 text-base">•</div>

                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{calculateReadTime(story.content)} min read</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <img
                      src={story.user?.avatar || "/img/textured-bg-purple.webp"}
                      alt={story.user?.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-gray-800 flex items-center">
                        {story.user?.name || "Meraj"}
                        <span className="ml-1 text-blue-500">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745a3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                          </svg>
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Published Author</div>
                    </div>
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    Follow
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}