"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ActiveFiltersProps {
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
  clearAllFilters: () => void;
}

export default function ActiveFiltersSection({
  activeFilters,
  toggleFilter,
  clearAllFilters,
}: ActiveFiltersProps) {
  if (activeFilters.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mb-2 overflow-x-auto pb-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={clearAllFilters}
        className="shrink-0"
      >
        Clear All
      </Button>
      {activeFilters.map((filter) => (
        <div
          key={filter}
          className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
        >
          {filter}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => toggleFilter(filter)}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove {filter} filter</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
