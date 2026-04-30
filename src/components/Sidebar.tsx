"use client";

import { useState } from "react";
import { trendingPosts, articles } from "@/data/articles";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"trending" | "comments" | "latest">("trending");

  const getLatestPosts = () => articles.slice(0, 5);
  const displayedPosts = activeTab === "latest" ? getLatestPosts() : trendingPosts;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-sm p-5 card-shadow">
        <ul className="flex border-b border-gray-200 mb-4">
          <li className="flex-1">
            <button
              onClick={() => setActiveTab("trending")}
              className={`w-full pb-3 text-sm font-bold text-center transition-colors ${
                activeTab === "trending" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500 hover:text-red-600"
              }`}
            >
              Trending
            </button>
          </li>
          <li className="flex-1">
            <button
              onClick={() => setActiveTab("comments")}
              className={`w-full pb-3 text-sm font-bold text-center transition-colors ${
                activeTab === "comments" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500 hover:text-red-600"
              }`}
            >
              Comments
            </button>
          </li>
          <li className="flex-1">
            <button
              onClick={() => setActiveTab("latest")}
              className={`w-full pb-3 text-sm font-bold text-center transition-colors ${
                activeTab === "latest" ? "text-red-600 border-b-2 border-red-600" : "text-gray-500 hover:text-red-600"
              }`}
            >
              Latest
            </button>
          </li>
        </ul>

        <div className="space-y-4">
          {displayedPosts.slice(0, 5).map((post, index) => (
            <div key={post.id} className="flex gap-3 group cursor-pointer">
              <div className="relative w-20 h-14 flex-shrink-0 overflow-hidden rounded-sm">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500 mt-1 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-sm p-5 card-shadow">
        <h3 className="text-base font-bold text-gray-800 pb-2 border-b-2 border-red-600">Popular Stories</h3>
        <div className="space-y-4 mt-4">
          {trendingPosts.slice(0, 4).map((post, idx) => (
            <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <span className="text-2xl font-bold text-gray-200 float-left mr-3">{idx + 1}</span>
              <h4 className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors cursor-pointer leading-snug">
                {post.title}
              </h4>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span>{post.shareCount?.toLocaleString()} shares</span>
                <span className="mx-2 text-gray-300">|</span>
                <a href="#" className="hover:text-red-600">Share</a>
                <span className="mx-2 text-gray-300">|</span>
                <a href="#" className="hover:text-red-600">Tweet</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white rounded-sm p-6 text-center">
        <h3 className="text-base font-bold mb-4 pb-2 border-b border-gray-700">Stay Connected</h3>
        <div className="flex justify-center space-x-3 mb-4">
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 flex items-center justify-center rounded-sm transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 flex items-center justify-center rounded-sm transition-colors">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.88A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.2,9.72,4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21A13.9,13.9,0,0,0,21.56,7.68c0-.21,0-.42,0-.63A12.62,12.62,0,0,0,24,4.59Z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 flex items-center justify-center rounded-sm transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 flex items-center justify-center rounded-sm transition-colors">
            <span className="sr-only">YouTube</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.84.55,9.38.55,9.38.55s7.54,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"/>
            </svg>
          </a>
        </div>
        <div className="text-xs text-gray-400 space-y-1">
          <div><span className="text-white font-medium">360</span> Followers</div>
          <div><span className="text-white font-medium">760</span> Followers</div>
          <div><span className="text-white font-medium">140.6k</span> Subscribers</div>
        </div>
      </div>
    </div>
  );
}
