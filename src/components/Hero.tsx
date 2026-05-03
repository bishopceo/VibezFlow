"use client";

import { useState } from "react";
import { articles } from "@/data/articles";

export default function Hero() {
  const heroArticles = articles.slice(0, 8);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroArticle = heroArticles[activeIndex];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="content-container px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

          {/* Main Hero */}
          <div>
            <div className="relative h-[380px] overflow-hidden group cursor-pointer">
              <img
                src={heroArticle.image}
                alt={heroArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                  {heroArticle.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors">
                  {heroArticle.title}
                </h1>
                <div className="flex items-center text-sm text-gray-300 space-x-3">
                  <span className="uppercase text-xs font-semibold tracking-wide">By {heroArticle.author}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-xs">{heroArticle.date}</span>
                </div>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + heroArticles.length) % heroArticles.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % heroArticles.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white w-8 h-8 flex items-center justify-center transition-colors"
              >
                ›
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
              {heroArticles.map((article, idx) => (
                <button
                  key={article.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-[80px] h-[56px] overflow-hidden transition-opacity ${
                    idx === activeIndex ? "ring-2 ring-red-600 opacity-100" : "opacity-70 hover:opacity-100"
                  }`}
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

          {/* Side Articles */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="relative overflow-hidden group cursor-pointer flex-1 min-h-[120px]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">{article.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}