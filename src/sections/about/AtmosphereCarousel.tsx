"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const atmosphereImages = [
  {
    id: 1,
    title: "Main Dining Room",
    description: "Elegant ambiance with warm lighting and sophisticated decor",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Private Dining",
    description:
      "Intimate spaces perfect for special occasions and business meetings",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Wine Cellar",
    description:
      "Temperature-controlled cellar housing our extensive wine collection",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Chef's Table",
    description: "Front-row seats to culinary artistry in our open kitchen",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function AtmosphereCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % atmosphereImages.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + atmosphereImages.length) % atmosphereImages.length
    );

  const currentImage = atmosphereImages[currentIndex];

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Our Atmosphere</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Step into an environment where every detail has been carefully
            crafted to enhance your dining experience, from intimate corners to
            grand spaces.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-luxury">
            <Image
              src={currentImage.image || "/placeholder.svg"}
              alt={currentImage.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-heading-2 mb-2">{currentImage.title}</h3>
              <p className="text-lg opacity-90">{currentImage.description}</p>
            </div>
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg hover-lift"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 shadow-lg hover-lift"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {atmosphereImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-[var(--primary)]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button className="btn-primary hover-lift">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
