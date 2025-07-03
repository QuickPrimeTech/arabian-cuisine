import { Suspense } from "react";
import HeroSection from "@/sections/home/HeroSection";
import MenuHighlights from "@/sections/home/MenuHighlights";
import AboutCards from "@/sections/home/AboutCards";
import TestimonialsCarousel from "@/sections/home/TestimonialsCarousel";
import CTASection from "@/sections/shared/CTASection";
import Gallery from "@/sections/home/WhyChooseUs";
import FAQSection from "@/sections/home/FAQSection";
import ContactInfo from "@/sections/home/ContactInfo";
import InstagramFeed from "@/sections/home/InstagramFeed";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export const metadata = {
  title: "Arabian Cuisine Restaurant - Luxury Fine Dining Experience",
  description:
    "Experience exceptional cuisine and elegant ambiance at Arabian Cuisine Restaurant. Reserve your table for an unforgettable culinary journey in the heart of the city.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<LoadingSkeleton type="menu-highlights" />}>
        <MenuHighlights />
      </Suspense>
      <AboutCards />
      <Suspense fallback={<LoadingSkeleton type="testimonials" />}>
        <TestimonialsCarousel />
      </Suspense>
      <CTASection />
      <Gallery />
      <FAQSection />
      <ContactInfo />
      <Suspense fallback={<LoadingSkeleton type="instagram" />}>
        <InstagramFeed />
      </Suspense>
    </>
  );
}
