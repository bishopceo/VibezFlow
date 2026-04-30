"use client";

import { breakingNews } from "@/data/articles";
import { useState, useEffect } from "react";

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white">
      <div className="content-container px-4">
        <div className="flex items-center">
          <div className="bg-black text-white px-4 py-2.5 text-sm font-bold uppercase tracking-wider flex-shrink-0">
            Newsflash
          </div>
          <div className="flex-1 overflow-hidden py-2.5">
            <div className="whitespace-nowrap animate-[marquee_25s_linear_infinite]">
              {breakingNews.map((news, index) => (
                <a 
                  key={news.id} 
                  href="#"
                  className={`inline-block mx-8 text-sm hover:underline ${index === currentIndex ? 'text-white font-medium' : 'text-red-200'}`}
                >
                  {news.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
