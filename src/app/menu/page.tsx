"use client";

import { useEffect, useState } from "react";
import SearchFilterSection from "@/sections/menu/search-filter";
import CategoryBarSection from "@/sections/menu/category-bar";
import ActiveFiltersSection from "@/sections/menu/active-filters";
import MenuGridSection from "@/sections/menu/menu-grid";
import MenuCTASection from "@/sections/menu/cta";
import { Header, H1, SubTitle } from "@/components/typography";
import { MenuItem } from "@/utils/menu-filters";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api/menu-items");
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    // 1. Search query
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    // 2. Active category (e.g., "Appetizers") — always applies unless "All"
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    // 3. Dietary filters (e.g., ["Vegan", "Gluten-Free"])
    const matchesDietary =
      activeFilters.length === 0 ||
      activeFilters.some((filter) => item.dietary_preference.includes(filter));

    return matchesSearch && matchesCategory && matchesDietary;
  });

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setActiveFilters([]);
  };

  return (
    <>
      <section
        aria-labelledby="menu-header"
        className="pt-32 pb-12 md:pt-40 md:pb-16 bg-common-black space-y-12"
      >
        <Header>
          <H1 id="menu-header">Our Menu</H1>
          <SubTitle>
            Discover a world of flavors with our diverse menu offerings
          </SubTitle>
        </Header>

        <div className="sticky top-16 z-10 bg-white py-4 shadow-lg section-x">
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

      <MenuCTASection />
    </>
  );
}
