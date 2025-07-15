import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can we bring our own wedding planner?",
    answer:
      "We welcome outside wedding planners and work closely with them to ensure your day is perfect. Our venue coordinator will collaborate with your planner to handle all venue-specific details and logistics.",
  },
  {
    question: "Do you offer food tastings?",
    answer:
      "Yes, we offer complimentary tastings for all couples booking our venue. We'll schedule a private tasting session where you can sample dishes from your selected menu and make any adjustments to suit your preferences.",
  },
  {
    question: "What's the deposit and payment schedule?",
    answer:
      "We require a 25% deposit to secure your date, with the remaining balance due 30 days before your wedding. We accept various payment methods and can work with you on a payment plan if needed.",
  },
  {
    question: "Is there a backup plan for outdoor ceremonies?",
    answer:
      "Yes, we have beautiful indoor spaces that can accommodate ceremonies in case of inclement weather. Our team monitors weather forecasts closely and will work with you to make the best decision for your special day.",
  },
  {
    question: "Can we customize the menu for dietary restrictions?",
    answer:
      "Our chef specializes in accommodating all dietary needs including vegetarian, vegan, gluten-free, kosher, and halal options. We'll work with you to ensure all your guests have delicious meal options.",
  },
  {
    question: "What's included in the venue rental?",
    answer:
      "Our venue rental includes tables, chairs, linens, basic lighting, sound system, bridal suite access, and dedicated event staff. Specific inclusions vary by package - please see our package details for complete information.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking 6-12 months in advance, especially for popular dates like spring and fall weekends. However, we sometimes have availability for shorter notice bookings, so don't hesitate to inquire.",
  },
  {
    question: "Do you provide wedding coordination services?",
    answer:
      "Yes, all our packages include a dedicated venue coordinator who will handle all venue-related details on your wedding day. For full-service wedding planning, we can recommend trusted partners or upgrade to our premium package.",
  },
];

export function FAQ() {
  return (
    <section className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about planning your wedding at Arabian
              Cusine
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button>Contact Our Wedding Team</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
