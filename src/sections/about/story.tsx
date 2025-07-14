import { Section } from "@/components/typography";
import {
  AboutCard,
  AboutCardHeader,
  AboutCardImage,
  AboutCardCTA,
  AboutCardContent,
  AboutCardTitle,
  AboutCardDescription,
} from "@/components/about-card";
import { placeholderImg } from "./hero";

export const aboutCardsData = [
  {
    title: "Our Journey",
    description:
      "From the first bite to the last sip, Savoria offers an immersive culinary journey curated by passionate chefs and sommeliers. Our seasonal menus celebrate the finest local ingredients with elegant presentation.",
    image: {
      src: placeholderImg,
      alt: "Beautifully plated fine dining dish",
    },
    cta: {
      label: "Explore Our Menu",
      href: "/menu",
    },
  },
  {
    title: "Elevated Dining Experience",
    description:
      "From the first bite to the last sip, Savoria offers an immersive culinary journey curated by passionate chefs and sommeliers. Our seasonal menus celebrate the finest local ingredients with elegant presentation.",
    image: {
      src: placeholderImg,
      alt: "Beautifully plated fine dining dish",
    },
  },
  {
    title: "Ambience That Captivates",
    description:
      "Founded in 2010 by Chef Marco Rossi, Savoria began as a small family restaurant with a vision to create an exceptional dining experience that celebrates the art of fine cuisine.",
    image: {
      src: placeholderImg,
      alt: "Elegant restaurant interior with ambient lighting",
    },
    cta: {
      label: "Book a Table",
      href: "/reservation",
    },
  },
  {
    title: "Hospitality from the Heart",
    description:
      "Our team is dedicated to making every guest feel like family. Expect genuine smiles, attentive service, and an atmosphere where memories are made—because you deserve more than just a meal.",
    image: {
      src: placeholderImg,
      alt: "Restaurant staff warmly greeting guests",
    },
    cta: {
      label: "Meet the Team",
      href: "/about#team",
    },
  },
];

export default function StorySection() {
  return (
    <Section className="section-padding">
      <div className="space-y-8">
        {aboutCardsData.map((card, index) => (
          <AboutCard key={index} reverse={index % 2 === 1}>
            <AboutCardImage src={card.image.src} alt={card.image.alt} />
            <AboutCardContent>
              <AboutCardHeader>
                <AboutCardTitle>{card.title}</AboutCardTitle>
                <AboutCardDescription>{card.description}</AboutCardDescription>
              </AboutCardHeader>
              {card.cta && (
                <AboutCardCTA href={card.cta.href}>
                  {card.cta.label}
                </AboutCardCTA>
              )}
            </AboutCardContent>
          </AboutCard>
        ))}
      </div>
    </Section>
  );
}
