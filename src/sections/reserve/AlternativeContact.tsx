import { Phone, MessageCircle, Mail, Clock, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call to Reserve",
    description: "Speak directly with our reservation team",
    action: "Call 0722720697",
    href: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick and convenient messaging",
    action: "Message Us",
    href: "https://wa.me/15551234567",
  },
  {
    icon: Mail,
    title: "Email Reservations",
    description: "Send us your reservation details",
    action: "Email Us",
    href: "mailto:reservations@ariabiancuisine.com",
  },
];

const policies = [
  "Reservations are held for 15 minutes past the reserved time",
  "Cancellations must be made at least 2 hours in advance",
  "Large parties (8+) may require a deposit",
  "We accommodate dietary restrictions with advance notice",
  "Smart casual dress code is preferred",
];

export default function AlternativeContact() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-2 mb-4">Alternative Booking Methods</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Prefer to speak with someone directly? Our reservation team is
          available to assist you through multiple channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map(
          ({ icon: Icon, title, description, action, href }) => (
            <Card
              key={title}
              className="hover-glow hover-lift transition-all duration-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/10">
                    <Icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      {title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {description}
                    </p>
                    <a href={href}>
                      <Button variant="outline" size="sm">
                        {action}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>

      {/* Business Hours */}
      <Card className="bg-[var(--surface)]">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-[var(--primary)]" />
            <h3 className="font-semibold text-lg">Reservation Hours</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Phone & WhatsApp:</strong> Daily 10:00 AM - 10:00 PM
            </p>
            <p>
              <strong>Email:</strong> 24/7 (response within 2 hours)
            </p>
            <p>
              <strong>Online:</strong> Available 24/7
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Reservation Policy */}
      <Card className="bg-[var(--surface)]">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Info className="h-6 w-6 text-[var(--primary)]" />
            <h3 className="font-semibold text-lg">Reservation Policy</h3>
          </div>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            {policies.map((policy, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0" />
                <span>{policy}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
