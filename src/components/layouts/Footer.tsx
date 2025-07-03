import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Private Events", href: "/private-events" },
  { name: "Contact", href: "/contact" },
  { name: "Reservations", href: "/reserve" },
];

const openingHours = [
  { days: "Monday - Thursday", hours: "5:00 PM - 10:00 PM" },
  { days: "Friday - Saturday", hours: "5:00 PM - 11:00 PM" },
  { days: "Sunday", hours: "4:00 PM - 9:00 PM" },
];

export default function Footer() {
  return (
    <footer className=" bg-[#1e1e1e] text-white section">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="font-heading font-bold text-2xl">
                Arabian Cuisine
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience exceptional cuisine and elegant ambiance in the heart
              of the city. Where every meal becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary)] group transition"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary)] group transition"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary)] group transition"
              >
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
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
                  <span className="text-white font-medium">
                    {schedule.hours}
                  </span>
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
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[var(--secondary)] mt-0.5" />
                <div>
                  <p className="text-white font-medium">(555) 123-4567</p>
                  <p className="text-gray-300 text-sm">
                    Reservations & Inquiries
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[var(--secondary)] mt-0.5" />
                <div>
                  <p className="text-white font-medium">info@bellavista.com</p>
                  <p className="text-gray-300 text-sm">General Information</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--secondary)] mt-0.5" />
                <div>
                  <p className="text-white font-medium">123 Gourmet Street</p>
                  <p className="text-gray-300 text-sm">Downtown, NY 10001</p>
                </div>
              </div>
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
      </div>
    </footer>
  );
}
