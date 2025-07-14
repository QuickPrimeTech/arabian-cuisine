import { Section, Header, H1, SubTitle } from "@/components/typography";
export default function GalleryHeroSection() {
  return (
    <Section className="relative h-[50vh] flex items-center justify-center">
      <Header>
        <H1>Our Gallery</H1>
        <SubTitle>
          A visual journey through our restaurant, cuisine, and events
        </SubTitle>
      </Header>
    </Section>
  );
}
