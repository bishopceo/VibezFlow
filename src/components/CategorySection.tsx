"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

const sectionConfig: Record<string, { categories: string[]; filter: string[] }> = {
  Business: {
    categories: ["All", "Business", "Startup", "Finance", "World"],
    filter: ["Business", "Startup", "Finance", "World", "Politics"],
  },
  Tech: {
    categories: ["All", "Apps", "Gadgets", "Streaming", "Startup"],
    filter: ["Tech", "Gaming", "Apps", "Mobile", "Streaming"],
  },
  Lifestyle: {
    categories: ["All", "Fashion", "Food", "Health", "Travel"],
    filter: ["Lifestyle", "Fashion", "Food", "Health", "Travel"],
  },
  Music: {
    categories: ["All", "Afrobeats", "Amapiano", "Hiphop", "Pop"],
    filter: ["Music"],
  },
};

export default function CategorySection({ title }: { title: string }) {
  const config = sectionConfig[title] || {
    categories: ["All", "News", "Tech", "Entertainment", "Music"],
    filter: [],
  };

  const [activeTab, setActiveTab] = useState("All");

  const getFilteredArticles = () => {
    const filtered = articles.filter((a) =>
      config.filter.length === 0 || config.filter.includes(a.category)
    );
    return filtered.slice(0, 3);
  };

  return (
    <section className="bg-white rounded-sm p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b-2 border-red-600">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <ul className="hidden sm:flex flex-wrap gap-1">
          {config.categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-semibold transition-colors rounded-sm ${
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredArticles().map((article) => (
          <ArticleCard key={article.id} article={article} size="medium" />
        ))}
      </div>
    </section>
  );
}