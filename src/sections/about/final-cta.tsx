import CTASection from "@/components/cta-section";

export default function FinalCTASection() {
  return (
    <CTASection
      title="Ready to Taste the Difference?"
      description="Join us for lunch or dinner and experience the passion in every dish"
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "Contact Us", href: "/contact" }}
    />
  );
}
