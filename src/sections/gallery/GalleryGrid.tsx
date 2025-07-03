"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const categories = ["All", "Food", "Interior", "Events", "Team"];

const galleryImages = [
  {
    id: 1,
    category: "Food",
    title: "Truffle Risotto",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    category: "Interior",
    title: "Main Dining Room",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    category: "Food",
    title: "Grilled Salmon",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    category: "Events",
    title: "Private Celebration",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    category: "Interior",
    title: "Wine Cellar",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    category: "Food",
    title: "Dessert Plating",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    category: "Team",
    title: "Chef at Work",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    category: "Interior",
    title: "Private Dining",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    category: "Food",
    title: "Appetizer Selection",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 10,
    category: "Events",
    title: "Wedding Reception",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 11,
    category: "Interior",
    title: "Bar Area",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 12,
    category: "Food",
    title: "Wine Pairing",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Sticky Category Navigation */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--border-light)] -mx-4 px-4 py-4 mb-12">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.title}</p>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80">{selectedImage.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-[var(--text-secondary)]">
              No images found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
