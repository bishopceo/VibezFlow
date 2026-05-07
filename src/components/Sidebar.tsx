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
    <div className="space-y-6">

      {/* ── Trending / Comments / Latest (EXACT TABULAR BOX) ── */}
      <div className="bg-white border border-gray-200">
        {/* Tab Row */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {(["trending", "comments", "latest"] as const).map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-wider relative transition-colors ${
                idx !== 2 ? 'border-r border-gray-200' : ''
              } ${
                activeTab === tab
                  ? "text-red-600 bg-white"
                  : "text-gray-500 hover:text-red-600"
              }`}
            >
              {/* Active Tab: Red Top Border */}
              {activeTab === tab && (
                <span className="absolute top-[-1px] left-[-1px] right-[-1px] h-[2px] bg-red-600 z-10" />
              )}
              {/* Active Tab: Hide the bottom border to blend with the content box */}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-white z-10" />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="p-4">
          {displayed.map((post, idx) => (
            <div key={post.id} className="flex gap-4 group cursor-pointer py-3.5 border-b border-gray-100 first:pt-0 last:border-0 last:pb-0">
              <div className="relative w-[75px] h-[55px] flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1.5">
                  {post.title}
                </h4>
                <span className="text-[10px] text-gray-400 font-medium">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Popular Stories ── */}
      <div className="bg-white">
        {/* Custom Header with partial red underline */}
        <div className="relative mb-4">
          <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider inline-block border-b-2 border-red-600 pb-2">
            Popular Stories
          </h3>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
        </div>

        {/* Top story with image and giant "01" on the right */}
        {trendingPosts[0] && (
          <div className="group cursor-pointer mb-5">
            <div className="relative h-[160px] overflow-hidden mb-3">
              <img
                src={trendingPosts[0].image}
                alt={trendingPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="flex-1">
                <h4 className="text-[13px] font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1.5">
                  {trendingPosts[0].title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                  {trendingPosts[0].shareCount?.toLocaleString()} shares
                </div>
              </div>
              <span className="text-[44px] font-black italic text-gray-100 leading-none tracking-tighter">
                01
              </span>
            </div>
          </div>
        )}

        {/* Numbered list (02, 03, 04...) on the left */}
        <div className="space-y-0">
          {trendingPosts.slice(1, 6).map((post, idx) => (
            <div key={post.id} className="flex gap-4 group cursor-pointer py-3.5 border-t border-gray-100 first:border-t-0">
              <span className="text-[26px] font-black italic text-gray-200 leading-none w-7 flex-shrink-0 pt-0.5">
                {String(idx + 2).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-[13px] font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1.5">
                  {post.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                  {post.shareCount?.toLocaleString()} shares
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 300x600 Ad ── */}
      <div className="bg-gray-50 border border-gray-200 flex flex-col items-center justify-center py-12 text-center">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest">Smart &amp; Responsive</span>
        <span className="text-xs font-bold text-gray-400 mt-1">ADVERTISEMENT</span>
        <span className="text-[10px] text-gray-300 mt-1">300×600</span>
        <button className="mt-4 border border-gray-300 text-gray-500 text-[10px] px-4 py-2 font-bold uppercase tracking-wide hover:bg-gray-200 hover:text-gray-700 transition-colors">
          LEARN MORE
        </button>
      </div>

      {/* ── Stay Connected ── */}
      <div className="bg-gray-900 text-white p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 pb-3 border-b border-gray-700">
          Stay Connected
        </h3>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Facebook", count: "12.4k", color: "bg-[#3b5998]" },
            { label: "Twitter", count: "8.1k", color: "bg-[#000000]" },
            { label: "Instagram", count: "31.5k", color: "bg-[#e1306c]" },
            { label: "YouTube", count: "140.6k", color: "bg-[#ff0000]" },
            { label: "Behance", count: "137", color: "bg-[#1769ff]" },
            { label: "Flickr", count: "640", color: "bg-[#ff0084]" },
          ].map(({ label, count, color }) => (
            <a key={label} href="#" className={`${color} p-2.5 flex flex-col items-center hover:opacity-90 transition-opacity`}>
              <span className="text-sm font-black leading-none mb-1">{count}</span>
              <span className="text-[8px] text-white/80 text-center uppercase tracking-wider">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Get Daily Updates ── */}
      <div className="bg-red-600 text-white p-5">
        <h3 className="text-sm font-bold mb-1">Get Daily Updates</h3>
        <p className="text-[11px] text-red-200 mb-4">Subscribe and never miss a beat.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2.5 text-xs text-gray-800 bg-white focus:outline-none mb-2"
        />
        <button className="w-full bg-black hover:bg-gray-900 text-white py-2.5 text-xs font-bold uppercase tracking-widest transition-colors">
          Subscribe
        </button>
      </div>

    </div>
  );
}