import { Section, Header, H1, SubTitle } from "@/components/typography";
export default function AboutHeroSection() {
  return (
    <Section className="bg-secondary/30 h-96 flex flex-col justify-center items-center">
      <Header>
        <H1>Our Story</H1>
        <SubTitle>Discover the passion and dedication behind Savoria</SubTitle>
      </Header>
    </Section>
  );
}
