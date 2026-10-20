"use client";

import { useState } from "react";

const CATEGORIES = [
  "All",
  "Live Now",
  "Trending",
  "Gaming",
  "Music",
  "Tech & Coding",
  "Esports",
  "Podcasts",
  "4K HDR",
];

export default function CategoryChips() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="sticky top-16 z-40 bg-surface/90 backdrop-blur-xl border-b border-white/5 py-space-md px-gutter md:px-margin">
      <div className="max-w-7xl mx-auto flex items-center gap-space-sm overflow-x-auto no-scrollbar">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-label-lg text-label-lg rounded-full shrink-0 transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-surface shadow-sm hover:bg-white/90 font-bold"
                  : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-white/5"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
