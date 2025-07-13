"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header, H1, SubTitle } from "@/components/typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-96 flex justify-center items-center">
        <Header>
          <H1 id="menu-header">Make a Reservation</H1>
          <SubTitle>
            Reserve your table for an unforgettable dining experience
          </SubTitle>
        </Header>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Reservation Details</CardTitle>
                <CardDescription>
                  Please fill out the form below to make your reservation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Reservation Details
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            handleInputChange("date", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time *</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("time", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="17:00">5:00 PM</SelectItem>
                            <SelectItem value="17:30">5:30 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                            <SelectItem value="18:30">6:30 PM</SelectItem>
                            <SelectItem value="19:00">7:00 PM</SelectItem>
                            <SelectItem value="19:30">7:30 PM</SelectItem>
                            <SelectItem value="20:00">8:00 PM</SelectItem>
                            <SelectItem value="20:30">8:30 PM</SelectItem>
                            <SelectItem value="21:00">9:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Guests *</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("guests", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="# of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      placeholder="Any dietary restrictions, special occasions, or other requests..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold"
                  >
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>reservations@restaurant.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Hours & Policies</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Operating Hours</h4>
                    <div className="space-y-1 text-sm">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Reservation Policy</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Reservations recommended</li>
                      <li>• 24-hour cancellation policy</li>
                      <li>• Large parties (8+) require deposit</li>
                      <li>• 15-minute grace period</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm">Days a Week</p>
                </div>
                <div className="p-4 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-sm">Hours Daily</p>
                </div>
                <div className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">120</p>
                  <p className="text-sm">Seat Capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            For immediate assistance or same-day reservations, please call us
            directly at <span className="font-semibold">(555) 123-4567</span>
          </p>
        </div>
      </div>
    </div>
  );
}
