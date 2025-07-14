"use client";

import { Button } from "@/components/ui/button";
import { menuCategories } from "@/lib/data";

interface CategoryBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryBarSection({
  activeCategory,
  setActiveCategory,
}: CategoryBarProps) {
  return (
    <div className="overflow-x-auto pb-2 mb-2">
      <div className="flex gap-2 min-w-max">
        {menuCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory == category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
