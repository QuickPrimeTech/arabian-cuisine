"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export const contactInfo = [
  {
    title: "Address",
    icon: MapPin,
    content: (
      <>
        123 Elegant Avenue
        <br />
        Downtown District, City 12345
      </>
    ),
  },
  {
    title: "Phone",
    icon: Phone,
    content: "(555) 123-4567",
  },
  {
    title: "Email",
    icon: Mail,
    content: "weddings@bellavista.com",
  },
  {
    title: "Hours",
    icon: Clock,
    content: (
      <>
        Tours by appointment
        <br />
        Monday - Sunday, 10am - 6pm
      </>
    ),
  },
];

export function LocationContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Location & Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Visit us in the heart of the city or get in touch to start
              planning your perfect wedding day
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information & Map */}
            <div>
              <Card className="rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold font-serif text-foreground mb-6">
                  Visit Us
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-secondary/20 p-2 rounded-full">
                        <item.icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-serif text-foreground mb-6">
                Get In Touch
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 border-blush-200 focus:border-gold-500"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 border-blush-200 focus:border-gold-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 border-blush-200 focus:border-gold-500"
                  />
                  <Input
                    type="date"
                    name="date"
                    placeholder="Wedding Date"
                    value={formData.date}
                    onChange={handleChange}
                    className="h-12 border-blush-200 focus:border-gold-500"
                  />
                </div>

                <Input
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="h-12 border-blush-200 focus:border-gold-500"
                />

                <Textarea
                  name="message"
                  placeholder="Tell us about your dream wedding..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-32 border-blush-200 focus:border-gold-500"
                />

                <Button type="submit">Send Message</Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer to call or text?
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="outline">Call (555) 123-4567</Button>
                  <Button variant="outline">WhatsApp Chat</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
