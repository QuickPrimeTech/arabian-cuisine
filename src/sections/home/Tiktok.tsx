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

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
}

const mockPosts: InstagramPost[] = [
  {
    id: "1",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382750/imgi_52_88740_ww0j0r.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Fresh truffle risotto",
  },
  {
    id: "2",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382757/imgi_64_88755_bmmbg2.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Elegant dining room",
  },
  {
    id: "3",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_49_88737_sbmdc4.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Chef's special",
  },
  {
    id: "4",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382752/imgi_54_88848_fjxtjm.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Wine selection",
  },
  {
    id: "5",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382745/imgi_65_88756_asiqmf.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Dessert presentation",
  },
  {
    id: "6",
    mediaUrl:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382753/imgi_59_88746_nhq00n.jpg",
    permalink: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    caption: "Private dining",
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
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
                href={post.permalink}
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
