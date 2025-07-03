"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

//Navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/private-events", label: "Private Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 w-full py-4 section-x z-50 transition-all duration-300 border-b border-white/20  ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg text-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl font-bold"
        >
          <div className="relative h-9 w-9 rounded-full overflow-hidden">
            <Image src={"/logo.svg"} alt="arabian cuisine log" fill />
          </div>
          Arabian Cuisine
        </Link>
        <DesktopNav />
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 text-foreground backdrop-blur-md border-t">
          <div className="px-2 pt-2 text-foreground pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-foreground hover:text-ocean-600 transition-colors ${
                  pathname === link.href && "text-secondary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Button asChild>
              <Link href="/reserve">Reserve Table</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-ocean-800 hover:text-foreground/90 transition-colors font-medium ${
              pathname === link.href && "text-secondary"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <Button asChild>
          <Link href="/reserve">Reserve Table</Link>
        </Button>
      </div>
    </>
  );
}
