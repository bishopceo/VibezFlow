"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        {/* Top Bar */}
        <div className="bg-black text-white text-xs py-2">
          <div className="content-container px-4 flex justify-between items-center">
            <div className="hidden sm:flex items-center space-x-3">
              <span className="hover:text-gray-300 cursor-pointer transition-colors">About</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Advertise</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy & Policy</span>
              <span className="text-gray-600">|</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">Contact Us</span>
            </div>
            <div className="flex items-center space-x-3 ml-auto">
              {[
                { label: "FB", icon: "f" },
                { label: "TW", icon: "𝕏" },
                { label: "IG", icon: "▣" },
                { label: "YT", icon: "▶" },
              ].map(({ label, icon }) => (
                <a key={label} href="#" className="hover:text-red-400 transition-colors text-xs font-medium">{label}</a>
              ))}
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors font-medium">Login</a>
            </div>
          </div>
        </div>

        {/* Logo + Ad Banner */}
        <div className="content-container px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center group">
              <span className="text-3xl font-black text-red-600 tracking-tight group-hover:text-red-700 transition-colors">Vibez</span>
              <span className="text-3xl font-black text-gray-900 tracking-tight">Flow</span>
              <span className="ml-2 text-xs text-gray-400 font-medium hidden sm:block">music · news · entertainment</span>
            </a>
            <div className="hidden md:flex items-center bg-gray-100 border border-gray-200 px-6 py-3 text-gray-400 text-sm font-medium rounded-sm">
              Advertisement (728 × 90)
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="border-t border-b border-gray-200 bg-white">
          <div className="content-container px-4">
            <div className="flex items-center justify-between">
              <ul className="hidden md:flex items-center">
                {[
                  { label: "Home", href: "/", active: true },
                  { label: "Music", href: "#" },
                  { label: "Entertainment", href: "#" },
                  { label: "Tech", href: "#" },
                  { label: "Business", href: "#" },
                  { label: "Lifestyle", href: "#" },
                  { label: "Video", href: "#" },
                ].map(({ label, href, active }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                        active
                          ? "text-white bg-red-600"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-3 text-gray-500 hover:text-red-600 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-3 text-gray-500 hover:text-red-600 transition-colors"
                  aria-label="Menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
              <div className="content-container flex gap-2 max-w-xl">
                <input
                  type="text"
                  placeholder="Search VibezFlow..."
                  autoFocus
                  className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-500 rounded-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-sm font-semibold rounded-sm transition-colors">
                  Search
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="p-4 border-b flex justify-between items-center bg-white shadow-sm">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-black text-red-600">Vibez</span>
              <span className="text-2xl font-black text-gray-900">Flow</span>
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="bg-white">
            {["Home", "Music", "Entertainment", "Tech", "Business", "Lifestyle", "Video"].map((item, i) => (
              <li key={item} className="border-b border-gray-100">
                <a
                  href="#"
                  className={`block py-4 px-5 font-semibold transition-colors ${i === 0 ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search VibezFlow..."
                className="flex-1 px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-red-500 rounded-sm"
              />
              <button className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-sm">Go</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}