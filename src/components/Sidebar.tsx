"use client";

import { useState } from "react";
import { trendingPosts, articles } from "@/data/articles";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"trending" | "comments" | "latest">("trending");

  const tabArticles = {
    trending: trendingPosts.slice(0, 3),
    comments: [...articles].sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0)).slice(0, 3),
    latest: articles.slice(0, 3),
  };

  const displayed = tabArticles[activeTab];

  return (
    <div className="space-y-5">

      {/* Trending / Comments / Latest */}
      <div className="bg-white">
        <div className="flex border-b border-gray-200">
          {(["trending", "comments", "latest"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-xs font-bold capitalize transition-colors ${
                activeTab === tab
                  ? "text-red-600 border-b-2 border-red-600 -mb-px"
                  : "text-gray-500 hover:text-red-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="py-3 space-y-3">
          {displayed.map((post) => (
            <div key={post.id} className="flex gap-3 group cursor-pointer px-3">
              <div className="relative w-[68px] h-[50px] flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-0.5">
                  {post.title}
                </h4>
                <span className="text-[10px] text-gray-400">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Stories */}
      <div className="bg-white p-4">
        <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide pb-2 mb-3 border-b-2 border-red-600">
          Popular Stories
        </h3>

        {/* Top story with image */}
        {trendingPosts[0] && (
          <div className="group cursor-pointer mb-3">
            <div className="relative h-[140px] overflow-hidden mb-2">
              <img
                src={trendingPosts[0].image}
                alt={trendingPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-xs font-bold text-red-600 hover:text-red-700 leading-snug line-clamp-2 mb-1">
              {trendingPosts[0].title}
            </h4>
            <div className="flex items-center gap-2 text-[10px] text-gray-400">
              <span>{trendingPosts[0].shareCount?.toLocaleString()} shares</span>
              <span>·</span>
              <a href="#" className="hover:text-red-600">Share</a>
            </div>
          </div>
        )}

        {/* Numbered list */}
        <div className="space-y-2.5">
          {trendingPosts.slice(1, 6).map((post, idx) => (
            <div key={post.id} className="flex gap-2 group cursor-pointer pb-2.5 border-b border-gray-100 last:border-0 last:pb-0">
              <span className="text-2xl font-black text-gray-100 leading-none w-6 flex-shrink-0">{String(idx + 2).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-gray-400">
                  <span>{post.shareCount?.toLocaleString()} shares</span>
                  <span>·</span>
                  <a href="#" className="hover:text-red-600">Share</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 300x600 Ad */}
      <div className="bg-gray-50 border border-gray-200 flex flex-col items-center justify-center py-10 text-center">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Smart &amp; Responsive</span>
        <span className="text-xs font-bold text-gray-400 mt-1">ADVERTISEMENT</span>
        <span className="text-[10px] text-gray-300 mt-1">300×600</span>
        <button className="mt-3 border border-gray-300 text-gray-500 text-[10px] px-4 py-1.5 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
          LEARN MORE
        </button>
      </div>

      {/* Stay Connected */}
      <div className="bg-gray-900 text-white p-4">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-b border-gray-700">
          Stay Connected
        </h3>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Facebook", count: "12.4k", color: "bg-blue-600" },
            { label: "Twitter/X", count: "8.1k", color: "bg-black" },
            { label: "Instagram", count: "31.5k", color: "bg-pink-600" },
            { label: "YouTube", count: "140.6k", color: "bg-red-600" },
            { label: "Behance", count: "137", color: "bg-blue-500" },
            { label: "Flickr", count: "640", color: "bg-pink-500" },
          ].map(({ label, count, color }) => (
            <a key={label} href="#" className={`${color} p-2 flex flex-col items-center hover:opacity-90 transition-opacity`}>
              <span className="text-sm font-black leading-tight">{count}</span>
              <span className="text-[9px] text-white/70 text-center leading-tight mt-0.5">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Get Daily Updates */}
      <div className="bg-red-600 text-white p-4">
        <h3 className="text-sm font-bold mb-1">Get Daily Updates</h3>
        <p className="text-xs text-red-200 mb-3">Subscribe and never miss a beat.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none mb-2"
        />
        <button className="w-full bg-black hover:bg-gray-900 text-white py-2 text-xs font-bold uppercase tracking-wide transition-colors">
          Subscribe
        </button>
      </div>

      {/* 300x250 Ad */}
      <div className="bg-gray-50 border border-gray-200 flex flex-col items-center justify-center py-8 text-center">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Smart &amp; Responsive</span>
        <span className="text-xs font-bold text-gray-400 mt-1">ADVERTISEMENT</span>
        <span className="text-[10px] text-gray-300 mt-1">300×250</span>
        <button className="mt-3 border border-gray-300 text-gray-500 text-[10px] px-4 py-1.5 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
          LEARN MORE
        </button>
      </div>

    </div>
  );
}