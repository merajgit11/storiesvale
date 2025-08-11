'use client'; // This directive marks the component as a Client Component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import Image from 'next/image';
import 'swiper/css/pagination'; // Pagination styles if you decide to use them
import { Pagination, Autoplay } from 'swiper/modules'; // Import modules if needed

// You might need to adjust the image paths or use actual image imports in a real Next.js app
const testimonials = [
  {
    id: 1,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  {
    id: 2,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  {
    id: 3,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  {
    id: 4,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  {
    id: 5,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  {
    id: 6,
    image: '/img/social_leaders.png', // Placeholder image
    quote: 'Most CEOs read a book a week. Many use programs like this to acquire key concepts that help them keep a fresh perspective helping hone vision, strategy and action.',
  },
  
];

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center text-gray-800 mb-12 max-w-4xl leading-tight">
        Join 31+ million people growing with <span className="text-[#2ee081]">StoriesVale.com</span>
      </h1>

      {/* Swiper Slider Container */}
      <div className="w-full max-w-7xl" id='swiperpaddfx'>
        <Swiper
          // Optional: Add modules like Pagination if you want dots at the bottom
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // Responsive breakpoints
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }} // Enable clickable pagination dots
          autoplay={{
            delay: 4000, // Autoplay with 4 seconds delay
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          className="mySwiper pb-10" // Add padding-bottom for pagination dots
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col md:flex-row gap-6">
      {/* Image + Icon */}
      <div style={{width:"30%"}}>
        <Image
          src="/img/social_leaders.png"
          alt="A Blinkist user"
          width={140}
          height={140}
          className="rounded-2xl"
        />        
      </div>

      
      <div style={{width:"90%"}}>
        
        <span className="hidden md:block mb-4" id='quotesi'>
          <svg
            viewBox="0 0 40 40"
            className="w-16 text-blue-600"
            fill="currentColor"
          >
            <path d="M29.3692 33.1982C32.5892 33.1982 35.2012 30.5122 35.2012 27.1982C35.2012 23.8862 32.5892 21.1982 29.3692 21.1982C23.5392 21.1982 27.4252 9.60024 35.2012 9.60024V6.80024C21.3232 6.79824 15.8852 33.1982 29.3692 33.1982ZM12.5692 33.1982C15.7872 33.1982 18.3992 30.5122 18.3992 27.1982C18.3992 23.8862 15.7872 21.1982 12.5692 21.1982C6.73717 21.1982 10.6232 9.60024 18.3992 9.60024V6.80024C4.52317 6.79824 -0.914829 33.1982 12.5692 33.1982Z" />
          </svg>
        </span>

        
        

        {/* Quote */}
        <p className="text-lg text-gray-800 font-serif">
          Most CEOs read a book a week. Many use programs like this to acquire key concepts that{' '}
          <span className="font-bold">help them keep a fresh perspective helping hone vision, strategy and action.</span>
        </p>
      </div>
    </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
