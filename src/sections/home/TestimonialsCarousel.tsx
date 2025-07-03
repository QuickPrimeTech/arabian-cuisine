"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Olivia Richardson",
    role: "Food Critic",
    quote:
      "Bella Vista delivers an unforgettable dining experience that transcends expectations. The atmosphere is elegantly sophisticated, and every dish is a masterpiece of culinary artistry.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751393846/imgi_16_default_woclny.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Business Executive",
    quote:
      "Every dish tells a story of passion and precision. The staff are incredibly knowledgeable and welcoming, making each visit feel like a special occasion. Truly exceptional dining.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751393846/imgi_34_images_o9f6fe.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Event Planner",
    quote:
      "We hosted our anniversary celebration here and everything was absolutely perfect—the service, food, and ambiance exceeded our highest expectations. A truly magical evening.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751393846/imgi_20_default_dvdwhj.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Local Resident",
    quote:
      "The attention to detail is remarkable. From the moment you walk in until the last bite, Bella Vista provides an experience that's both luxurious and warmly welcoming.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751394104/imgi_19_default_drethc.jpg",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [api]);

  return (
    <section className="section bg-[#121212] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Discover why food enthusiasts and critics consistently choose Bella
            Vista for exceptional dining experiences.
          </p>
        </div>

        <div className="relative w-full mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="w-full h-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="sm:basis-full md:basis-1/2 lg:basis-1/3 px-6"
                >
                  <Card className="h-full py-6 bg-[#1E1E1E] text-white border border-gray-700 shadow-md">
                    <CardHeader className="flex justify-around items-center space-y-4">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="80px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-amber-500 fill-current"
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <blockquote className="text-lg italic text-gray-300 leading-relaxed">
                        “{testimonial.quote}”
                      </blockquote>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center text-center">
                      <h4 className="font-semibold text-lg text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[#1E1E1E] border border-gray-700 text-white shadow-lg hover:bg-amber-600 transition-colors"
              aria-label="Previous testimonials"
            />
            <CarouselNext
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-[#1E1E1E] border border-gray-700 text-white shadow-lg hover:bg-amber-600 transition-colors"
              aria-label="Next testimonials"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
