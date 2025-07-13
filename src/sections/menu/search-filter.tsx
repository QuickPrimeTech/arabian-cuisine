"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/typography";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal } from "lucide-react";
import { menuCategories, menuFilters } from "@/lib/data";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
  clearAllFilters: () => void;
}

export default function SearchFilterSection({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeFilters,
  toggleFilter,
  clearAllFilters,
}: SearchFilterProps) {
  return (
    <div className="sticky top-16 md:top-20 z-30 pt-4 pb-2 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
      <div className="flex flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search our menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-background placeholder:text-muted-foreground"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent className="section-x section-y">
            <SheetHeader className="p-0">
              <SheetTitle asChild>
                <Title>Filter Menu</Title>
              </SheetTitle>
            </SheetHeader>

            <h3 className="font-medium mb-2">Categories</h3>
            <div className="space-y-2">
              {menuCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={activeCategory == category}
                    onCheckedChange={() => setActiveCategory(category)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>

            <h3 className="font-medium mt-6 mb-2">Dietary & Special</h3>
            <div className="space-y-2">
              {menuFilters.map((filter) => (
                <div key={filter} className="flex items-center space-x-2">
                  <Checkbox
                    id={`filter-${filter}`}
                    checked={activeFilters.includes(filter)}
                    onCheckedChange={() => toggleFilter(filter)}
                  />
                  <Label htmlFor={`filter-${filter}`}>{filter}</Label>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="w-full mt-6"
              onClick={clearAllFilters}
            >
              Clear All Filters
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
