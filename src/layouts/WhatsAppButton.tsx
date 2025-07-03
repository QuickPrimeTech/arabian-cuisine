import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  const phoneNumber = "254722720697"; // Replace with actual WhatsApp number

  const message = encodeURIComponent(
    "Hi! I'd like to make a reservation at Arabian Cuisine Restaurant."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-xl transition-all duration-300 hover:scale-110 p-0 no-print"
      aria-label="Contact us on WhatsApp"
      asChild
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener,noreferrer">
        <FaWhatsapp className="size-8" />
      </Link>
    </Button>
  );
}
