"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/", active: true, hasDropdown: false },
  { label: "Music", href: "#", active: false, hasDropdown: true },
  { label: "Entertainment", href: "#", active: false, hasDropdown: true },
  { label: "Tech", href: "#", active: false, hasDropdown: true },
  { label: "Business", href: "#", active: false, hasDropdown: false },
  { label: "Lifestyle", href: "#", active: false, hasDropdown: true },
  { label: "Video", href: "#", active: false, hasDropdown: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-black text-white text-xs py-1.5">
        <div className="content-container px-4 flex justify-between items-center">
          <div className="hidden sm:flex items-center">
            {["About", "Advertise", "Privacy & Policy", "Contact Us"].map((item, i, arr) => (
              <span key={item} className="flex items-center">
                <a href="#" className="hover:text-gray-300 transition-colors px-2 py-0.5">{item}</a>
                {i < arr.length - 1 && <span className="text-gray-600">|</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.18,15.58,2.16,15.2,2.16,12s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300 transition-colors">
              <svg className="w-3.5 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"/></svg>
            </a>
            <a href="#" aria-label="RSS" className="hover:text-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.18,15.64a2.18,2.18,0,1,1-2.18,2.18A2.18,2.18,0,0,1,6.18,15.64M4,4.44A15.56,15.56,0,0,1,19.56,20h-2.83A12.73,12.73,0,0,0,4,7.27V4.44m0,5.66a9.9,9.9,0,0,1,9.9,9.9H11.07A7.07,7.07,0,0,0,4,13.17V10.1Z"/></svg>
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18,8H17V6A5,5,0,0,0,7,6V8H6a2,2,0,0,0-2,2v10a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10A2,2,0,0,0,18,8ZM12,17a2,2,0,1,1,2-2A2,2,0,0,1,12,17Zm3.1-9H8.9V6a3.1,3.1,0,0,1,6.2,0Z"/></svg>
              Login
            </a>
          </div>
        </div>
      </div>

      {/* LOGO + AD BANNER */}
      <header className="bg-white">
        <div className="content-container px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <a href="/" className="flex-shrink-0 flex items-baseline group">
              <span className="text-[2.6rem] font-black text-red-600 leading-none tracking-tight group-hover:text-red-700 transition-colors">Vibez</span>
              <span className="text-[2.6rem] font-black text-gray-900 leading-none tracking-tight">Flow</span>
              <span className="hidden sm:block text-[10px] text-gray-400 ml-2 self-center leading-none">
                music · news · entertainment
              </span>
            </a>
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-[730px] h-[90px] border border-gray-200 bg-gray-50 text-gray-400 text-sm font-medium gap-3 flex-shrink-0">
              <span>728×90 &nbsp; Smart &amp; Responsive &nbsp; ADVERTISEMENT</span>
              <button className="border border-gray-400 text-gray-500 text-xs px-4 py-1.5 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* NAV ROW */}
        <nav className="border-t border-gray-200 border-b border-b-gray-200">
          <div className="content-container px-4">
            <div className="flex items-center justify-between">
              <ul className="hidden md:flex items-center">
                {navItems.map(({ label, href, active, hasDropdown }) => (
                  <li key={label} className="relative group">
                    <a
                      href={href}
                      className={`flex items-center gap-0.5 px-4 py-3 text-sm font-semibold transition-colors whitespace-nowrap ${
                        active ? "text-white bg-red-600" : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {label}
                      {hasDropdown && (
                        <svg className={`w-3 h-3 ${active ? "text-white" : "text-gray-400 group-hover:text-red-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center ml-auto">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-3 text-gray-500 hover:text-red-600 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-3 text-gray-500 hover:text-red-600 transition-colors"
                  aria-label="Menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {searchOpen && (
              <div className="border-t border-gray-100 py-3">
                <div className="flex max-w-lg">
                  <input
                    type="text"
                    placeholder="Type and hit enter..."
                    autoFocus
                    className="flex-1 px-4 py-2 border border-gray-300 border-r-0 text-sm focus:outline-none focus:border-red-500"
                  />
                  <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-sm font-semibold transition-colors">
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
            <a href="/" className="flex items-baseline">
              <span className="text-2xl font-black text-red-600">Vibez</span>
              <span className="text-2xl font-black text-gray-900">Flow</span>
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex">
              <input type="text" placeholder="Search VibezFlow..." className="flex-1 px-4 py-2 border border-gray-300 border-r-0 text-sm focus:outline-none focus:border-red-500" />
              <button className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">Go</button>
            </div>
          </div>
          <ul>
            {navItems.map(({ label, href, active }) => (
              <li key={label} className="border-b border-gray-100">
                <a href={href} className={`flex items-center justify-between px-5 py-4 text-sm font-semibold transition-colors ${active ? "text-red-600" : "text-gray-700 hover:text-red-600"}`}>
                  {label}
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 py-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
            {["About", "Advertise", "Privacy & Policy", "Contact Us"].map((item) => (
              <a key={item} href="#" className="hover:text-red-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}