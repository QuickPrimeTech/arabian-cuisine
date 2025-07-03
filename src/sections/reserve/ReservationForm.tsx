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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationDetails, setReservationDetails] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const details = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      guests: formData.get("guests"),
      occasion: formData.get("occasion"),
      requests: formData.get("requests"),
    };

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setReservationDetails(details);
    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  const occasions = [
    "Regular Dining",
    "Birthday",
    "Anniversary",
    "Business Dinner",
    "Date Night",
    "Celebration",
    "Other",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-2 mb-4">Make a Reservation</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Please fill out the form below to reserve your table. We'll confirm
          your reservation within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" name="firstName" required className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" name="lastName" required className="h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text-muted)]" />
              <Input
                id="date"
                name="date"
                type="date"
                required
                className="h-12 pl-10"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time *</Label>
            <Select name="time" required>
              <SelectTrigger className="h-12">
                <Clock className="h-4 w-4 mr-2 text-[var(--text-muted)]" />
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Guests *</Label>
            <Select name="guests" required>
              <SelectTrigger className="h-12">
                <Users className="h-4 w-4 mr-2 text-[var(--text-muted)]" />
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
                <SelectItem value="9+">9+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="occasion">Occasion</Label>
          <Select name="occasion">
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select occasion (optional)" />
            </SelectTrigger>
            <SelectContent>
              {occasions.map((occasion) => (
                <SelectItem key={occasion} value={occasion}>
                  {occasion}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requests">Special Requests</Label>
          <Textarea
            id="requests"
            name="requests"
            rows={4}
            placeholder="Dietary restrictions, seating preferences, allergies, or other special requests..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full h-12 text-lg"
        >
          {isSubmitting ? "Processing Reservation..." : "Reserve Table"}
        </Button>

        <p className="text-sm text-[var(--text-muted)] text-center">
          By submitting this form, you agree to our reservation policy.
          Cancellations must be made at least 2 hours in advance.
        </p>
      </form>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-center text-xl">
              Reservation Confirmed!
            </DialogTitle>
          </DialogHeader>
          {reservationDetails && (
            <div className="space-y-4 text-center">
              <p className="text-[var(--text-secondary)]">
                Thank you, {reservationDetails.name}! Your reservation has been
                confirmed.
              </p>
              <div className="bg-[var(--surface)] p-4 rounded-lg space-y-2">
                <p>
                  <strong>Date:</strong> {reservationDetails.date}
                </p>
                <p>
                  <strong>Time:</strong> {reservationDetails.time}
                </p>
                <p>
                  <strong>Guests:</strong> {reservationDetails.guests}
                </p>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                A confirmation email has been sent to {reservationDetails.email}
              </p>
              <Button
                onClick={() => setShowConfirmation(false)}
                className="btn-primary w-full"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
