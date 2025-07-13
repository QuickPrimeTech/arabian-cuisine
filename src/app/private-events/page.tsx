import HeroSection from "@/sections/private-events/hero";
import EventSpacesSection from "@/sections/private-events/event-spaces";
import EventTypesSection from "@/sections/private-events/event-types";
import EventPackagesSection from "@/sections/private-events/event-packages";
import InquiryFormSection from "@/sections/private-events/inquiry-form";
import TestimonialsSection from "@/sections/private-events/testimonials";
import CTASection from "@/components/cta-section";

export default function PrivateEventsPage() {
  return (
    <>
      <HeroSection />
      <EventTypesSection />
      <EventSpacesSection />
      <EventPackagesSection />
      <InquiryFormSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Plan Your Event?"
        description="Contact our events team today to start planning your perfect occasion"
        primaryCTA={{ text: "Submit an Inquiry", href: "#inquiry-form" }}
        secondaryCTA={{ text: "View Our Gallery", href: "/gallery" }}
        variant="highlight"
      />
    </>
  );
}
