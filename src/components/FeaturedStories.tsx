"use client";

import { articles } from "@/data/articles";

export default function FeaturedStories() {
  // Grab 5 items: 1 for the main display, 4 for the grid below
  const featured = articles.filter(a => a.shareCount && a.shareCount > 3000).slice(0, 5);
  const [mainArticle, ...smallArticles] = featured;
  
  if (!mainArticle) return null;

  return (
    <section className="bg-white p-5 mb-6">
      {/* ── Header (Matching the Sidebar Style) ── */}
      <div className="relative mb-5">
        <h2 className="text-[13px] font-bold text-gray-800 uppercase tracking-widest inline-block border-b-2 border-red-600 pb-2">
          Featured <span className="text-red-600">Stories</span>
        </h2>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
      </div>

      {/* ── Large Featured Article (Image Left, Text Right) ── */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 mb-6 pb-6 border-b border-gray-100">
        <div className="relative h-[180px] overflow-hidden group cursor-pointer flex-shrink-0">
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center py-1">
          <div className="mb-2">
             <span className="text-red-600 text-[10px] font-bold uppercase tracking-widest">
               {mainArticle.category}
             </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors cursor-pointer leading-snug mb-2 line-clamp-2">
            {mainArticle.title}
          </h3>
          <div className="flex items-center text-[10px] text-gray-400 gap-1.5 mb-3 uppercase tracking-wider font-medium">
            <span>By <a href="#" className="text-gray-800 font-bold hover:text-red-600 transition-colors">{mainArticle.author}</a></span>
            <span>·</span>
            <span>{mainArticle.date}</span>
            {mainArticle.commentCount && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"/>
                  </svg>
                  {mainArticle.commentCount}
                </span>
              </>
            )}
          </div>
          {mainArticle.excerpt && (
            <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
              {mainArticle.excerpt}
            </p>
          )}
          <div className="mt-auto">
            <a href="#" className="inline-block border border-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white text-gray-600 text-[10px] font-bold px-6 py-2 transition-all uppercase tracking-widest">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* ── 4 Small Cards Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {smallArticles.slice(0, 4).map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative h-[110px] overflow-hidden mb-3">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider">
                {article.category}
              </div>
            </div>
            <h4 className="text-[13px] font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-3 mb-1.5">
              {article.title}
            </h4>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{article.date}</p>
          </article>
        ))}
      </div>

      {/* ── Load More Button ── */}
      <div className="text-center mt-8">
        <button className="border border-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white text-gray-500 text-[11px] font-bold px-10 py-3 transition-all uppercase tracking-widest">
          Load More
        </button>
      </div>
    </section>
  );
}