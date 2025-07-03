import { Heart, Users, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every dish is prepared with love and dedication to culinary artistry.",
  },
  {
    icon: Users,
    title: "Family",
    description:
      "We treat every guest as part of our extended family with warm hospitality.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to sustainable practices and supporting local communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Uncompromising standards in food quality, service, and dining experience.",
  },
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Our Values</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            These core principles guide everything we do, from selecting
            ingredients to serving our guests, ensuring every experience at
            Arabian Cuisine reflects our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center space-y-6 p-6">
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full luxury-gradient shadow-lg">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-heading-3 text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
