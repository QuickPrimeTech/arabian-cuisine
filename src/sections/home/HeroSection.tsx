"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382745/imgi_13_88749_gnirbv.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_40_88750_dj7anm.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_9_88747_rxznwg.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382747/imgi_10_88733_xnczpl.jpg",
];

const intervalTime = 5000; // 5 seconds

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative max-w-full h-screen flex items-center  justify-center lg:justify-start overflow-hidden px-4 md:px-16">
      {/* Fading Background Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover object-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 lg:bg-gradient-to-r from-black to-black/30 z-0" />

      {/* Left-Aligned Content */}
      <div className="relative z-10 text-white max-w-2xl space-y-6 animate-fade-in-up">
        <h1 className="header">Welcome to Arabian Cuisine</h1>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90">
          Experience exceptional cuisine crafted with passion, served in an
          atmosphere of elegance and warmth. Every meal is a celebration of
          culinary artistry.
        </p>
        <div className="flex flex-col items-center justify-center lg:justify-start lg:flex-row gap-4 pt-4">
          <Link href="/reserve">
            <Button className="btn-primary text-lg px-8 py-4 hover-lift">
              Reserve Your Table
            </Button>
          </Link>
          <Link href="/menu">
            <Button className="btn-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[var(--primary)] hover-lift">
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
