"use client";

import { useState } from "react";
import { articles } from "@/data/articles";

export default function Hero() {
  // Use exactly 5 articles to match the 5-thumbnail grid layout
  const heroArticles = articles.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroArticle = heroArticles[activeIndex];

  if (!heroArticle) return null;

  return (
    <div className="mb-8">
      {/* ── MAIN HERO IMAGE ── */}
      <div className="relative h-[480px] overflow-hidden group">
        <img
          key={activeIndex}
          src={heroArticle.image}
          alt={heroArticle.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Text Content Overlay */}
        <div className="absolute bottom-0 left-0 right-12 p-6 md:p-8">
          {/* Category */}
          <div className="mb-3">
            <span className="text-red-600 text-[11px] font-black tracking-widest uppercase bg-black/50 px-2.5 py-1">
              {heroArticle.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-[38px] font-bold text-white leading-[1.1] mb-4 tracking-tight group-hover:text-red-500 transition-colors cursor-pointer line-clamp-3">
            {heroArticle.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center text-[10px] md:text-[11px] text-gray-300 gap-2.5 uppercase tracking-wider font-medium">
            <span>By <a href="#" className="text-white hover:text-red-500 transition-colors">{heroArticle.author}</a></span>
            <span className="text-gray-500">·</span>
            <span>{heroArticle.date}</span>
          </div>
        </div>

        {/* ── NAVIGATION ARROWS (Stacked on right edge) ── */}
        <div className="absolute right-0 bottom-0 flex flex-col">
          {/* Next Arrow (Red Box) */}
          <button
            onClick={() => setActiveIndex((p) => (p + 1) % heroArticles.length)}
            className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          {/* Prev Arrow (White Box) */}
          <button
            onClick={() => setActiveIndex((p) => (p - 1 + heroArticles.length) % heroArticles.length)}
            className="bg-white hover:bg-gray-100 text-gray-900 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        </div>
      </div>

      {/* ── THUMBNAIL STRIP ── */}
      <div className="grid grid-cols-5 gap-1 mt-1">
        {heroArticles.map((article, idx) => (
          <button
            key={article.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative h-[70px] md:h-[90px] overflow-hidden group ${
              idx === activeIndex ? "opacity-100" : "opacity-50 hover:opacity-100"
            } transition-opacity duration-300`}
            aria-label={`View ${article.title}`}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Red border bottom for active state */}
            {idx === activeIndex && (
              <div className="absolute inset-0 border-b-4 border-red-600 pointer-events-none"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}