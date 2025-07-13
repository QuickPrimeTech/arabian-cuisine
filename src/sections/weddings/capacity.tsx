import { Users, Utensils, Heart, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const capacityOptions = [
  {
    icon: Heart,
    title: "Ceremony",
    capacity: "Up to 120 guests",
    description: "Intimate ceremony seating with garden or indoor options",
  },
  {
    icon: Utensils,
    title: "Seated Dinner",
    capacity: "Up to 100 guests",
    description: "Elegant plated dinner service with round table seating",
  },
  {
    icon: Users,
    title: "Cocktail Reception",
    capacity: "Up to 150 guests",
    description: "Standing reception with passed hors d'oeuvres and cocktails",
  },
  {
    icon: MapPin,
    title: "Full Venue",
    capacity: "Exclusive use",
    description: "Complete venue rental for your entire celebration",
  },
];

export function CapacityLayout() {
  return (
    <section
      className="bg-light-black section"
      aria-labelledby="capacity-header"
      id="capacity"
    >
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-serif text-gray-50 mb-4"
          id="capacity-header"
        >
          Capacity & Guest Information
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Flexible spaces that adapt to your vision, from intimate gatherings to
          grand celebrations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {capacityOptions.map((option, index) => (
          <Card
            key={index}
            className="px-6 py-4 transition-all duration-300 transform hover:-translate-y-2 text-center"
          >
            <CardHeader>
              <div className="bg-secondary/30 p-3 rounded-full mx-auto">
                <option.icon className="text-secondary" size={24} />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {option.title}
              </h3>
              <p className="text-2xl font-serif text-foreground mb-4">
                {option.capacity}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {option.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
