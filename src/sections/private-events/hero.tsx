import { Section, Header, H1, SubTitle } from "@/components/typography";

const HeroSection = () => {
  return (
    <Section
      aria-labelledby="private-header"
      className="relative h-[60vh] flex items-center justify-center bg-secondary/30"
    >
      <Header className="container-custom relative z-10 text-center">
        <H1
          id="private-header"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Private Events
        </H1>
        <SubTitle className="text-lg md:text-xl max-w-2xl mx-auto">
          Create unforgettable memories in our elegant event spaces
        </SubTitle>
      </Header>
    </Section>
  );
};

export default HeroSection;
