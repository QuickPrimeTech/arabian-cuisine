"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with black truffle, aged parmesan, and fresh herbs",
    price: 32,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_46_88735_tua4eg.jpg",
    category: "Main Course",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 2,
    name: "Grilled Atlantic Salmon",
    description: "Fresh salmon with lemon butter sauce and seasonal vegetables",
    price: 28,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382752/imgi_51_88739_kwvzux.jpg",
    category: "Main Course",
    featured: true,
    dietary: ["Gluten-Free"],
  },
  {
    id: 3,
    name: "Dark Chocolate Soufflé",
    description: "Rich dark chocolate soufflé with vanilla bean ice cream",
    price: 14,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_60_88748_r5s632.jpg",
    category: "Dessert",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 4,
    name: "Prime Beef Tenderloin",
    description:
      "Premium cut with red wine reduction and roasted fingerling potatoes",
    price: 42,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382747/imgi_48_88736_chv6ly.jpg",
    category: "Main Course",
    featured: true,
    dietary: [],
  },
  {
    id: 5,
    name: "Lobster Bisque",
    description: "Rich and creamy lobster soup with cognac and fresh herbs",
    price: 18,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_41_88731_rwo7m6.jpg",
    category: "Appetizer",
    featured: true,
    dietary: [],
  },
];

export default function MenuHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % menuItems.length;
      items.push(menuItems[index]);
    }
    return items;
  };

  return (
    <section className="section bg-[#121212] text-white overflow-x-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Chef's Signature Dishes
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our most celebrated creations, each dish crafted with the
            finest ingredients and presented with artistic flair that defines
            the Bella Vista experience.
          </p>
        </div>

        <div className="relative w-full overflow-hidden max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleItems().map((item) => (
              <Card
                key={item.id}
                className="w-full overflow-hidden group bg-[#1c1c1c] text-white border border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Featured</span>
                    </div>
                  )}
                  {item.dietary.length > 0 && (
                    <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                      {item.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-yellow-400">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 text-sm rounded-full font-medium">
                    {item.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 hover:bg-yellow-500 text-white shadow-md"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 hover:bg-yellow-500 text-white shadow-md"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 text-lg rounded-lg hover-lift">
              View Complete Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
