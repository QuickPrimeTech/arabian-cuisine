import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/utils";
import { Section } from "@/components/typography";
interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  className?: string;
  variant?: "default" | "highlight";
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: CTASectionProps) {
  return (
    <Section className={cn("bg-light-black", className)}>
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-muted-foreground mb-8 md:text-lg">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={primaryCTA.href} size="lg">
            {primaryCTA.text}
          </CTAButton>
          {secondaryCTA && (
            <CTAButton href={secondaryCTA.href} variant="outline" size="lg">
              {secondaryCTA.text}
            </CTAButton>
          )}
        </div>
      </div>
    </Section>
  );
}
