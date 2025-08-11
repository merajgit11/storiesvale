'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="shadow-sm bg-white">
      <div className="w-full px-10 py-5 flex items-center justify-between">
        {/* Left side: Logo + Discover + Search */}
        <div className="leftlogolink flex gap-12 items-center">
          {/* Logo */}
          <div className="logo">
            <h2 className='text-black text-2xl font-bold'>StoriesVale</h2>
            {/* <Link href="/">
              <Image
                src="/img/stories-stack-logo.svg"
                alt="Stories Stack Logo"
                width={160}
                height={40}
                className="h-auto w-auto"
                priority
              />
            </Link> */}
          </div>

          {/* Discover + Search */}
          <div className="flex items-center gap-6">
            {/* Discover Link */}
            <Link
              href="/discover"
              className="hover:text-blue-600 text-black font-semibold"
            >
              Discover
            </Link>

            {/* Search Bar */}
            <div className="relative transition-all duration-300 ease-in-out group">
  <input
    type="text"
    placeholder="Search stories..."
    className="h-[45px] search-input border border-gray-300 rounded-full px-5 py-3 w-[300px] group-focus-within:w-[450px] focus:w-[450px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-base transition-all duration-300 ease-in-out placeholder-black"
  />
  <svg
    className="absolute right-4 top-3 w-5 h-5 text-gray-400 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
    />
  </svg>
</div>

          </div>
        </div>

        {/* Right side: Write + Login */}
        <nav className="space-x-10 items-center hidden md:flex">
          <Link
            href="/write"
            className="bg-[#2ee081] text-white px-6 py-3 rounded hover:bg-[#20bc68] transition font-semibold"
          >
            Write a Story
          </Link>
          <Link href="/login" className="text-[#20344d] font-semibold">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
