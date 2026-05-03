"use client";

import { useState } from "react";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

type SectionConfig = {
  tabs: string[];
  filter: string[];
};

const configs: Record<string, SectionConfig> = {
  Business: {
    tabs: ["All", "Business", "Startup", "Finance", "World"],
    filter: ["Business", "Startup", "Finance", "World", "Politics"],
  },
  Tech: {
    tabs: ["All", "Apps", "Gadgets", "Streaming", "Startup"],
    filter: ["Tech", "Gaming", "Apps", "Mobile", "Streaming"],
  },
  Lifestyle: {
    tabs: ["All", "Fashion", "Food", "Health", "Travel"],
    filter: ["Lifestyle", "Fashion", "Food", "Health", "Travel"],
  },
  Music: {
    tabs: ["All", "Afrobeats", "Amapiano", "Hiphop", "Pop"],
    filter: ["Music"],
  },
};

export default function CategorySection({ title }: { title: string }) {
  const [activeTab, setActiveTab] = useState("All");
  const config = configs[title] || { tabs: ["All"], filter: [] };

  const filtered = articles
    .filter(a => config.filter.length === 0 || config.filter.includes(a.category))
    .slice(0, 3);

  return (
    <section className="bg-white p-5">
      <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-red-600">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide">{title}</h2>
        <ul className="hidden sm:flex items-center">
          {config.tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-[11px] font-semibold transition-colors ${
                  activeTab === tab
                    ? "text-white bg-red-600"
                    : "text-gray-500 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} size="medium" />
        ))}
      </div>
    </section>
  );
}