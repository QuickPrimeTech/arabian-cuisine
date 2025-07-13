"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuItem } from "@/utils/menu-filters";

export default function MenuHighlights() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await fetch("/api/menu-items");
        const data = await res.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <section className="section flex flex-col items-center overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-serif">
          Chef&apos;s Signature Dishes
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Discover our most celebrated creations, each dish crafted with the
          finest ingredients and presented with artistic flair that defines the
          Arabian Cuisine experience.
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {menuItems.slice(0, 3).map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <MenuCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/menu">View Complete Menu</Link>
        </Button>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="w-full h-full overflow-hidden group bg-gray-900 text-white border border-gray-700 hover:shadow-lg transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image_url || "/placeholder.svg"}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.is_available && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Available</span>
          </div>
        )}
        {(Array.isArray(item.dietary_preference)
          ? item.dietary_preference
          : [item.dietary_preference]
        ).map((diet) => (
          <span
            key={diet}
            className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium"
          >
            {diet}
          </span>
        ))}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-yellow-400">
            Ksh {item.price}
          </span>
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
        <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm rounded-full font-medium">
          {item.category}
        </span>
      </CardContent>
    </Card>
  );
}
