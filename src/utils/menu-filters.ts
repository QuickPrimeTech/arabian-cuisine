export interface MenuItem {
  id: number;
  name: string;
  image: string;
  featured: boolean;
  description: string;
  dietary: string[];
  price: number;
  category: string;
  dietary_preference: string[] | string; // Accepts both
  image_url: string;
  is_available: boolean;
}

export interface FilterOptions {
  categories: string[];
  dietary_preference: string[];
  searchQuery: string;
}

export function filterMenuItems(
  items: MenuItem[],
  filters: FilterOptions
): MenuItem[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    // Normalize dietary_preference to array and lowercase
    const itemDietary = Array.isArray(item.dietary_preference)
      ? item.dietary_preference.map((d) => d.toLowerCase())
      : [item.dietary_preference.toLowerCase()];

    const filterDietary = filters.dietary_preference.map((d) =>
      d.toLowerCase()
    );

    // Category filter
    const categoryMatches =
      filters.categories.length === 0 ||
      filters.categories.includes("All") ||
      filters.categories
        .map((c) => c.toLowerCase())
        .includes(item.category.toLowerCase());

    // Dietary preference filter
    const dietaryMatches =
      filterDietary.length === 0 ||
      filterDietary.some((diet) => itemDietary.includes(diet));

    // Search filter
    const searchMatches =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return categoryMatches && dietaryMatches && searchMatches;
  });
}
