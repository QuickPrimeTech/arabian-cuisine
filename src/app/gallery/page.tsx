import GalleryHero from "@/sections/gallery/GalleryHero";
import GalleryGrid from "@/sections/gallery/GalleryGrid";
import CTASection from "@/sections/shared/CTASection";

export const metadata = {
  title: "Gallery - Arabian Cuisine Restaurant",
  description:
    "Explore our beautiful restaurant spaces, exquisite dishes, and memorable moments. View our gallery showcasing the Arabian Cuisine experience.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <CTASection
        title="Experience It Yourself"
        description="Pictures capture moments, but nothing compares to experiencing Arabian Cuisine firsthand."
        primaryCTA={{ text: "Reserve Table", href: "/reserve" }}
        secondaryCTA={{ text: "Private Events", href: "/private-events" }}
      />
    </>
  );
}
