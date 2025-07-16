"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { DynamicImage } from "@/components/dynamic-image";

const images = [
  "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580092/0715_3_j90gpu.png",
  "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580092/0715_3_j90gpu.png",
  "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580100/0715_4_jiwyly.png",
  "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580077/0715_ewhtxn.png",
];

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-16">
      {/* Fading Background Images */}
      <DynamicImage images={images} />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-radial from-black/60 from-40% to-black/0" />
      {/* Left-Aligned Content */}
      <div className="relative z-10 text-white max-w-2xl space-y-6 animate-fade-in-up">
        <h1 className="header font-serif text-center">
          A Celebration of Love & Forever
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 text-center">
          Step into our fairytale, where two hearts become one. Surrounded by
          stars, laughter, and the warmth of loved ones, we invite you to share
          in the magic of our wedding day.
        </p>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4 pt-4">
          <Button asChild>
            <Link href="#inquire-now">
              Inquire Now <ArrowDown />
            </Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="#wedding-gallery">See Ambiance</Link>
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
