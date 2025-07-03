import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "primary" | "secondary";
}

export default function CTASection({
  title = "Ready to Experience Arabian Cuisine?",
  description = "Reserve your table today and embark on a culinary journey that will delight your senses and create lasting memories.",
  primaryCTA = { text: "Reserve Your Table", href: "/reserve" },
  secondaryCTA = { text: "Explore Menu", href: "/menu" },
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section className="section bg-light-black text-white">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">{title}</h2>
          <p className="text-xl leading-relaxed text-gray-400">{description}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link href={primaryCTA.href}>
              <Button
                className={`text-lg px-8 py-4 hover-lift ${
                  isPrimary
                    ? "bg-amber-500 text-black hover:bg-amber-600"
                    : "btn-primary"
                }`}
              >
                {primaryCTA.text}
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  variant="outline"
                  className="border-gray-400 text-foreground"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
