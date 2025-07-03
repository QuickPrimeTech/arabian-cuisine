"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import {
  filterMenuItems,
  sortMenuItems,
  type MenuItem,
  type FilterOptions,
} from "@/utils/menu-filters";

// Mock menu data - replace with actual data source
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with black truffle, aged parmesan, and fresh herbs",
    price: 32,
    category: "Main Course",
    dietary: ["Vegetarian"],
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    name: "Grilled Atlantic Salmon",
    description: "Fresh salmon with lemon butter sauce and seasonal vegetables",
    price: 28,
    category: "Main Course",
    dietary: ["Gluten-Free"],
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 3,
    name: "Burrata Caprese",
    description:
      "Fresh burrata with heirloom tomatoes, basil, and aged balsamic",
    price: 16,
    category: "Appetizers",
    dietary: ["Vegetarian"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 4,
    name: "Osso Buco",
    description: "Braised veal shanks with saffron risotto and gremolata",
    price: 38,
    category: "Main Course",
    dietary: [],
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 5,
    name: "Tiramisu",
    description:
      "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: 12,
    category: "Desserts",
    dietary: ["Vegetarian"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 6,
    name: "Seafood Linguine",
    description: "Fresh pasta with mussels, clams, shrimp in white wine sauce",
    price: 26,
    category: "Main Course",
    dietary: [],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 7,
    name: "Caesar Salad",
    description:
      "Crisp romaine, house-made croutons, parmesan, and anchovy dressing",
    price: 14,
    category: "Appetizers",
    dietary: [],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 8,
    name: "Panna Cotta",
    description: "Vanilla bean panna cotta with berry compote and mint",
    price: 10,
    category: "Desserts",
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
];

export default function MenuGrid() {
  const [filters] = useState<FilterOptions>({
    categories: ["All"],
    dietary: [],
    priceRange: [0, 100],
    searchQuery: "",
  });

  const filteredAndSortedItems = useMemo(() => {
    const filtered = filterMenuItems(menuItems, filters);
    return sortMenuItems(filtered, "featured");
  }, [filters]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <p className="text-[var(--text-secondary)]">
          Showing {filteredAndSortedItems.length} of {menuItems.length} dishes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover-glow hover-lift group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.featured && (
                <div className="absolute top-4 left-4 bg-[var(--secondary)] text-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Featured</span>
                </div>
              )}
              {item.dietary.length > 0 && (
                <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                  {item.dietary.map((diet) => (
                    <span
                      key={diet}
                      className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-heading-3 text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-[var(--primary)]">
                  ${item.price}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="inline-block px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-sm rounded-full font-medium">
                  {item.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAndSortedItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-[var(--text-secondary)] mb-4">
            No dishes match your current filters.
          </p>
          <p className="text-[var(--text-muted)]">
            Try adjusting your search criteria or clearing filters.
          </p>
        </div>
      )}
    </div>
  );
}
