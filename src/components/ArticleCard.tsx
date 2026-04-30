import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  size?: "small" | "medium" | "large";
  showExcerpt?: boolean;
}

export default function ArticleCard({ article, size = "medium", showExcerpt = false }: ArticleCardProps) {
  return (
    <article className="group cursor-pointer bg-white rounded-sm overflow-hidden card-shadow">
      <div className={`relative overflow-hidden ${size === "large" ? "h-[220px]" : size === "medium" ? "h-[160px]" : "h-[120px]"}`}>
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute top-2 left-2">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 uppercase">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-3">
        <h3 className={`font-semibold text-gray-800 leading-tight hover:text-red-600 transition-colors ${size === "large" ? "text-lg" : size === "medium" ? "text-sm" : "text-xs"}`}>
          {article.title}
        </h3>
        {size !== "small" && (
          <div className="mt-2 flex items-center text-xs text-gray-500 space-x-2">
            {article.author && <span>by <a href="#" className="hover:text-red-600 font-medium">{article.author}</a></span>}
            <span className="text-gray-400">|</span>
            <span>{article.date}</span>
          </div>
        )}
        {showExcerpt && article.excerpt && (
          <p className="mt-2 text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
        )}
      </div>
    </article>
  );
}
