"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

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
const tiktokLink = "https://www.tiktok.com/@thearabiancuisine";
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
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585565/tiktok3_qjvgvc.png",
    caption: "Elegant dining room",
  },
  {
    id: "3",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585592/tiktok4_f96ics.png",
    caption: "Chef's special",
  },
  {
    id: "4",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585563/titktok2_sahq2j.png",
    caption: "Wine selection",
  },
  {
    id: "5",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585833/tiktok.5_jmcrrd.png",
    caption: "Dessert presentation",
  },
  {
    id: "6",
    mediaUrl:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752586082/tiktok6_d9xgal.png",
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
  const [posts, setPosts] = useState<TiktokPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSkeleton type="instagram" />;
  }

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
          <Link
            href="https://www.instagram.com/thearabiancuisine_upperhill/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>@ariabiancuisine</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-6xl mx-auto mb-12">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Link
                href={tiktokLink}
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
        <Link
          href="https://www.instagram.com/thearabiancuisine_upperhill/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="h-5 w-5 mr-2" />
          Follow Us on Tiktok
        </Link>
      </Button>
    </section>
  );
}
