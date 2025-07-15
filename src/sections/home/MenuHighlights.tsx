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
    name: " Grilled Tandoori Chicken Leg Quarter.",
    description: "Grilled or baked until slightly charred and juicy",
    price: 600,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752581383/Grilled_Tandoori_Chicken_Leg_Quarter._t4wdmw.jpg",
    category: "Main Course",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice layered with tender chicken cooked in rich coastal spices, served with kachumbari and gravy.",
    price: 750,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752581959/Chicken_Biryani_m6nzpy.jpg",
    category: "Main Course",
    featured: true,
    dietary: ["Gluten-Free"],
  },
  {
    id: 3,
    name: "Kachumbari Salad",
    description:
      "Crisp lettuce, juicy tomatoes, red onions, cucumbers, and carrots seasoned with lemon and spice — a refreshing East African favorite.",
    price: 200,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752583050/imgi_56_AC9h4nqXMUbKFzQfwDXxSR9_c4AwKiFJMUKtdaw2uVcdxOeKVtNG-MUiweShR5-VBFKfG0ozQEwHnPbxpzOl90L8zAqM2jbiaJkWDw7WFZaY8Y_wc-43xG9b9lE8QbLFThucXkyUXn9LLw_s773-k-no_vqwxyd.jpg",
    category: "Dessert",
    featured: true,
    dietary: ["Vegetarian"],
  },
  {
    id: 4,
    name: "Cappuccino",
    description:
      "Rich espresso topped with steamed milk and a velvety foam, served with a sprinkle of cocoa.",
    price: 500,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752583115/cappaccino_ijq3c7.jpg",
    category: "Beverage",
    featured: true,
    dietary: [],
  },
  {
    id: 5,
    name: "Mint Lemonade",
    description:
      "Mint Lemonade is a refreshing, chilled beverage made by blending fresh lemon juice, mint leaves, sugar (or honey), and cold water or soda water",
    price: 250,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752583588/mint-lemonade_yjox2x.jpg",
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
