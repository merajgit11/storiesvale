'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
    <section className="w-full py-10 px-6 md:px-20">
      <div className="">

        <div className='text-center'>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-snug">
            Understand key ideas <br />
            <span className="text-[#2ee081] relative inline-block">
              in 15 minutes
              <span className="block h-[4px] w-[120px] bg-yellow-400 absolute bottom-0 left-0 translate-y-2 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Left Content */}
        <div className="w-full space-y-10 mx-auto flex flex-col max-w-7xl lg:flex-row items-center justify-between gap-16">
          

          <div className="space-y-8">

            {/* Point 1 */}
            

            {/* Point 2 */}
            <div className=" gap-5">
              <div className='mb-5'>
              <Image src="/img/headphones.png" alt="Headphones icon" width={56} height={56} />
              </div>
              <div>
                <h3 className="text-xl mb-1 font-semibold text-gray-900">Feed your curiosity</h3>
                <p className="text-gray-600 m:text-xl text-base">Get personalized recommendations based on 7,500+ <br></br>stories across all genres.</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className=" gap-5">
              <div className='mb-5'>
              <Image src="/img/headphones.png" alt="Headphones icon" width={56} height={56} />
              </div>
              <div>
                <h3 className="text-xl mb-1 font-semibold text-gray-900">Join a global community</h3>
                <p className="text-gray-600 m:text-xl text-base">Connect with readers and authors from around the <br></br>world who share your passion.</p>
              </div>
            </div>

            {/* Point 4 */}
            <div className=" gap-5">
              <div className='mb-5'>
              <Image src="/img/headphones.png" alt="Headphones icon" width={56} height={56} />
              </div>
              <div>
                <h3 className="text-xl mb-1 font-semibold text-gray-900">Write and publish anytime</h3>
                <p className="text-gray-600 m:text-xl text-base">Share your stories instantly. No approval process,<br></br> no barriers.</p>
              </div>
            </div>

          </div>
          <div className="w-full lg:w-1/2">
          <Image
            src="/img/desktop-img.png"
            alt="StoriesVale Mobile Preview"
            width={800}
            height={600}
            priority
          />
        </div>

        

        </div>

        {/* Right Image */}
        
      </div>
      <div className='text-center'>
            <div className="mt-2">
            <Link
              href="#"
              className="bg-[#2ee081] text-white px-12 py-4 rounded hover:bg-[#20bc68] transition font-semibold text-[18px]"
            >
              Get started
            </Link>
            <p className="text-gray-600 m:text-xl text-base mt-6">Join Us Now for the best Adventure</p>
          </div>
        </div>
    </section>
  );
}
