"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function ContactSummary() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="section bg-light-black text-white min-h-screen">
      <h2 className="header2 text-center mb-12 text-white">
        Get In Touch With Us
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map Card */}
          <Card className="overflow-hidden shadow-lg bg-[#1f1f1f] border border-gray-700">
            <CardContent className="p-0">
              <div className="aspect-video">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-300">Loading map...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg bg-[#1f1f1f] border border-gray-700 py-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                      placeholder="John Doe"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      placeholder="john.doe@example.com"
                      className="bg-transparent border-gray-600 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-300">
                    Subject
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger className="bg-transparent border-gray-600 text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1f1f1f] border-gray-700 text-white">
                      <SelectItem value="reservation">
                        Reservation Inquiry
                      </SelectItem>
                      <SelectItem value="event">Private Event</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Please share your message or inquiry..."
                    rows={6}
                    required
                    className="bg-transparent border-gray-600 text-white placeholder-gray-500"
                  />
                </div>

                <Button type="submit" className="w-full btn-primary hover-lift">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
