"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import {
  menuCategories,
  dietaryOptions,
  type FilterOptions,
} from "@/utils/menu-filters";

interface MenuFiltersProps {
  onFiltersChange?: (filters: FilterOptions) => void;
}

export default function MenuFilters({ onFiltersChange }: MenuFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    categories: ["All"],
    dietary: [],
    priceRange: [0, 100],
    searchQuery: "",
  });
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const newFilters = {
      ...filters,
      categories: category === "All" ? ["All"] : [category],
    };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleDietaryChange = (dietary: string, checked: boolean) => {
    const newDietary = checked
      ? [...filters.dietary, dietary]
      : filters.dietary.filter((d) => d !== dietary);

    const newFilters = { ...filters, dietary: newDietary };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleSearchChange = (query: string) => {
    const newFilters = { ...filters, searchQuery: query };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const newFilters: FilterOptions = {
      categories: ["All"],
      dietary: [],
      priceRange: [0, 100],
      searchQuery: "",
    };
    setFilters(newFilters);
    setActiveCategory("All");
    onFiltersChange?.(newFilters);
  };

  const activeFiltersCount =
    filters.dietary.length + (filters.searchQuery ? 1 : 0);

  return (
    <div className="space-y-6 mb-12">
      {/* Search and Filter Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
          <Input
            placeholder="Search dishes, ingredients, or descriptions..."
            value={filters.searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="h-12 px-6 relative bg-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Menu</SheetTitle>
            </SheetHeader>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold mb-3">Dietary Options</h3>
                <div className="space-y-3">
                  {dietaryOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={filters.dietary.includes(option)}
                        onCheckedChange={(checked) =>
                          handleDietaryChange(option, checked as boolean)
                        }
                      />
                      <label htmlFor={option} className="text-sm font-medium">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                onClick={clearAllFilters}
                variant="outline"
                className="w-full bg-transparent"
              >
                Clear All Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {menuCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryChange(category)}
            className={`whitespace-nowrap ${
              activeCategory === category
                ? "bg-[var(--primary)] text-white"
                : ""
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Active Filters */}
      {(filters.dietary.length > 0 || filters.searchQuery) && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Active filters:
          </span>
          {filters.dietary.map((dietary) => (
            <div
              key={dietary}
              className="flex items-center space-x-1 bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm"
            >
              <span>{dietary}</span>
              <button
                onClick={() => handleDietaryChange(dietary, false)}
                className="hover:bg-[var(--primary)]/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {filters.searchQuery && (
            <div className="flex items-center space-x-1 bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm">
              <span>"{filters.searchQuery}"</span>
              <button
                onClick={() => handleSearchChange("")}
                className="hover:bg-[var(--primary)]/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          <Button
            onClick={clearAllFilters}
            variant="ghost"
            size="sm"
            className="text-[var(--primary)]"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}
