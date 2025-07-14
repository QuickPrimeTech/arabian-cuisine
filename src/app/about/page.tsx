import AboutHeroSection from "@/sections/about/hero";
import StorySection from "@/sections/about/story";
import Team from "@/sections/about/team";
import Cta from "@/sections/about/cta";
import ValuesSection from "@/sections/about/values";
import AtmosphereSection from "@/sections/about/atmosphere";
import FinalCTASection from "@/sections/about/final-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StorySection />
      <Team />
      <Cta />
      <ValuesSection />
      <AtmosphereSection />
      <FinalCTASection />
    </>
  );
}
