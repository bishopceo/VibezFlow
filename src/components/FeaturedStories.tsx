import { articles } from "@/data/articles";

export default function FeaturedStories() {
  const featured = articles.filter(a => a.shareCount && a.shareCount > 3000).slice(0, 4);
  const [mainArticle, ...smallArticles] = featured;
  if (!mainArticle) return null;

  return (
    <section className="bg-white p-5">
      {/* Section title matching JNews — "Featured" black + "Stories" red inline */}
      <h2 className="text-sm font-bold text-gray-800 pb-2 mb-4 border-b border-gray-200 uppercase tracking-wide">
        <span className="text-gray-800">Featured</span>
        <span className="text-red-600">Stories</span>
      </h2>

      {/* Large featured article — image left, text right */}
      <div className="grid grid-cols-[180px_1fr] gap-4 mb-5 pb-5 border-b border-gray-100">
        <div className="relative h-[130px] overflow-hidden group cursor-pointer flex-shrink-0">
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 uppercase">
              {mainArticle.category}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between py-0.5">
          <div>
            <h3 className="text-base font-bold text-gray-800 hover:text-red-600 transition-colors cursor-pointer leading-snug mb-2 line-clamp-2">
              {mainArticle.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500 gap-2 mb-2">
              <span>
                by{" "}
                <a href="#" className="text-red-600 font-semibold hover:underline">
                  {mainArticle.author}
                </a>
              </span>
              <span className="text-gray-300">·</span>
              <span>{mainArticle.date}</span>
              {mainArticle.commentCount && (
                <>
                  <span className="text-gray-300">·</span>
                  <span className="flex items-center gap-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd"/>
                    </svg>
                    {mainArticle.commentCount}
                  </span>
                </>
              )}
            </div>
            {mainArticle.excerpt && (
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-3">
                {mainArticle.excerpt}
              </p>
            )}
          </div>
          <div>
            <a href="#" className="inline-block border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-600 text-[10px] font-bold px-3 py-1.5 transition-colors uppercase tracking-wide">
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* 3 small cards below */}
      <div className="grid grid-cols-3 gap-4">
        {smallArticles.slice(0, 3).map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative h-[120px] overflow-hidden mb-2">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 uppercase">
                  {article.category}
                </span>
              </div>
            </div>
            <h4 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1">
              {article.title}
            </h4>
            <p className="text-[10px] text-gray-400">{article.date}</p>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-5">
        <button className="border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-600 text-xs font-bold px-8 py-2 transition-colors uppercase tracking-wide">
          Load More
        </button>
      </div>
    </section>
  );
}