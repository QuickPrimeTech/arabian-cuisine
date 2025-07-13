import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Sparkles, Flame, Handshake } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Quality",
    description:
      "We source only the finest ingredients, working closely with local farmers and suppliers who share our commitment to excellence.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Creativity",
    description:
      "Our culinary team constantly explores new techniques and flavor combinations, pushing boundaries while respecting culinary traditions.",
    icon: Flame,
  },
  {
    id: 3,
    title: "Hospitality",
    description:
      "We believe that exceptional service is as important as exceptional food. Our team is dedicated to making every guest feel welcome and valued.",
    icon: Handshake,
  },
];

export default function ValuesSection() {
  return (
    <Section className="section-padding bg-secondary/30">
      <Header>
        <Title>Our Values</Title>
        <SubTitle>The principles that guide everything we do</SubTitle>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map(({ id, title, description, icon: Icon }) => (
          <div key={id} className="bg-background p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
