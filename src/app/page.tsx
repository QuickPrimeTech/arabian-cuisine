import HeroSection from "@/sections/home/HeroSection";
import MenuHighlights from "@/sections/home/MenuHighlights";
import AboutCards from "@/sections/home/AboutCards";
import TestimonialsCarousel from "@/sections/home/TestimonialsCarousel";
import CTASection from "@/sections/shared/CTASection";
import Gallery from "@/sections/home/Gallery";
import FAQSection from "@/sections/home/FAQSection";
import ContactInfo from "@/sections/home/ContactInfo";
import TiktokFeed from "@/sections/home/Tiktok";

export const metadata = {
  title: "Arabian Cuisine Restaurant - Luxury Fine Dining Experience",
  description:
    "Experience exceptional cuisine and elegant ambiance at Arabian Cuisine Restaurant. Reserve your table for an unforgettable culinary journey in the heart of the city.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuHighlights />
      <AboutCards />
      <TestimonialsCarousel />
      <CTASection />
      <Gallery />
      <FAQSection />
      <ContactInfo />
      <TiktokFeed />
    </>
  );
}
