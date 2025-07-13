import CTASection from "@/components/cta-section";

const Cta = () => {
  return (
    <CTASection
      title="Ready to Experience Savoria?"
      description="Join us for an unforgettable dining experience. Reserve your table today."
      primaryCTA={{ text: "Reserve a Table", href: "/reserve" }}
      secondaryCTA={{ text: "Explore Our Menu", href: "/menu" }}
    />
  );
};

export default Cta;
