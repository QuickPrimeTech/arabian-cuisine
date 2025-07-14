import Link from "next/link";
import { RiTiktokLine } from "react-icons/ri";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Weddings", href: "/private-events" },
  { name: "Contact", href: "/contact" },
  { name: "Reservations", href: "/reserve" },
];

const contactInfo = [
  {
    id: "Phone",
    icon: Phone,
    primary: "0722720697",
    secondary: "Reservations & Inquiries",
  },
  {
    id: "Email",
    icon: Mail,
    primary: "info@arabiancuisine.com",
    secondary: "General Information",
  },
  {
    id: "Address",
    icon: MapPin,
    primary: "Kilimanjaro Rd, Nairobi",
    secondary: "MRX8+PH Nairobi",
    link: "https://www.google.com/maps?q=-1.3003923250990543,36.81651815336891",
  },
];
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thearabiancuisine_upperhill/?hl=en",
    ariaLabel: "Follow us on Instagram",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Arabian-Cuisine-100069446922245/",
    ariaLabel: "Follow us on Facebook",
    icon: Facebook,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@thearabiancuisine",
    ariaLabel: "Follow us on Tiktok",
    icon: RiTiktokLine,
  },
];

const openingHours = [{ days: "Sunday - Monday", hours: "9:00 PM - 9:00 PM" }];

export default function Footer() {
  return (
    <footer className=" bg-light-black section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Restaurant Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-xl font-bold"
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image src={"/logo.svg"} alt="arabian cuisine log" fill />
              </div>
              <span className="font-heading font-bold text-2xl">
                Arabian Cuisine
              </span>
            </Link>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Experience exceptional cuisine and elegant ambiance in the heart of
            the city. Where every meal becomes a cherished memory.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, href, icon, ariaLabel }) => {
              const Icon = icon;
              return (
                <Link
                  key={name}
                  href={href}
                  aria-label={ariaLabel}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-primary group transition"
                >
                  <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-heading font-semibold text-xl text-[var(--secondary)]">
            Quick Links
          </h3>
          <div className="space-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Opening Hours */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-[var(--secondary)]" />
            <h3 className="font-heading font-semibold text-xl text-[var(--secondary)]">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-3">
            {openingHours.map((schedule, i) => (
              <div key={i} className="flex flex-col space-y-1">
                <span className="text-gray-300 text-sm">{schedule.days}</span>
                <span className="text-white font-medium">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="font-heading font-semibold text-xl text-[var(--secondary)]">
            Contact Us
          </h3>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div className="flex items-start space-x-3" key={index}>
                <div className="p-2 rounded-full bg-secondary/20">
                  <contact.icon className="h-5 w-5 text-secondary mt-0.5" />
                </div>
                <div>
                  <p className="font-medium">{contact.primary}</p>
                  <p className="text-gray-300 text-sm">{contact.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Arabian Restaurant. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
