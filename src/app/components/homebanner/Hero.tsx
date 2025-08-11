'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
     <section className="bg-[#f1fff7] w-full pb-0">
      <div className="w-full mx-auto px-8 md:px-16 py-16 flex flex-col-reverse lg:flex-row gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-4">
          <h1 className="text-[42px] md:text-[55px] leading-tight md:leading-[75px] font-bold text-[#000000]">
            The #1 place <br /> to read and write <span className='text-[#2ee081]'>powerful stories</span>
          </h1>

          <p className="mt-4 text-lg text-gray-800 mx-auto lg:mx-0 max-w-[85%]">
            Read free short stories in <strong>horror, romance, sci-fi, fantasy</strong>. <br />
            Write, publish, and earn – share your voice with a global community.
          </p>

          <div className="mt-12">
            <Link
              href="#"
              className="bg-[#2ee081] text-white px-12 py-4 rounded hover:bg-[#20bc68] transition font-semibold text-[18px]"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/desktop-img.png"
            alt="Banner"
            width={1081}
            height={880}
            className="w-full h-auto mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
