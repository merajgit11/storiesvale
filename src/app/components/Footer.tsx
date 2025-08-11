'use client';

import React from 'react';
// Import Lucide React icons
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function App() {
  return (
    <footer className="bg-[#2e2e2e] py-12 px-4 sm:px-6 lg:px-12 text-gray-700 font-inter">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Blinkist Logo and Tagline */}
        <div className="flex flex-col items-start md:col-span-1">
          <div className="flex items-center mb-4">
            {/* Blinkist Logo - Using SVG for scalability */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 text-[#00c49a]" // Using a specific green for the logo
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.5 16H8V8H11.5C13.156 8 14.5 9.344 14.5 11C14.5 12.656 13.156 14 11.5 14H9V16H11.5ZM16 16H14.5V8H16V16Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-bold text-[#fff]">StoriesVale</span>
          </div>
          <p className="text-lg font-semibold text-[#fff] leading-tight">
            Powerful ideas—
            <br />
            15 minutes at a time
          </p>
          {/* App Store Icons (Excluded as per request) */}
        </div>

        {/* Column 2: Editorial Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-[#fff] mb-4">For Authors</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-[#fff] text-sm">Book lists</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-[#fff] mb-4">Useful links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-[#fff] text-sm">Pricing</a></li>
            <li><a href="#" className="hover:underline text-[#fff] text-sm">Category</a></li>
            <li><a href="#" className="hover:underline text-[#fff] text-sm">Contact & Help</a></li>
          </ul>
        </div>

        {/* Column 4: Company Links and Social Media */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-[#fff] mb-4">Company</h3>
          <ul className="space-y-2 mb-6">
            <li><a href="#" className="hover:underline text-[#fff] text-sm">About</a></li>
            <li><a href="#" className="hover:underline text-[#fff] text-sm">Careers</a></li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600">
              <Facebook className="w-6 h-6" />
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-700">
              <Linkedin className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Links */}
      <div className="max-w-8xl mx-auto mt-8 pt-6 border-t border-gray-300 text-sm text-gray-500 flex flex-wrap justify-between items-center gap-4">
        <p>&copy; StoriesVale 2025</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li><a href="#" className="hover:underline text-white">Sitemap</a></li>
          <li><a href="#" className="hover:underline text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:underline text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
