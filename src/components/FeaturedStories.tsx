import { featuredArticles } from "@/data/articles";

export default function FeaturedStories() {
  return (
    <section className="bg-white rounded-sm">
      <h2 className="section-title">Featured Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer bg-white rounded-sm overflow-hidden card-shadow">
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
              <h3 className="text-base font-semibold text-gray-800 hover:text-red-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <div className="mt-2 flex items-center text-xs text-gray-500 space-x-3">
                <span>by <a href="#" className="hover:text-red-600 font-medium">{article.author}</a></span>
                <span className="text-gray-400">|</span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
