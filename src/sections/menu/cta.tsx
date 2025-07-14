import CTASection from "@/components/cta-section";

export default function MenuCTASection() {
  return (
    <CTASection
      title="Ready to Experience Our Menu?"
      description="Join us for an unforgettable dining experience. Reserve your table today."
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "Contact Us", href: "/contact" }}
    />
  );
}
