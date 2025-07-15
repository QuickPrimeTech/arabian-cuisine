import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuItem } from "@/types/menu";
import { MenuCard } from "@/components/menu-card";

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
