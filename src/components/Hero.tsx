"use client";

import { useState } from "react";
import { articles } from "@/data/articles";

export default function Hero() {
  const heroArticles = articles.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroArticle = heroArticles[activeIndex];

  return (
    <div>
      {/* Main image */}
      <div className="relative h-[380px] overflow-hidden group cursor-pointer">
        <img
          key={activeIndex}
          src={heroArticle.image}
          alt={heroArticle.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 uppercase tracking-wide">
            {heroArticle.category}
          </span>
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => setActiveIndex((p) => (p - 1 + heroArticles.length) % heroArticles.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center text-xl transition-colors"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={() => setActiveIndex((p) => (p + 1) % heroArticles.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-8 h-8 flex items-center justify-center text-xl transition-colors"
          aria-label="Next"
        >
          ›
        </button>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h1 className="text-xl lg:text-2xl font-bold text-white leading-snug mb-2 group-hover:text-red-300 transition-colors">
            {heroArticle.title}
          </h1>
          <div className="flex items-center text-xs text-gray-300 gap-2 uppercase tracking-wide">
            <span>By {heroArticle.author}</span>
            <span className="text-gray-500">·</span>
            <span>{heroArticle.date}</span>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 mt-1.5 overflow-x-auto">
        {heroArticles.map((article, idx) => (
          <button
            key={article.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-shrink-0 w-[76px] h-[52px] overflow-hidden transition-all ${
              idx === activeIndex ? "ring-2 ring-red-600" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={article.title}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}