"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="bg-black text-white text-xs py-2">
          <div className="content-container px-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="hover:text-gray-300 cursor-pointer">About</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer">Advertise</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer">Privacy & Policy</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer">Contact Us</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-gray-300">FB</a>
              <a href="#" className="hover:text-gray-300">TW</a>
              <a href="#" className="hover:text-gray-300">IG</a>
              <a href="#" className="hover:text-gray-300">YT</a>
              <a href="#" className="hover:text-gray-300">RSS</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-gray-300">Login</a>
            </div>
          </div>
        </div>

        <div className="content-container px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <span className="text-3xl font-bold text-red-600">JNews</span>
              <span className="text-lg text-gray-500 ml-1">Default</span>
            </a>
            <div className="hidden md:block">
              <div className="bg-gray-200 border border-gray-300 px-16 py-3 text-gray-500 text-sm font-medium">
                Advertisement (728 x 90)
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t border-b border-gray-200 bg-white">
          <div className="content-container px-4">
            <div className="flex items-center justify-between">
              <ul className="flex items-center">
                <li>
                  <a href="/" className="block px-5 py-3 text-sm font-bold text-white bg-red-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    Entertainment
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-gray-50">
                    Video
                  </a>
                </li>
              </ul>
              <div className="flex items-center">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-3 text-gray-500 hover:text-red-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-3 text-gray-500"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {searchOpen && (
          <div className="absolute right-4 top-full mt-2 bg-white border shadow-lg p-4 z-50 w-72">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type and hit enter..." 
                className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 text-white px-4 py-2 text-sm font-medium">Search</button>
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center bg-white">
            <span className="text-2xl font-bold text-red-600">JNews</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="bg-white">
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-red-600 font-bold">Home</a>
            </li>
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">News</a>
            </li>
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">Tech</a>
            </li>
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">Business</a>
            </li>
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">Entertainment</a>
            </li>
            <li className="border-b py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">Lifestyle</a>
            </li>
            <li className="py-3 px-4">
              <a href="#" className="block text-gray-700 font-medium">Video</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
