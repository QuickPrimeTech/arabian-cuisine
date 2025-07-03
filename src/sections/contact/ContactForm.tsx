"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Message Sent!", {
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-heading-2 mb-4">Send Us a Message</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Fill out the form below and we'll get back to you as soon as possible.
          For immediate assistance, please call us directly.
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
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" className="h-12" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input id="subject" name="subject" required className="h-12" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Please share your questions, special requests, or how we can assist you..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full h-12 text-lg"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
