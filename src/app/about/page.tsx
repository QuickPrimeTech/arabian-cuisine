import { Suspense } from "react";
import AboutHero from "@/sections/about/AboutHero";
import StorySection from "@/sections/about/StorySection";
import ValuesSection from "@/sections/about/ValuesSection";
import TeamCarousel from "@/sections/about/TeamCarousel";
import AtmosphereCarousel from "@/sections/about/AtmosphereCarousel";
import CTASection from "@/sections/shared/CTASection";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export const metadata = {
  title: "About Us - Arabian Cuisine Restaurant",
  description:
    "Discover the story behind Arabian Cuisine Restaurant. Learn about our passion for culinary excellence, our dedicated team, and our commitment to creating unforgettable dining experiences.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <Suspense fallback={<LoadingSkeleton type="default" />}>
        <TeamCarousel />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton type="default" />}>
        <AtmosphereCarousel />
      </Suspense>
      <CTASection
        title="Experience Our Passion"
        description="Join us for an unforgettable dining experience where every detail reflects our commitment to culinary excellence."
        primaryCTA={{ text: "Make Reservation", href: "/reserve" }}
        secondaryCTA={{ text: "View Gallery", href: "/gallery" }}
      />
    </>
  );
}
