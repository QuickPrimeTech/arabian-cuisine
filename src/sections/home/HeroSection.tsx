"use client";

import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Weddings & Events",
    description:
      "Host your dream wedding with us — elegant settings, unforgettable moments, and world-class service await.",
    primaryCta: { label: "Inquire Now", href: "/weddings#inquire-now" },
    secondaryCta: { label: "Learn More", href: "/weddings" },
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580123/0715_1_wntacm.png",
  },
  {
    title: "Most authentic Arabian dining experience.",
    description:
      "Indulge in our exquisite dishes prepared with the finest ingredients and traditional recipes.",
    primaryCta: { label: "Reserve a Table", href: "/reserve" },
    secondaryCta: { label: "View Menu", href: "/menu" },
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580754/imgi_25_AF1QipPX2Y5IX87AaRFPnTPKdEZlJa2qDYFPMYHT2zXn_s844-k-no_sdewnx.jpg",
  },
  {
    title: "Follow Us Online",
    description:
      "Get a taste of our latest dishes and updates on social media. Stay connected!",
    primaryCta: {
      label: "Follow on Tiktok",
      href: "https://www.tiktok.com/@thearabiancuisine",
    },
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580891/imgi_41_AF1QipPqMF7q6xFJZETrEVJ2UZlR8nEpT_qUBsmZXG93_s762-k-no_e2c5g4.jpg",
  },
];

export default function HeroSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };
  return (
    <section className="relative h-screen flex items-center  justify-center lg:justify-start overflow-hidden">
      <Carousel
        className="w-full"
        setApi={setCarouselApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem
              className="relative px-4 md:px-16 flex w-full flex-col justify-center"
              key={index}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className={`absolute inset-0 object-cover object-center`}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/0 z-0" />

              {/* Left-Aligned Content */}
              <div className="relative z-10 text-white max-w-4xl space-y-6 animate-fade-in-up">
                <h1 className="header font-serif text-center lg:text-start">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed opacity-90 text-center lg:text-start">
                  {slide.description}
                </p>
                <div className="flex flex-col items-center justify-center lg:justify-start lg:flex-row gap-4 pt-4">
                  <Button asChild>
                    <Link href={slide.primaryCta.href}>
                      {slide.primaryCta.label}
                      <ArrowRight />
                    </Link>
                  </Button>
                  {slide.secondaryCta && (
                    <Button variant={"outline"} asChild>
                      <Link href={slide.secondaryCta.href}>
                        {slide.secondaryCta.label}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
      {/* dots navigator */}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`size-3 rounded-full ${
              currentIndex === index ? "bg-secondary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
