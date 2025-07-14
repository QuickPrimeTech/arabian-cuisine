import ContactHeader from "@/sections/contact/contact-header";
import ContactForm from "@/sections/contact/contact-form";
import ContactInfo from "@/sections/contact/contact-info";
import ContactMap from "@/sections/contact/contact-map";

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-light-black">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
    </>
  );
}
