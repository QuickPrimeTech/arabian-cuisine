import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(555) 123-4567",
    secondary: "Reservations & General Inquiries",
    description: "Available during business hours",
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@bellavista.com",
    secondary: "General Information",
    description: "We respond within 24 hours",
    action: "mailto:info@bellavista.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    primary: "Quick Messages",
    secondary: "Instant responses",
    description: "For immediate assistance",
    action: "https://wa.me/15551234567",
  },
];

const businessHours = [
  { days: "Monday - Thursday", hours: "5:00 PM - 10:00 PM" },
  { days: "Friday - Saturday", hours: "5:00 PM - 11:00 PM" },
  { days: "Sunday", hours: "4:00 PM - 9:00 PM" },
];

export default function ContactMethods() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-2 mb-4">Get in Touch</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Choose the method that works best for you. We're committed to
          providing prompt and helpful responses to all inquiries.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map(
          ({ icon: Icon, title, primary, secondary, description, action }) => (
            <Card
              key={title}
              className="hover-glow hover-lift transition-all duration-200"
            >
              <CardContent className="p-6">
                <a href={action} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--primary)] transition-colors duration-200">
                    <Icon className="h-6 w-6 text-[var(--primary)] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                      {title}
                    </h3>
                    <p className="font-medium text-[var(--text-primary)] mb-1">
                      {primary}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mb-1">
                      {secondary}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {description}
                    </p>
                  </div>
                </a>
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
            <h3 className="font-semibold text-lg">Business Hours</h3>
          </div>
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)]">
                  {schedule.days}
                </span>
                <span className="font-medium text-[var(--text-primary)]">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card className="bg-[var(--surface)]">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-[var(--primary)] mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-[var(--text-primary)] font-medium">
                123 Gourmet Street
              </p>
              <p className="text-[var(--text-secondary)]">Downtown, NY 10001</p>
              <p className="text-sm text-[var(--text-muted)] mt-2">
                Located in the heart of downtown, easily accessible by public
                transportation with valet parking available.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
