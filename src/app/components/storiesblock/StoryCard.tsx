'use client'; // Only if you're using app/ directory and need interactivity

import Image from 'next/image';


export default function StoryCard() {
  return (
    <section className="py-12" style={{ paddingBottom: 0 }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden mb-12 transition-all">
            <div className="md:flex">
              
              {/* Story Image */}
              <div className="md:w-2/5 p-4 flex items-center justify-center bg-gray-50 rounded">
                <img
  src="/img/story-image-2.jpg"
  alt="Story Cover"
  className="w-auto h-60 md:h-80 object-contain rounded-lg"
/>

              </div>

              {/* Story Details */}
              <div className="p-5 md:p-6 md:w-3/5">
                
                {/* Category */}
                <div className="mb-2">
                  <a
                    href="#"
                    className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-300"
                  >
                    Adventure
                  </a>
                </div>

                {/* Title */}
                <h1 className="text-xl md:text-5xl font-bold text-gray-800 mb-2 mt-5 leading-relaxed md:leading-tight">
                  The Adventure of a Lifetime
                </h1>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-2 text-sm md:text-base">
                  This is a brief excerpt from your amazing story that will appear here. It gives readers a taste of what they can expect when they click through to read the full piece.
                </p>

                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm mb-6 gap-4">
                  
                  {/* Date */}
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Jan 2, 2025</span>
                  </div>

                  {/* Separator */}
                  <div className="text-gray-400 text-base">•</div>

                  {/* Read time */}
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>4 min read</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                     <img
  src="/img/story-image-2.jpg"
  alt="Story Cover"
  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
/>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 flex items-center">
                        Meraj
                        <div className="ml-1 w-4 h-4 bg-blue-500 text-white rounded-full p-0.5">
                          <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Published Author</div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition duration-300"
                  >
                    <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Follow
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
