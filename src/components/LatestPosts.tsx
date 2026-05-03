import { articles } from "@/data/articles";

export default function LatestPosts() {
  const latestArticles = articles.slice(0, 8);

  return (
    <section className="bg-white rounded-sm p-6 card-shadow">
      <h2 className="section-title">Latest Post</h2>

      <div className="space-y-6">
        {latestArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer grid grid-cols-[280px_1fr] gap-5 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
            {/* Image */}
            <div className="relative h-[180px] overflow-hidden flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors leading-snug mb-2">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 space-x-2 mb-3">
                <span>
                  by{" "}
                  <a href="#" className="text-red-600 font-semibold hover:underline">
                    {article.author}
                  </a>
                </span>
                <span>·</span>
                <span>{article.date}</span>
                {article.commentCount && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" />
                      </svg>
                      {article.commentCount}
                    </span>
                  </>
                )}
              </div>
              {article.excerpt && (
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
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
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 mt-8">
        <button className="w-8 h-8 bg-red-600 text-white text-sm font-semibold flex items-center justify-center">1</button>
        <button className="w-8 h-8 border border-gray-300 text-gray-600 text-sm hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center">2</button>
        <span className="px-2 text-gray-400">...</span>
        <button className="w-8 h-8 border border-gray-300 text-gray-600 text-sm hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center">24</button>
        <button className="w-8 h-8 border border-gray-300 text-gray-600 text-sm hover:border-red-600 hover:text-red-600 transition-colors flex items-center justify-center">›</button>
      </div>
    </section>
  );
}