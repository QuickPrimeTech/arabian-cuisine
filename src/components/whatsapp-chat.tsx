import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppChat() {
  const phoneNumber = contactInfo.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent("Hello, I'd like to make a reservation.");

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 rounded-full px-3 py-3 shadow-lg bg-green-500 hover:bg-green-600 h-fit"
      aria-label="Chat on WhatsApp"
      asChild
    >
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="size-8" />
      </Link>
    </Button>
  );
}
