"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { galleryImages } from "@/lib/data";
import { EmptyState } from "@/components/empty-state";

type GalleryFiltersProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

function GalleryFilters({
  activeFilter,
  setActiveFilter,
}: GalleryFiltersProps) {
  const filters = [
    { id: "all", name: "All Photos" },
    { id: "Food", name: "Food" },
    { id: "Wedding", name: "Wedding" },
    { id: "Interior", name: "Interior" },
  ];

  return (
    <section className="sticky top-17 z-50 py-2 border-b bg-background/80">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full rounded-lg bg-light-black py-3 px-4 flex flex-col gap-2 lg:bg-transparent">
          <div className="flex w-max gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="px-6 py-3 font-medium transition-all duration-300 whitespace-nowrap"
              >
                {filter.name}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}

type GalleryGridProps = {
  filteredImages: {
    alt: string;
    category: string;
    src: string;
  }[];
  onReset: () => void;
};

function GalleryGrid({ filteredImages, onReset }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );

  return (
    <>
      <section className="section">
        <div className="container mx-auto">
          {filteredImages.length === 0 ? (
            <EmptyState
              onReset={() => {
                // Optionally reset filters here, or leave it out
                onReset();
              }}
            />
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight size={48} />
          </button>
          <div className="max-w-4xl max-h-[80vh] mx-4">
            <Image
              src={filteredImages[currentImage].src}
              alt={filteredImages[currentImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[currentImage].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export function GalleryFiltersPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);
  const resetFilters = () => {
    setActiveFilter("all");
  };

  return (
    <>
      <GalleryFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <GalleryGrid filteredImages={filteredImages} onReset={resetFilters} />
    </>
  );
}
