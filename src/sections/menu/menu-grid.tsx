"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types/menu";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end max-w-[70%]">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    tag === "Chef's Special"
                      ? "bg-primary text-white"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <span className="font-medium text-primary">${item.price}</span>
            </div>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
