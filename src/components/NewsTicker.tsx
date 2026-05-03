"use client";

import { useState, useEffect } from "react";
import { breakingNews } from "@/data/articles";

function timeAgo(index: number): string {
  const times = ["2 hours ago", "5 hours ago", "1 day ago", "2 days ago", "3 days ago"];
  return times[index % times.length];
}

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + breakingNews.length) % breakingNews.length);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % breakingNews.length);

  const current = breakingNews[currentIndex];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="content-container px-4">
        <div className="flex items-center h-10">

          {/* NEWSFLASH badge */}
          <div className="flex-shrink-0 flex items-center gap-1.5 bg-red-600 text-white px-3 h-full">
            <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
              <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
            </svg>
            <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">Newsflash</span>
          </div>

          {/* Single scrolling headline */}
          <div className="flex-1 overflow-hidden px-4 flex items-center">
            <a
              href="#"
              key={currentIndex}
              className="text-sm text-gray-700 hover:text-red-600 transition-colors truncate font-medium"
            >
              {current.title}
            </a>
            <span className="text-xs text-gray-400 ml-3 flex-shrink-0 whitespace-nowrap">
              {timeAgo(currentIndex)}
            </span>
          </div>

          {/* Prev / Next arrows */}
          <div className="flex items-center gap-0 flex-shrink-0">
            <button
              onClick={goPrev}
              className="w-8 h-10 flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors border-l border-gray-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="w-8 h-10 flex items-center justify-center text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors border-l border-gray-200"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}