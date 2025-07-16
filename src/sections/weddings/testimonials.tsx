import { Skeleton } from "@/components/ui/skeleton";
import { Star, Heart } from "lucide-react";

const realWeddings = [
  {
    couple: "Sarah & Michael",
    date: "October 2023",
    image: "/placeholder.svg?height=400&width=600",
    quote:
      "Arabian Cuisine made our dream wedding come true. Every detail was perfect, from the stunning venue to the incredible food. Our guests are still talking about it!",
    rating: 5,
    details: "Garden ceremony for 85 guests with elegant reception",
  },
  {
    couple: "Emma & James",
    date: "September 2023",
    image: "/placeholder.svg?height=400&width=600",
    quote:
      "The team at Arabian Cuisine went above and beyond. The coordination was flawless, and the cuisine was absolutely divine. We couldn't have asked for more.",
    rating: 5,
    details: "Intimate dinner celebration for 45 guests",
  },
  {
    couple: "Lisa & David",
    date: "August 2023",
    image: "/placeholder.svg?height=400&width=600",
    quote:
      "From our first visit to the wedding day, everything exceeded our expectations. The venue is breathtaking and the service is unmatched.",
    rating: 5,
    details: "Full venue celebration for 120 guests",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-header"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-foreground mb-4"
              id="testimonials-header"
            >
              Real Weddings & Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Love stories that came to life at Arabian Cuisine - hear from our
              happy couples
            </p>
          </div>

          <div className="space-y-16">
            {realWeddings.map((wedding, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                    <Skeleton className="w-full absolute h-full" />
                    <div className="absolute top-4 right-4 bg-yellow-500/20 backdrop-blur-sm rounded-full p-2">
                      <Heart
                        className="text-yellow-500 fill-current"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(wedding.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-500 fill-current"
                        size={20}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl text-muted-foreground leading-relaxed italic">
                    &quot;{wedding.quote}&quot;
                  </blockquote>

                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-2xl font-serif text-foreground mb-2">
                      {wedding.couple}
                    </h3>
                    <p className="text-muted-foreground mb-2">{wedding.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {wedding.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-16 text-center bg-secondary/20 rounded-2xl p-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-secondary fill-current"
                  size={24}
                />
              ))}
              <span className="text-2xl font-bold text-secondary ml-4">
                5.0
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              Based on 50+ wedding celebrations
            </p>
            <p className="text-sm text-muted-foreground">
              100% of couples would recommend Arabian Cuisine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
