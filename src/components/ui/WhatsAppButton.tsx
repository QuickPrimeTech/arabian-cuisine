"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "15551234567"; // Replace with actual WhatsApp number
    const message =
      "Hi! I'd like to make a reservation at Bella Vista Restaurant.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury hover:shadow-xl transition-all duration-300 hover:scale-110 p-0 no-print"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
