import { AvailabilityBooking } from "@/sections/weddings/availability";
import { CapacityLayout } from "@/sections/weddings/capacity";
import { FAQ } from "@/sections/weddings/faqs";
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
      <AvailabilityBooking />
      <FAQ />
    </>
  );
}
