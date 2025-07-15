import Link from "next/link";
import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaTiktok } from "react-icons/fa6";

interface TiktokPost {
  id: string;
  mediaUrl: string;
  caption?: string;
}
const link = "https://www.tiktok.com/@thearabiancuisine";

const mockPosts: TiktokPost[] = [
  {
    id: "1",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585549/tiktok1_zj8uhp.png",
    caption: "Fresh truffle risotto",
  },
  {
    id: "2",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382757/imgi_64_88755_bmmbg2.jpg",
    caption: "Elegant dining room",
  },
  {
    id: "3",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_49_88737_sbmdc4.jpg",
    caption: "Chef's special",
  },
  {
    id: "4",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382752/imgi_54_88848_fjxtjm.jpg",
    caption: "Wine selection",
  },
  {
    id: "5",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382745/imgi_65_88756_asiqmf.jpg",
    caption: "Dessert presentation",
  },
  {
    id: "6",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382753/imgi_59_88746_nhq00n.jpg",
    caption: "Private dining",
  },
  {
    id: "7",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752586101/tiktok7_r4chbr.png",
    caption: "Private dining",
  },
];

export default function TiktokFeed() {
  return (
    <section className="section flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Instagram className="h-8 w-8 text-secondary" />
          <h2 className="header2 font-serif">Follow Us on Tiktok</h2>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Stay connected with Arabian Cuisine on Instagram for behind-the-scenes
          moments, seasonal specials, and culinary inspiration.
        </p>
        <Button asChild>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <span>@ariabiancuisine</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-6xl mx-auto mb-12">
        <CarouselContent>
          {mockPosts.map((post) => (
            <CarouselItem
              key={post.id}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg hover-lift block"
              >
                <Image
                  src={post.mediaUrl || "/placeholder.svg"}
                  alt={post.caption || "Instagram post"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <FaTiktok className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* CTA Button */}
      <Button asChild>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <FaTiktok className="h-5 w-5 mr-2" />
          Follow Us on Tiktok
        </Link>
      </Button>
    </section>
  );
}
