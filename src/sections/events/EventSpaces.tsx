"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Square } from "lucide-react";

const eventSpaces = [
  {
    id: 1,
    name: "The Garden Room",
    capacity: "Up to 24 guests",
    size: "450 sq ft",
    description:
      "Intimate space with garden views, perfect for private dinners and small celebrations.",
    features: [
      "Natural lighting",
      "Garden views",
      "Private entrance",
      "Climate controlled",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "The Wine Cellar",
    capacity: "Up to 16 guests",
    size: "320 sq ft",
    description:
      "Sophisticated underground dining room surrounded by our wine collection.",
    features: [
      "Wine cellar ambiance",
      "Temperature controlled",
      "Sommelier service",
      "Intimate lighting",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "The Main Hall",
    capacity: "Up to 80 guests",
    size: "1,200 sq ft",
    description:
      "Our grand dining space available for full restaurant buyouts and large celebrations.",
    features: [
      "Full restaurant",
      "Professional kitchen access",
      "AV equipment",
      "Dance floor space",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function EventSpaces() {
  const [selectedSpace, setSelectedSpace] = useState(0);

  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Event Spaces</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Choose from our beautifully appointed private dining spaces, each
            offering a unique atmosphere and amenities to make your event truly
            special.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Space Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
            <Image
              src={eventSpaces[selectedSpace].image || "/placeholder.svg"}
              alt={eventSpaces[selectedSpace].name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Space Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-heading-2 text-[var(--text-primary)] mb-4">
                {eventSpaces[selectedSpace].name}
              </h3>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                {eventSpaces[selectedSpace].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-secondary)]">
                    {eventSpaces[selectedSpace].capacity}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Square className="h-5 w-5 text-[var(--primary)]" />
                  <span className="text-[var(--text-secondary)]">
                    {eventSpaces[selectedSpace].size}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                  Features & Amenities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {eventSpaces[selectedSpace].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                      <span className="text-[var(--text-secondary)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Space Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {eventSpaces.map((space, index) => (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpace(index)}
                  className={`p-4 rounded-lg text-left transition-all duration-200 ${
                    selectedSpace === index
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white hover:bg-[var(--primary)]/10 text-[var(--text-primary)]"
                  }`}
                >
                  <h4 className="font-semibold text-sm mb-1">{space.name}</h4>
                  <p
                    className={`text-xs ${
                      selectedSpace === index
                        ? "text-white/80"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {space.capacity}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
