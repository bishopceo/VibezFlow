"use client";

import { useState } from "react";
import { trendingPosts, articles } from "@/data/articles";

const socialStats = [
  { label: "Facebook", followers: "12.4k", color: "bg-blue-600" },
  { label: "Twitter/X", followers: "8.1k", color: "bg-black" },
  { label: "Instagram", followers: "31.5k", color: "bg-pink-600" },
  { label: "YouTube", followers: "140.6k", color: "bg-red-600" },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"trending" | "latest">("trending");

  const displayedPosts =
    activeTab === "latest"
      ? articles.slice(0, 5)
      : trendingPosts;

  return (
    <div className="space-y-6">
      {/* Trending / Latest Tabs */}
      <div className="bg-white rounded-sm p-5 card-shadow">
        <ul className="flex border-b border-gray-200 mb-4">
          {(["trending", "latest"] as const).map((tab) => (
            <li key={tab} className="flex-1">
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full pb-3 text-sm font-bold text-center capitalize transition-colors ${
                  activeTab === tab
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-500 hover:text-red-600"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          {displayedPosts.slice(0, 5).map((post) => (
            <div key={post.id} className="flex gap-3 group cursor-pointer">
              <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-gray-800 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-400 mt-1 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Stories */}
      <div className="bg-white rounded-sm p-5 card-shadow">
        <h3 className="text-sm font-bold text-gray-800 pb-2 border-b-2 border-red-600 mb-4 uppercase tracking-wide">
          Popular Stories
        </h3>
        <div className="space-y-4">
          {trendingPosts.slice(0, 5).map((post, idx) => (
            <div key={post.id} className="flex gap-3 group cursor-pointer border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <span className="text-3xl font-black text-gray-100 leading-none w-8 flex-shrink-0">{idx + 1}</span>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-800 hover:text-red-600 transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <div className="mt-1.5 flex items-center text-xs text-gray-400 gap-2">
                  <span>{post.shareCount?.toLocaleString()} shares</span>
                  <span>·</span>
                  <a href="#" className="hover:text-red-600 transition-colors">Share</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected */}
      <div className="bg-gray-900 text-white rounded-sm p-5">
        <h3 className="text-sm font-bold pb-3 mb-4 border-b border-gray-700 uppercase tracking-wide">
          Stay Connected
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {socialStats.map(({ label, followers, color }) => (
            <a
              key={label}
              href="#"
              className={`${color} rounded-sm p-3 flex flex-col items-center hover:opacity-90 transition-opacity`}
            >
              <span className="text-lg font-black">{followers}</span>
              <span className="text-xs text-white/70">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-red-600 text-white rounded-sm p-5">
        <h3 className="text-sm font-bold mb-2">Get Daily Updates</h3>
        <p className="text-xs text-red-200 mb-4">Subscribe and never miss a beat.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2.5 text-sm text-gray-800 bg-white rounded-sm focus:outline-none mb-2"
        />
        <button className="w-full bg-black hover:bg-gray-900 text-white py-2.5 text-sm font-bold rounded-sm transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
}