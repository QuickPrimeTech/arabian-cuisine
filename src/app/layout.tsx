import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Vista Restaurant - Luxury Fine Dining Experience",
  description:
    "Experience exceptional cuisine and elegant ambiance at Bella Vista Restaurant. Reserve your table for an unforgettable culinary journey.",
  keywords:
    "fine dining, luxury restaurant, Italian cuisine, private events, reservations",
  openGraph: {
    title: "Bella Vista Restaurant",
    description: "Luxury fine dining experience with exceptional cuisine",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
