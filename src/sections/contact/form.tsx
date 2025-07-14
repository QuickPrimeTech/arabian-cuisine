"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { Section, Header, H1, SubTitle } from "@/components/typography";

export default function ContactFormSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message submitted successfully",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Section
      area-labelledby="contact-header"
      className="pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary/30"
    >
      <Header>
        <H1 id="contact-header">Contact Us</H1>
        <SubTitle>
          Discover a world of flavors with our diverse menu offerings
        </SubTitle>
      </Header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "subject"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium mb-1 capitalize"
              >
                {field}
              </label>
              <Input
                id={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                type={field === "email" ? "email" : "text"}
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Contact Info */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: contactInfo.phone,
                href: `tel:${contactInfo.phone}`,
                action: "Call Us",
              },
              {
                icon: Mail,
                label: "Email",
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                action: "Email Us",
              },
            ].map(({ icon: Icon, label, value, href, action }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-secondary/50 p-3 rounded-full">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{label}</h4>
                  <p className="text-muted-foreground mb-2">{value}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-xs"
                  >
                    <a href={href}>{action}</a>
                  </Button>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <div className="bg-secondary/50 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-muted-foreground">{contactInfo.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
