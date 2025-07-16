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

export const aboutCardsData = [
  {
    title: "Our Journey",
    description:
      "From the first bite to the last sip, Savoria offers an immersive culinary journey curated by passionate chefs and sommeliers. Our seasonal menus celebrate the finest local ingredients with elegant presentation.",
    image: {
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752654422/DiningExperience_alerfw_upscayl_5x_upscayl-standard-4x_t10rhc.png",
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
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752586082/tiktok6_d9xgal.png",
      alt: "Beautifully plated fine dining dish",
    },
  },
  {
    title: "Ambience That Captivates",
    description:
      "Founded in 2010 by Chef Marco Rossi, Savoria began as a small family restaurant with a vision to create an exceptional dining experience that celebrates the art of fine cuisine.",
    image: {
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752585592/tiktok4_f96ics.png",
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
      src: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1752580891/imgi_41_AF1QipPqMF7q6xFJZETrEVJ2UZlR8nEpT_qUBsmZXG93_s762-k-no_e2c5g4.jpg",
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
