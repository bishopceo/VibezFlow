import { articles } from "@/data/articles";

export default function EntertainmentSection() {
  const entertainmentArticles = articles
    .filter((a) => ["Entertainment", "Music", "Movies", "Movie"].includes(a.category))
    .slice(0, 4);

  const [mainArticle, ...restArticles] = entertainmentArticles;

  if (!mainArticle) return null;

  return (
    <section className="bg-gray-900 rounded-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-700">
        <h2 className="text-lg font-bold text-white">Entertainment</h2>
        <a href="#" className="text-xs text-red-400 hover:text-red-300 font-semibold uppercase tracking-wide transition-colors">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Main large article */}
        <div className="lg:col-span-2 relative h-[280px] sm:h-[340px] group cursor-pointer overflow-hidden">
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wide">
              {mainArticle.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white text-xl font-bold leading-tight group-hover:text-red-400 transition-colors line-clamp-2">
              {mainArticle.title}
            </h3>
            <div className="flex items-center text-xs text-gray-400 mt-2 space-x-3">
              <span>by <span className="text-gray-300 font-medium">{mainArticle.author}</span></span>
              <span className="text-gray-600">|</span>
              <span>{mainArticle.date}</span>
            </div>
          </div>
        </div>

        {/* Side articles */}
        <div className="flex flex-col">
          {restArticles.map((article) => (
            <div
              key={article.id}
              className="relative flex-1 h-[110px] group cursor-pointer overflow-hidden border-b border-gray-800 last:border-0"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute top-2 left-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 uppercase">
                  {article.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white text-xs font-semibold leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}