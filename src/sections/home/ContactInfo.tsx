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
  lat: -1.300612532662261,
  lng: 36.81649406166091,
};

export default function ContactSummary() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader(
    apiKey
      ? {
          id: "google-map-script",
          googleMapsApiKey: apiKey,
          libraries: ["maps"],
        }
      : { id: "google-map-script", googleMapsApiKey: "invalid" } // fallback for SSR safety
  );

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
    <section className="section">
      <h2 className="header2 text-center mb-16 font-serif">
        Get In Touch With Us
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Map Card */}
          <Card className="overflow-hidden shadow-lg bg-light-black border border-gray-700">
            <CardContent className="p-0">
              <div className="aspect-video">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={20}
                  >
                    <Marker position={center} />
                  </GoogleMap>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-300">Loading map...</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <Button asChild>
                  <a
                    href={`https://www.google.com/maps/place/The+Arabian+Cuisine/@-1.2973776,36.7832904,14z/data=!4m10!1m2!2m1!1sarabian+cuisine+upper+hill+facebook!3m6!1s0x182f10ef5e0ff10d:0x95530e4b72df263!8m2!3d-1.3006283!4d36.8164967!15sCiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va1olIiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va5IBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTmZjazFmVDJ4M1JSQUKqAWgKDS9nLzExZHpkMjExejcQASoMIghmYWNlYm9vaygAMh4QASIaw-EhjVR28IqnG506gt9gkg_L0nuYMV_onh4yJxACIiNhcmFiaWFuIGN1aXNpbmUgdXBwZXIgaGlsbCBmYWNlYm9va-ABAPoBBQjBARAm!16s%2Fg%2F11dzd211z7?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg bg-light-black border border-gray-700 py-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
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
                  <div className="space-y-2">
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

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">
                    Subject
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger className="bg-transparent w-full border-gray-600 text-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-light-black border-gray-700 text-white">
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

                <div className="space-y-2">
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

                <Button type="submit" className="w-full">
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
