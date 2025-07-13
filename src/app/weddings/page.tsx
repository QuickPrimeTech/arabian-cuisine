import { CapacityLayout } from "@/sections/weddings/capacity";
import { VenueGallery } from "@/sections/weddings/gallery";
import { Hero } from "@/sections/weddings/hero";
import { MenuShowcase } from "@/sections/weddings/menu-showcase";
import { Testimonials } from "@/sections/weddings/testimonials";

export default function HeroSection() {
  return (
    <>
      <Hero />
      <VenueGallery />
      <CapacityLayout />
      <MenuShowcase />
      <Testimonials />
    </>
  );
}
