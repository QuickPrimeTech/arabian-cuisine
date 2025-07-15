"use client";

import { useState, useEffect } from "react";
import { StarRating } from "@/components/ui/star-rating";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "@/components/ui/carousel";
import { abbreviate } from "@/lib/utils";

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
    name: "Faiza Bilal",
    role: "Local Guide",
    quote:
      "Amazing amazing super organised and welcoming place..a must recommendation fir all events.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751540086/imgi_1_unnamed_fgpkkw.png",
    rating: 5,
  },
  {
    id: 2,
    name: "salman haq",
    role: "Local Guide",
    quote:
      "Good food Would recommend the lamb mandi and the chicken also the potatoes with masala were really good Amazing bougainvillea tree and cute cats",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751540278/imgi_1_unnamed_qb4d88.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Abdul Warfa",
    role: "Local Guide",
    quote:
      "Great restaurant located in Nairobi's Upper Hill District, offering amazing food options. It also has a very ideal prayer place, several private dining /meeting rooms, and large banquet halls. Highly recommended for hosting events.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751540344/imgi_1_ACg8ocKkqqfxJGTJLyTWiAnGt1klEt14Ve5AdiTFqHOdvnPNjPafLm4_w36-h36-p-rp-mo-ba5-br100_yfdjxr.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Andreas Mecca",
    role: "Local Guide",
    quote:
      "Outdoor Arabian restaurant primed for fast lunches. Used to have an authentic bite but time is  working slowly against tradition. The Laham Mandi is okay, but now forget the usual veg salad side that is typical of Arabian cuisine not unless you want to add some more",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751540522/imgi_1_ALV-UjUmRvpKNFrn7Rit6g0ZOZHaHUAKAUa2NB5l2mrUswpaXFBrCg_BVg_w36-h36-p-rp-mo-ba5-br100_f3w6z5.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Hussein Kamal",
    role: "Local Guide",
    quote:
      "For a taste of authentic lamb or chicken mandi. Excellent and fast service, sufficient seating space. Tends to get quite chilly when seated outdoors, so be sure to dress warm. Moderately priced, all meals are halal. Ablution and prayer facilities available.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751540639/imgi_1_unnamed_bw5fcy.png",
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
    <section className="section">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white">
          What Our Guests Say
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Discover why food enthusiasts and critics consistently choose Arabian
          Cuisine for exceptional dining experiences.
        </p>
      </div>
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full py-6 bg-gray-900 border border-gray-700 shadow-md">
                <CardHeader className="flex items-center gap-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {abbreviate(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <StarRating rating={testimonial.rating} />
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <blockquote className="text-lg text-gray-300 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </CardContent>
                <CardFooter className="flex flex-col items-center text-center">
                  <h4 className="font-semibold text-lg text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious aria-label="Previous testimonials" />
        <CarouselNext aria-label="Next testimonials" />
      </Carousel>
    </section>
  );
}
