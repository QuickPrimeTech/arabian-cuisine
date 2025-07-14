import { Section, Header, H1, SubTitle } from "@/components/typography";
import Image from "next/image";
export const placeholderImg =
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1751382744/imgi_40_88750_dj7anm.jpg";

export default function AboutHeroSection() {
  return (
    <Section className="relative bg-secondary/30 h-96 flex flex-col justify-center items-center">
      <Image
        src={placeholderImg}
        alt="image of the about section of arabian cuisine"
        fill
        className="object-cover absolute inset-0"
      />
      <div className="absolute inset-0 bg-radial from-background/50 from-40% to-background/0 z-10" />
      <Header className="relative z-10">
        <H1>Our Story</H1>
        <SubTitle>Discover the passion and dedication behind Savoria</SubTitle>
      </Header>
    </Section>
  );
}
