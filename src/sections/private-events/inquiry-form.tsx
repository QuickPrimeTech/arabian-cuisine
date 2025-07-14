"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { contactInfo } from "@/lib/constants";

const eventTypes = [
  "Corporate Event",
  "Wedding Reception",
  "Birthday Celebration",
  "Anniversary",
  "Graduation Party",
  "Holiday Party",
  "Other",
];

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry submitted successfully",
        description:
          "We'll get back to you as soon as possible to discuss your event.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        guests: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Section id="inquiry-form">
      <Header>
        <Title>Event Inquiry Form</Title>
        <SubTitle>
          Tell us about your event and we&apos;ll help you plan the perfect
          experience
        </SubTitle>
      </Header>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="eventType"
              className="block text-sm font-medium mb-1"
            >
              Event Type
            </label>
            <Select
              value={formData.eventType}
              onValueChange={(value) => handleSelectChange("eventType", value)}
            >
              <SelectTrigger id="eventType">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium mb-1"
              >
                Number of Guests
              </label>
              <Input
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Preferred Date
              </label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Additional Information
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>

        <Card className="h-full">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Contact Our Events Team
            </h3>
            <p className="text-muted-foreground mb-4">
              For immediate assistance or to speak directly with our events
              coordinator:
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-medium">Email:</p>
                <a
                  href={`mailto:events@${contactInfo.email.split("@")[1]}`}
                  className="text-primary hover:underline"
                >
                  events@{contactInfo.email.split("@")[1]}
                </a>
              </div>

              <div>
                <p className="font-medium">Phone:</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-primary hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default InquiryForm;
