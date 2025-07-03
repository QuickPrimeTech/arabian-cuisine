export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  dietary: string[];
  image: string;
  featured: boolean;
}

export interface FilterOptions {
  categories: string[];
  dietary: string[];
  priceRange: [number, number];
  searchQuery: string;
}

export const menuCategories = [
  "All",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
  "Chef's Specials",
];

export const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Keto",
  "Low-Carb",
  "Nut-Free",
];

export const priceRanges = [
  { label: "Under $20", min: 0, max: 20 },
  { label: "$20 - $35", min: 20, max: 35 },
  { label: "$35 - $50", min: 35, max: 50 },
  { label: "Over $50", min: 50, max: 1000 },
];

export function filterMenuItems(
  items: MenuItem[],
  filters: FilterOptions
): MenuItem[] {
  return items.filter((item) => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes("All")) {
      if (!filters.categories.includes(item.category)) return false;
    }

    // Dietary filter
    if (filters.dietary.length > 0) {
      const hasMatchingDietary = filters.dietary.some((diet) =>
        item.dietary.includes(diet)
      );
      if (!hasMatchingDietary) return false;
    }

    // Price range filter
    if (
      item.price < filters.priceRange[0] ||
      item.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Search query filter
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      const matchesName = item.name.toLowerCase().includes(query);
      const matchesDescription = item.description.toLowerCase().includes(query);
      const matchesCategory = item.category.toLowerCase().includes(query);
      if (!matchesName && !matchesDescription && !matchesCategory) return false;
    }

    return true;
  });
}

export function sortMenuItems(
  items: MenuItem[],
  sortBy: "name" | "price-low" | "price-high" | "category" | "featured"
): MenuItem[] {
  return [...items].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "category":
        return a.category.localeCompare(b.category);
      case "featured":
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
}

export function getActiveFiltersCount(filters: FilterOptions): number {
  let count = 0;

  if (filters.categories.length > 0 && !filters.categories.includes("All")) {
    count += filters.categories.length;
  }

  if (filters.dietary.length > 0) {
    count += filters.dietary.length;
  }

  if (filters.searchQuery.trim()) {
    count += 1;
  }

  // Don't count price range as it has a default value
  return count;
}

export function clearAllFilters(): FilterOptions {
  return {
    categories: ["All"],
    dietary: [],
    priceRange: [0, 1000],
    searchQuery: "",
  };
}

export function getFilterSummary(filters: FilterOptions): string {
  const parts = [];

  if (filters.categories.length > 0 && !filters.categories.includes("All")) {
    parts.push(`Categories: ${filters.categories.join(", ")}`);
  }

  if (filters.dietary.length > 0) {
    parts.push(`Dietary: ${filters.dietary.join(", ")}`);
  }

  if (filters.searchQuery.trim()) {
    parts.push(`Search: "${filters.searchQuery}"`);
  }

  return parts.join(" • ");
}
