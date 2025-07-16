"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { menuItems } from "@/lib/data";

const categoryMap: Record<string, string> = {
  mains: "main",
  desserts: "dessert",
  drinks: "beverage",
};

const tabs = [
  { id: "mains", label: "Mains" },
  { id: "desserts", label: "Desserts" },
  { id: "drinks", label: "Drinks" },
];

export function MenuShowcase() {
  const [activeTab, setActiveTab] = useState("mains");

  const filteredItems = menuItems
    .filter((item) => item.category === categoryMap[activeTab])
    .slice(0, 3);

  return (
    <section
      className="section"
      id="menu-showcase"
      aria-labelledby="menu-showcase-header"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-foreground mb-4"
              id="menu-showcase-header"
            >
              Menu Showcase
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Exquisite cuisine crafted by our award-winning chef using the
              finest seasonal ingredients
            </p>
          </div>

          {/* Tab Navigation */}
          <ScrollArea className="max-sm:w-full overflow-x-auto mb-12 rounded-full">
            <div className="flex space-x-4 px-4 py-2 justify-start md:justify-center max-w-full bg-card">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 flex-shrink-0 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-secondary/40 text-card-foreground shadow-md"
                      : "text-muted-foreground hover:text-gold-600 hover:bg-gold-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {/* Menu Items */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-serif text-card-foreground mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Custom Menu Note */}
          <Card className="mt-16 text-centerrounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif mb-4 text-card-foreground mx-auto">
              Custom Menu Options
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto text-center">
              Our chef is happy to create custom menus tailored to your
              preferences and dietary requirements. We accommodate vegetarian,
              vegan, gluten-free, and other special dietary needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                • Vegetarian
              </span>
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                • Vegan
              </span>
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                • Gluten-Free
              </span>
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                • Kosher
              </span>
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">
                • Halal
              </span>
            </div>
          </Card>
          <Button asChild className="mt-8">
            <Link href={"/menu"}>
              <Utensils />
              Explore Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
