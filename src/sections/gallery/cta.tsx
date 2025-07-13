import CTASection from "@/components/cta-section";

export default function GalleryCTASection() {
  return (
    <CTASection
      title="Experience Savoria in Person"
      description="Join us for an unforgettable dining experience"
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "View Our Menu", href: "/menu" }}
      variant="highlight"
    />
  );
}
