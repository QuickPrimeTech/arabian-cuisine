import { CapacityLayout } from "@/sections/weddings/capacity";
import { VenueGallery } from "@/sections/weddings/gallery";
import { Hero } from "@/sections/weddings/hero";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <VenueGallery />
      <CapacityLayout />
    </>
  );
}
