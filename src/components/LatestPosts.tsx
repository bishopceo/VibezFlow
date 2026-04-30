import { articles } from "@/data/articles";

export default function LatestPosts() {
  const latestArticles = articles.slice(0, 6);

  return (
    <section className="bg-white rounded-sm p-6">
      <h2 className="section-title">Latest Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <article key={article.id} className="bg-white group cursor-pointer rounded-sm overflow-hidden card-shadow">
            <div className="relative h-[180px] overflow-hidden">
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
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors line-clamp-2 mb-2">
                {article.title}
              </h3>
              <div className="flex items-center text-xs text-gray-500 space-x-3">
                <span>by <a href="#" className="hover:text-red-600">{article.author}</a></span>
                <span className="text-gray-400">|</span>
                <span>{article.date}</span>
              </div>
              {article.commentCount !== undefined && article.commentCount > 0 && (
                <p className="text-xs text-gray-500 mt-2 flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  {article.commentCount} comments
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition-colors rounded-sm">
          Load More
        </button>
      </div>
    </section>
  );
}
