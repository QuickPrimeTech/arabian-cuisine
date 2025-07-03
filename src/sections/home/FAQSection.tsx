"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you accommodate dietary restrictions and allergies?",
    answer:
      "Absolutely. Our chefs are experienced in preparing dishes for various dietary needs including vegetarian, vegan, gluten-free, and allergen-free options. Please inform us of any restrictions when making your reservation or speak with your server.",
  },
  {
    question: "Is parking available at the restaurant?",
    answer:
      "Yes, we offer complimentary valet parking for dinner service from 5:00 PM onwards. Street parking and nearby parking garages are also available for lunch service.",
  },
  {
    question: "Do you accept walk-in guests?",
    answer:
      "While we welcome walk-in guests when possible, we highly recommend making reservations, especially for dinner service and weekends, to ensure we can accommodate you at your preferred time.",
  },
  {
    question: "What is your dress code policy?",
    answer:
      "We maintain a smart casual to business casual dress code. While jackets are not required, we ask that guests avoid athletic wear, flip-flops, and overly casual attire to maintain our elegant atmosphere.",
  },
  {
    question: "Can you accommodate large groups and private events?",
    answer:
      "Yes, we offer private dining rooms and can accommodate groups of various sizes. Our events team will work with you to create a customized menu and experience for your special occasion.",
  },
  {
    question: "Do you offer wine pairings with your menu?",
    answer:
      "Our sommelier has carefully curated wine pairings for our tasting menus, and our staff can recommend wines to complement any dish. We also offer wine flights and have an extensive wine list featuring both local and international selections.",
  },
];

export default function FAQSection() {
  return (
    <section className="section flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="header2 mb-6 text-white">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-400">
          Find answers to common questions about dining at Arabian Cuisine.
          Can't find what you're looking for? Feel free to contact us directly.
        </p>
      </div>

      <Accordion type="multiple" className="space-y-4 max-w-4xl w-full">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={question}>
            <AccordionTrigger className="hover:text-secondary transition-colors duration-300">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
