"use client";

import { useState } from "react";
import { articles, categories } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function CategorySection({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState("All");

  const getFilteredArticles = () => {
    if (title === "Business") {
      return articles.filter(a => 
        ["Business", "World", "Politics", "Finance"].includes(a.category)
      ).slice(0, 3);
    }
    if (title === "Tech") {
      return articles.filter(a => 
        ["Tech", "Gaming", "Apps", "Mobile"].includes(a.category)
      ).slice(0, 3);
    }
    return articles.slice(0, 3);
  };

  const filteredArticles = getFilteredArticles();

  return (
    <section className="bg-white rounded-sm p-6">
      <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-red-600">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <ul className="hidden md:flex space-x-1">
          {categories.slice(0, 4).map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors rounded ${
                  activeTab === cat 
                    ? "text-white bg-red-600" 
                    : "text-gray-600 hover:text-red-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} size="medium" />
        ))}
      </div>
    </section>
  );
}
