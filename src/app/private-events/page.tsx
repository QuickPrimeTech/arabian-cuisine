import EventsHero from "@/sections/events/EventsHero";
import EventPackages from "@/sections/events/EventPackages";
import EventSpaces from "@/sections/events/EventSpaces";
import EventBookingForm from "@/sections/events/EventBookingForm";
import CTASection from "@/sections/shared/CTASection";

export const metadata = {
  title: "Private Events - Arabian Cuisine Restaurant",
  description:
    "Host your special event at Arabian Cuisine Restaurant. From intimate celebrations to corporate gatherings, we provide exceptional venues and personalized service.",
};

export default function PrivateEventsPage() {
  return (
    <>
      <EventsHero />
      <EventPackages />
      <EventSpaces />
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <EventBookingForm />
        </div>
      </section>
      <CTASection
        title="Ready to Plan Your Event?"
        description="Let our experienced events team help you create an unforgettable experience for you and your guests."
        primaryCTA={{ text: "Contact Events Team", href: "/contact" }}
        secondaryCTA={{ text: "View Gallery", href: "/gallery" }}
      />
    </>
  );
}
