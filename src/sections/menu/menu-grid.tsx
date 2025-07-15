"use client";

import { Button } from "@/components/ui/button";
import { MenuItem } from "@/types/menu";
import { MenuCard } from "@/components/menu-card";

interface MenuGridProps {
  filteredItems: MenuItem[];
  clearAllFilters: () => void;
}

export default function MenuGridSection({
  filteredItems,
  clearAllFilters,
}: MenuGridProps) {
  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No items found</h3>
        <p className="text-muted-foreground mb-4">
          Try adjusting your search or filters to find what you&apos;re looking
          for.
        </p>
        <Button onClick={clearAllFilters}>Clear All Filters</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-x py-12">
      {filteredItems.map((item, index) => (
        <MenuCard item={item} key={index} />
      ))}
    </div>
  );
}
