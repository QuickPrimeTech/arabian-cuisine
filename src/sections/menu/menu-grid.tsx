"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/utils/menu-filters";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <Card
          key={item.id}
          className="bg-light-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader className="relative h-48">
            <Image
              src={item.image_url}
              alt={item.name}
              fill
              className="object-cover rounded-t-lg"
            />
            {item.category && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white">
                {item.category}
              </Badge>
            )}
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <span className="font-medium text-primary">Ksh{item.price}</span>
            </div>
            <Badge
              className={cn(
                "text-xs",
                item.dietary_preference.includes("Vegan") && "bg-green-500",
                item.dietary_preference.includes("Vegetarian") &&
                  "bg-yellow-500",
                item.dietary_preference.includes("Gluten-Free") &&
                  "bg-blue-500",
                item.dietary_preference.includes("Dairy-Free") &&
                  "bg-purple-500"
              )}
            >
              {Array.isArray(item.dietary_preference)
                ? item.dietary_preference.join(", ")
                : item.dietary_preference}
            </Badge>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
