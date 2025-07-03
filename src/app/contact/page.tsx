import ContactHero from "@/sections/contact/ContactHero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactMethods from "@/sections/contact/ContactMethods";
import MapSection from "@/sections/contact/MapSection";
import CTASection from "@/sections/shared/CTASection";

export const metadata = {
  title: "Contact Us - Bella Vista Restaurant",
  description:
    "Get in touch with Bella Vista Restaurant. Contact us for reservations, inquiries, or special requests. We're here to help create your perfect dining experience.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactMethods />
          </div>
        </div>
      </section>
      <MapSection />
      <CTASection
        title="We'd Love to Hear From You"
        description="Whether you have questions, special requests, or want to plan an event, our team is ready to assist."
        primaryCTA={{ text: "Make Reservation", href: "/reserve" }}
        secondaryCTA={{ text: "Private Events", href: "/private-events" }}
      />
    </>
  );
}
