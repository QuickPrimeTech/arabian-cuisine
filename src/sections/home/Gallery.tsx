import Link from "next/link";
import Image from "next/image";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382750/imgi_52_88740_ww0j0r.jpg", // Big left image
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382748/imgi_49_88737_sbmdc4.jpg", // Top right
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382745/imgi_65_88756_asiqmf.jpg", // Bottom right
];

export default function Gallery() {
  return (
    <section
      className="section flex flex-col items-center"
      aria-labelledby="gallery-header"
      role="region"
    >
      {/* Heading */}
      <div className="text-left mb-10">
        <h2
          className="text-4xl md:text-5xl text-center font-bold font-serif text-white mb-4"
          id="gallery-header"
        >
          Gallery
        </h2>
        <p className="text-lg text-gray-400  text-center">
          A glimpse into our elegant interiors, vibrant dishes, and timeless
          experiences. Explore more in our gallery.
        </p>
      </div>

      {/* Custom Layout Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {/* Left Large Image */}
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden group shadow-md shadow-black/30">
          <Image
            src={images[0]}
            alt="Large feature image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        </div>

        {/* Right Two Stacked Images */}
        <div className="flex flex-col gap-4 h-[600px]">
          {[images[1], images[2]].map((src, i) => (
            <div
              key={i}
              className="relative flex-1 rounded-xl overflow-hidden group shadow-md shadow-black/30"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 2}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}

      <Button asChild>
        <Link href="/gallery">
          <Camera className="size-5" />
          View Full Gallery
        </Link>
      </Button>
    </section>
  );
}
