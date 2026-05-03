import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  size?: "small" | "medium" | "large";
}

export default function ArticleCard({ article, size = "medium" }: ArticleCardProps) {
  const imgHeight = size === "large" ? "h-[200px]" : size === "medium" ? "h-[150px]" : "h-[110px]";

  return (
    <article className="group cursor-pointer">
      <div className={`relative overflow-hidden mb-2.5 ${imgHeight}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 uppercase tracking-wide">
            {article.category}
          </span>
        </div>
      </div>
      <h3 className="text-xs font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 mb-1.5">
        {article.title}
      </h3>
      <div className="flex items-center text-[10px] text-gray-400 gap-1.5 flex-wrap">
        <span>by <a href="#" className="text-gray-500 hover:text-red-600 font-medium transition-colors">{article.author}</a></span>
        <span className="text-gray-300">|</span>
        <span>{article.date}</span>
      </div>
    </article>
  );
}