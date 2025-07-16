import { ContactItem } from "@/types/contact";
import { MapPin, Phone, Mail, Clock, Car, Utensils } from "lucide-react";
import Link from "next/link";

export const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Address",
    lines: [
      { type: "text", value: "123 Ocean Drive" },
      { type: "text", value: "Seaside Bay, CA 90210" },
      {
        type: "label",
        value: "Oceanfront location with stunning views",
      },
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [
      {
        type: "link",
        href: "tel:+15551234567",
        value: "0722 720697",
      },
      {
        type: "label",
        value: "Available daily 9:00 AM - 9:00 PM",
      },
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      {
        type: "link",
        href: "mailto:info@coastalbreeze.com",
        value: "info@coastalbreeze.com",
      },
      {
        type: "label",
        value: "We respond within 24 hours",
      },
    ],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [
      { type: "hours", day: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
      { type: "hours", day: "Friday - Saturday", time: "11:00 AM - 11:00 PM" },
      { type: "hours", day: "Sunday", time: "10:00 AM - 9:00 PM" },
      {
        type: "label",
        value: "Sunday Brunch: 10:00 AM - 3:00 PM",
      },
    ],
  },
  {
    icon: Car,
    title: "Parking",
    lines: [
      { type: "text", value: "Complimentary valet parking available" },
      {
        type: "label",
        value: "Self-parking lot also available adjacent to restaurant",
      },
    ],
  },
  {
    icon: Utensils,
    title: "Private Events",
    lines: [
      {
        type: "link",
        href: "mailto:events@coastalbreeze.com",
        value: "events@coastalbreeze.com",
      },
      {
        type: "label",
        value: "Dedicated events team available Mon–Fri 9AM–6PM",
      },
    ],
  },
];

export default function ContactInfo() {
  return (
    <section className="section py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
            Contact Information
          </h2>

          <div className="space-y-8 text-foreground">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>

                  <div className="space-y-1 text-muted-foreground">
                    {item.lines.map((line, i) => {
                      if (line.type === "text") {
                        return <p key={i}>{line.value}</p>;
                      }

                      if (line.type === "label") {
                        return (
                          <p key={i} className="text-sm text-muted-foreground">
                            {line.value}
                          </p>
                        );
                      }

                      if (line.type === "link") {
                        return (
                          <Link
                            key={i}
                            href={line.href}
                            className="hover:text-primary transition-colors block"
                          >
                            {line.value}
                          </Link>
                        );
                      }

                      if (line.type === "hours") {
                        return (
                          <div
                            key={i}
                            className="flex justify-between text-muted-foreground text-sm"
                          >
                            <span>{line.day}</span>
                            <span>{line.time}</span>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
