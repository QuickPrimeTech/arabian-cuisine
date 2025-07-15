"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const placeholderImg =
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_40_88750_dj7anm.jpg";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594493/weddingGallery7_ni7ya7.jpg",
    caption: "Garden Ceremony",
    description: "Intimate outdoor ceremonies surrounded by blooming flowers",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594490/weddingGallery1_lqucmj.jpg",
    caption: "Garden Ceremony",
    description: "Intimate outdoor ceremonies surrounded by blooming flowers",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594491/weddingGallery4_ak2pdo.jpg",
    caption: "Garden Ceremony",
    description: "Intimate outdoor ceremonies surrounded by blooming flowers",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594489/weddingGallery3_dpoc5v.jpg",
    caption: "Garden Ceremony",
    description: "Intimate outdoor ceremonies surrounded by blooming flowers",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594489/weddingGallery2_lnzqvf.jpg",
    caption: "Garden Ceremony",
    description: "Intimate outdoor ceremonies surrounded by blooming flowers",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594487/weddingGallery5_ubi013.jpg",
    caption: "Candlelit Dinner",
    description: "Romantic evening receptions with ambient lighting",
  },
  {
    src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752594486/weddingGallery6_w4ntml.jpg",
    caption: "Elegant Interior",
    description: "Sophisticated indoor spaces with panoramic views",
  },
];

export function VenueGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-50 mb-4">
            Ambiance & Venue
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our stunning spaces, each designed to create the perfect
            backdrop for your special day
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].caption}
              fill
              className="object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-serif mb-2">
                {galleryImages[currentIndex].caption}
              </h3>
              <p className="text-lg opacity-90">
                {galleryImages[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {galleryImages.map((image, index) => (
              <CarouselItem
                className="basis-1/3 md:basis-1/4 lg:basis-1/6 w-full aspect-video"
                key={index}
              >
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-full h-full rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-4 ring-gold-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      index === currentIndex
                        ? "bg-gold-500/20"
                        : "bg-black/20 hover:bg-black/10"
                    }`}
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
