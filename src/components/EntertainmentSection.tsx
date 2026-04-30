import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function EntertainmentSection() {
  const entertainmentArticles = articles.filter(a => 
    ["Music", "Movie", "Entertainment", "Fashion"].includes(a.category)
  ).slice(0, 4);

  return (
    <section className="bg-white rounded-sm p-6">
      <h2 className="section-title">Entertainment</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {entertainmentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} size="small" />
        ))}
      </div>
    </section>
  );
}
