"use client";

import { useState } from "react";
import SearchFilterSection from "@/sections/menu/search-filter";
import CategoryBarSection from "@/sections/menu/category-bar";
import ActiveFiltersSection from "@/sections/menu/active-filters";
import MenuGridSection from "@/sections/menu/menu-grid";
import { menuItems } from "@/lib/data";
import { Header, H1, SubTitle } from "@/components/typography";
import { MenuItem } from "@/types/menu";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredItems = menuItems.filter((item) => {
    // Filter by search query
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by category
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    // Filter by tags
    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.some((filter) => item.tags.includes(filter));

    return matchesSearch && matchesCategory && matchesFilters;
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <>
      <section
        aria-labelledby="menu-header"
        className="pb-12 md:pb-16 space-y-12"
      >
        <div className="sticky top-17 z-10 bg-background/90 py-4 border-b  section-x">
          <SearchFilterSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            clearAllFilters={clearAllFilters}
          />

          <CategoryBarSection
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="section-x">
          <ActiveFiltersSection
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            clearAllFilters={clearAllFilters}
          />

          <MenuGridSection
            filteredItems={filteredItems}
            clearAllFilters={clearAllFilters}
          />
        </div>
      </section>
    </>
  );
}
