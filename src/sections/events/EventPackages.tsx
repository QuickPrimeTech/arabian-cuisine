import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Wine, Music } from "lucide-react";

const packages = [
  {
    icon: Users,
    title: "Intimate Gatherings",
    subtitle: "2-12 Guests",
    price: "From $75 per person",
    features: [
      "Private dining room",
      "Personalized menu consultation",
      "Dedicated server",
      "Complimentary wine pairing",
      "Custom table settings",
    ],
    description:
      "Perfect for anniversaries, birthdays, and small celebrations.",
  },
  {
    icon: Utensils,
    title: "Corporate Events",
    subtitle: "10-50 Guests",
    price: "From $95 per person",
    features: [
      "Semi-private or private space",
      "Business lunch/dinner menus",
      "AV equipment available",
      "Flexible timing",
      "Professional service staff",
    ],
    description:
      "Ideal for business meetings, client dinners, and team celebrations.",
  },
  {
    icon: Wine,
    title: "Special Celebrations",
    subtitle: "20-80 Guests",
    price: "From $120 per person",
    features: [
      "Full restaurant buyout option",
      "Custom menu creation",
      "Premium wine selection",
      "Event coordination",
      "Photography assistance",
    ],
    description: "For weddings, milestone birthdays, and grand celebrations.",
  },
];

export default function EventPackages() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Event Packages</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted event packages, each designed to
            provide exceptional experiences tailored to your specific needs and
            guest count.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map(
            ({ icon: Icon, title, subtitle, price, features, description }) => (
              <Card key={title} className="hover-glow hover-lift h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full luxury-gradient shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-heading-3 text-[var(--text-primary)] mb-2">
                      {title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-2">
                      {subtitle}
                    </p>
                    <p className="text-xl font-bold text-[var(--primary)]">
                      {price}
                    </p>
                  </div>

                  <div className="flex-1 space-y-4">
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        Included:
                      </h4>
                      <ul className="space-y-2">
                        {features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-[var(--text-secondary)]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="btn-primary w-full">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--text-secondary)] mb-6">
            Need something custom? We're happy to create a bespoke package for
            your unique event.
          </p>
          <Button className="btn-outline">
            <Music className="h-4 w-4 mr-2" />
            Request Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
}
