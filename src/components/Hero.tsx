import { articles } from "@/data/articles";

export default function Hero() {
  const heroArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="content-container px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          <div className="relative h-[420px] overflow-hidden group cursor-pointer rounded-sm">
            <img 
              src={heroArticle.image} 
              alt={heroArticle.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute top-5 left-5">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                {heroArticle.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors">
                {heroArticle.title}
              </h1>
              <div className="flex items-center text-sm text-gray-300 space-x-4">
                <span>by <a href="#" className="hover:text-white font-medium">{heroArticle.author}</a></span>
                <span className="text-gray-500">|</span>
                <span>{heroArticle.date}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <article key={article.id} className="relative h-[130px] overflow-hidden group cursor-pointer rounded-sm flex-1">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-red-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
