"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { DynamicImage } from "@/components/dynamic-image";

const images = [
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382745/imgi_13_88749_gnirbv.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_40_88750_dj7anm.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_9_88747_rxznwg.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382747/imgi_10_88733_xnczpl.jpg",
];

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-16">
      {/* Fading Background Images */}
      <DynamicImage images={images} />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-radial from-black/50 from-40% to-black/0" />
      {/* Left-Aligned Content */}
      <div className="relative z-10 text-white max-w-2xl space-y-6 animate-fade-in-up">
        <h1 className="header font-serif text-center">
          Welcome to Arabian Cuisine
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 text-center">
          Experience exceptional cuisine crafted with passion, served in an
          atmosphere of elegance and warmth. Every meal is a celebration of
          culinary artistry.
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4 pt-4">
          <Button asChild>
            <Link href="/reserve">
              Inquire Now <ArrowDown />
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/menu">See Ambiance</Link>
          </Button>
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
