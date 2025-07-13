import CTASection from "@/components/cta-section";

export default function ContactCTASection() {
  return (
    <CTASection
      title="Ready to Dine With Us?"
      description="Reserve your table now for an unforgettable culinary experience."
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "View Our Menu", href: "/menu" }}
      variant="highlight"
    />
  );
}
