import { articles } from "@/data/articles";

export default function FeaturedStories() {
  const featured = articles.filter(a => a.shareCount && a.shareCount > 3000).slice(0, 4);
  const [mainArticle, ...smallArticles] = featured;

  if (!mainArticle) return null;

  return (
    <section className="bg-white rounded-sm p-6 card-shadow">
      <h2 className="section-title">Featured Stories</h2>

      {/* Large featured article */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 mb-6 pb-6 border-b border-gray-100">
        <div className="relative h-[200px] md:h-full overflow-hidden group cursor-pointer min-h-[180px]">
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
              {mainArticle.category}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 hover:text-red-600 transition-colors cursor-pointer leading-snug mb-3">
            {mainArticle.title}
          </h3>
          <div className="flex items-center text-xs text-gray-500 space-x-2 mb-3">
            <span>
              by{" "}
              <a href="#" className="text-red-600 font-semibold hover:underline">
                {mainArticle.author}
              </a>
            </span>
            <span>·</span>
            <span>{mainArticle.date}</span>
            {mainArticle.commentCount && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" />
                  </svg>
                  {mainArticle.commentCount}
                </span>
              </>
            )}
          </div>
          {mainArticle.excerpt && (
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
              {mainArticle.excerpt}
            </p>
          )}
          <div>
            <a
              href="#"
              className="inline-block border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-600 text-xs font-semibold px-4 py-2 transition-colors uppercase tracking-wide"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* 3 small article cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {smallArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <div className="relative h-[160px] overflow-hidden mb-3">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 uppercase">
                  {article.category}
                </span>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-2">
              {article.title}
            </h4>
            <div className="flex items-center text-xs text-gray-400 gap-2">
              <span>{article.date}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-600 text-sm font-semibold px-8 py-2.5 transition-colors uppercase tracking-wide">
          Load More
        </button>
      </div>
    </section>
  );
}