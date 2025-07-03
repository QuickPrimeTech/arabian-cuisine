"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";
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
            <Image src={"/logo.svg"} alt="arabian cuisine logo" fill />
          </div>
          Arabian Cuisine
        </Link>

        <DesktopNav />

        {/* Mobile Sheet Menu Trigger */}
        <div className="lg:hidden text-foreground">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-background/75 backdrop-blur-md border-r"
            >
              <SheetHeader className="flex flex-row items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-serif text-xl font-bold">
                  <div className="relative h-9 w-9 rounded-full overflow-hidden">
                    <Image src={"/logo.svg"} alt="arabian cuisine logo" fill />
                  </div>
                  Arabian Cuisine
                </div>
              </SheetHeader>

              <div className="space-y-2 px-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded hover:bg-gray-800 transition ${
                      pathname === link.href && "text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="w-full">
                  <Link href="/reserve">Reserve Table</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function DesktopNav() {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:text-foreground/90 transition-colors font-medium ${
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
  );
}
