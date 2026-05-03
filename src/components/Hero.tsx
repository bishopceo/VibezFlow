"use client";

import { useState } from "react";
import { articles } from "@/data/articles";

export default function Hero() {
  const heroArticles = articles.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroArticle = heroArticles[activeIndex];
  const sideArticles = articles.slice(1, 4);

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="content-container px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">

          {/* ── LEFT: Main hero + thumbnail strip ── */}
          <div>
            {/* Main image */}
            <div className="relative h-[360px] overflow-hidden group cursor-pointer">
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
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>

              {/* Next arrow */}
              <button
                onClick={() => setActiveIndex((p) => (p + 1) % heroArticles.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-7 h-7 flex items-center justify-center text-lg leading-none transition-colors"
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
                    idx === activeIndex
                      ? "ring-2 ring-red-600"
                      : "opacity-60 hover:opacity-100"
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

          {/* ── RIGHT: 3 stacked side articles ── */}
          <div className="flex flex-col gap-1.5">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="relative flex-1 min-h-[110px] overflow-hidden group cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-xs font-semibold leading-snug group-hover:text-red-300 transition-colors line-clamp-2 mb-0.5">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-[10px]">{article.date}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}