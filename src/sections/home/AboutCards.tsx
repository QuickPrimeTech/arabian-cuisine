import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const aboutCards = [
  {
    title: "Our Story",
    description:
      "Founded in 1985, Arabian Cuisine has been serving exceptional cuisine for over three decades. Our passion for culinary excellence and warm hospitality creates unforgettable dining experiences that celebrate the art of fine dining.",
    cta: "Learn More",
    href: "/about",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752584222/imgi_22_AF1QipN8mjJ4Mmz45O_dwns1kiSeCsM8u9rvcX-YTGie_s676-k-no_1_elkycq.jpg",
  },
  {
    title: "Private Events",
    description:
      "Create memorable moments with our private dining experiences. From intimate celebrations to corporate events, we provide the perfect setting with personalized menus and impeccable service for your special occasions.",
    cta: "Host an Event",
    href: "/private-events",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752584332/imgi_68_AC9h4npWJPSfTScDCihhSM7urEXMH922VMWtZ5Qsa0tAZgda3Rsl0l7KWf5RlrCZWgrLcRz9TCGWbzHiA-hJ5VmuZJJv1l0gS7FAWkda4oxyIYaI-iLtXcNzN-3azIL2pRYrMWjubA9KRg_s676-k-no_f8q5oy.jpg",
  },
  {
    title: "Dining Experience",
    description:
      "Every detail matters in creating the perfect dining experience. From our carefully curated seasonal menu to our attentive service and elegant atmosphere, we ensure every visit is extraordinary and memorable.",
    cta: "Reserve Table",
    href: "/reserve",
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580754/imgi_25_AF1QipPX2Y5IX87AaRFPnTPKdEZlJa2qDYFPMYHT2zXn_s844-k-no_sdewnx.jpg",
  },
];

export default function AboutCards() {
  return (
    <section className="section space-y-20">
      {aboutCards.map((card, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              isEven ? "" : "lg:grid-flow-col-dense"
            }`}
          >
            {/* Image */}
            <div className={`${isEven ? "" : "lg:col-start-2"}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover-lift">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-8 ${isEven ? "" : "lg:col-start-1"}`}>
              <h3 className="text-3xl lg:text-4xl font-semibold font-serif">
                {card.title}
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed">
                {card.description}
              </p>
              <Button asChild>
                <Link href={card.href}>{card.cta}</Link>
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
