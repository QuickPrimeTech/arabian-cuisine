"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Send } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Birthday Celebration",
  "Anniversary",
  "Wedding Reception",
  "Corporate Event",
  "Business Meeting",
  "Holiday Party",
  "Graduation",
  "Other",
];

const budgetRanges = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "Over $20,000",
];

export default function EventBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Event Inquiry Sent!", {
      description:
        "Thank you for your interest. Our events team will contact you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-heading-1 mb-6">Plan Your Event</h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          Tell us about your vision and we'll help bring it to life. Our events
          team will work with you to create a memorable experience.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="contactName">Contact Name *</Label>
            <Input
              id="contactName"
              name="contactName"
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization/Company</Label>
            <Input id="organization" name="organization" className="h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="eventDate">Preferred Date *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
              <Input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                className="h-12 pl-10"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guestCount">Expected Guests *</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
              <Input
                id="guestCount"
                name="guestCount"
                type="number"
                min="1"
                required
                className="h-12 pl-10"
                placeholder="Number of guests"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type *</Label>
            <Select name="eventType" required>
              <SelectTrigger className="h-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="budget">Estimated Budget</Label>
            <Select name="budget">
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredSpace">Preferred Space</Label>
            <Select name="preferredSpace">
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select space (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="garden-room">The Garden Room</SelectItem>
                <SelectItem value="wine-cellar">The Wine Cellar</SelectItem>
                <SelectItem value="main-hall">The Main Hall</SelectItem>
                <SelectItem value="flexible">Flexible/Unsure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDetails">Event Details & Special Requests</Label>
          <Textarea
            id="eventDetails"
            name="eventDetails"
            rows={6}
            placeholder="Please describe your event vision, any special requirements, dietary restrictions, entertainment needs, or other details that would help us plan the perfect experience..."
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary text-lg px-12 py-4"
          >
            {isSubmitting ? (
              "Sending Inquiry..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Event Inquiry
              </>
            )}
          </Button>
          <p className="text-sm text-[var(--text-muted)] mt-4">
            Our events team will review your inquiry and contact you within 24
            hours to discuss your event in detail.
          </p>
        </div>
      </form>
    </div>
  );
}
