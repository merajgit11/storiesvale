'use client';

import Image from 'next/image';
import Link from 'next/link';
import Homebannerscroll from './homebannerright';

export default function Hero() {
  return (
     <section className="bg-[#f1fff7] w-full pb-0" id='homepage'>
      <div className="w-full mx-auto px-8 md:px-13  flex flex-col-reverse lg:flex-row gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 flex  flex-col justify-center">
          <h1 className="text-[42px] md:text-[55px] leading-tight md:leading-[75px] font-bold text-[#1a283f]">
            The #1 place <br /> to read and write <span className='text-[#2ee081]'>powerful stories</span>
          </h1>

          <p className="mt-4 text-lg text-gray-800 mx-auto lg:mx-0 max-w-[85%]" style={{lineHeight:"30px"}}>
  Read free short stories in <a href="/horror" className='font-semibold italic'>horror</a>, <a href="/romance" className='font-semibold italic'>romance</a>, <a href="/sci-fi" className='font-semibold italic'>sci-fi</a>,  <a href="/fantasy" className='font-semibold italic'>fantasy</a>.
  Write, publish, and earn – share your voice with a global community.
</p>



          <div className="mt-12">
            <Link
              href="#"
              className="bg-[#2ee081] text-[#1a283f] hover:text-[#fff] px-12 py-4 rounded hover:bg-[#1a283f] transition font-semibold text-[18px]"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
           <div className="container">
      
      <Homebannerscroll animation="marquee-up" />
      <Homebannerscroll animation="marquee-down" />
      <Homebannerscroll animation="marquee-up" />
      
    </div>

    {/* Fade overlays */}
    <div className="fade-top"></div>
    <div className="fade-bottom"></div>
        </div>

      </div>
    </section>
  );
}
