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
import { MenuItem } from "@/types/menu";

const menuItems = [
  {
    id: 1,
    name: "Truffle Risotto",
    description:
      "Creamy Arborio rice with black truffle, aged parmesan, and fresh herbs",
    price: 3200,
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
    price: 2800,
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
    price: 1400,
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
    price: 4200,
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
    price: 1800,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_41_88731_rwo7m6.jpg",
    category: "Appetizer",
    featured: true,
    dietary: [],
  },
] as MenuItem[];

export default function MenuHighlights() {
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
          {menuItems.map((item, index) => (
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
    <Card className="w-full h-full overflow-hidden group border border-gray-700 hover:shadow-lg transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
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
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-xl font-bold text-secondary">
            Ksh {item.price}
          </span>
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full font-medium">
          {item.category}
        </span>
      </CardContent>
    </Card>
  );
}
