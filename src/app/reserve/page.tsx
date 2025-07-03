import ReserveHero from "@/sections/reserve/ReserveHero";
import ReservationForm from "@/sections/reserve/ReservationForm";
import AlternativeContact from "@/sections/reserve/AlternativeContact";
import CTASection from "@/sections/shared/CTASection";

export const metadata = {
  title: "Reservations - Bella Vista Restaurant",
  description:
    "Reserve your table at Bella Vista Restaurant. Book online for an unforgettable dining experience with exceptional cuisine and elegant ambiance.",
};

export default function ReservePage() {
  return (
    <>
      <ReserveHero />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ReservationForm />
            <AlternativeContact />
          </div>
        </div>
      </section>
      <CTASection
        title="Questions About Your Reservation?"
        description="Our team is here to help ensure your dining experience is perfect. Don't hesitate to reach out."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "View Menu", href: "/menu" }}
        variant="secondary"
      />
    </>
  );
}
