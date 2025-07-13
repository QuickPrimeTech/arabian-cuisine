"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/data";
import { Section } from "@/components/typography";

interface ImageGridProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ImageGridSection({
  activeCategory,
  setActiveCategory,
}: ImageGridProps) {
  const categories = [
    "All",
    "Food",
    "Interior",
    "Exterior",
    "Events",
    "Private Dining",
  ];
  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <Section>
      <div className="sticky top-16 md:top-20 z-30 bg-background pt-4 pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="shrink-0"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <p className="font-medium">{image.alt}</p>
                <span className="text-sm text-white/80">{image.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No images found</h3>
          <p className="text-muted-foreground mb-4">
            There are no images in the {activeCategory} category.
          </p>
          <Button onClick={() => setActiveCategory("All")}>
            View All Images
          </Button>
        </div>
      )}
    </Section>
  );
}
