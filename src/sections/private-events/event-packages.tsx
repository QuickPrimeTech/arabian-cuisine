import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const EventPackages = () => {
  return (
    <Section className="bg-secondary/30">
      <Header>
        <Title>Event Packages</Title>
        <SubTitle>Customizable options to suit your needs</SubTitle>
      </Header>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="relative overflow-hidden border-primary/20">
          <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium">
            Popular
          </div>
          <CardContent className="p-6 pt-10">
            <h3 className="text-xl font-bold mb-2">Cocktail Reception</h3>
            <p className="text-primary font-medium mb-4">
              Starting at $45 per person
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Selection of passed hors d&apos;oeuvres</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>2-hour open bar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Standing reception setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Dedicated service staff</span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <a href="#inquiry-form">Inquire Now</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Seated Dinner</h3>
            <p className="text-primary font-medium mb-4">
              Starting at $75 per person
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Three-course plated dinner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Wine pairing options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Customizable menu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Elegant table settings</span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <a href="#inquiry-form">Inquire Now</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Full Buyout</h3>
            <p className="text-primary font-medium mb-4">Custom pricing</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Exclusive use of entire restaurant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Fully customizable experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Custom menu development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Dedicated event coordinator</span>
              </li>
            </ul>
            <Button className="w-full" asChild>
              <a href="#inquiry-form">Inquire Now</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default EventPackages;
