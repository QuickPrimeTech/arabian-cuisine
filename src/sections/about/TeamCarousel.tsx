"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Chef Marco Bella",
    role: "Executive Chef",
    bio: "Following in his father's footsteps, Marco brings innovation while honoring traditional techniques.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "15+ years",
  },
  {
    id: 2,
    name: "Sofia Rodriguez",
    role: "Sous Chef",
    bio: "Culinary Institute graduate specializing in modern Italian cuisine and seasonal menu development.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "8+ years",
  },
  {
    id: 3,
    name: "James Mitchell",
    role: "Head Sommelier",
    bio: "Wine expert with extensive knowledge of Italian and international wines, creating perfect pairings.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "12+ years",
  },
  {
    id: 4,
    name: "Elena Rossi",
    role: "Pastry Chef",
    bio: "Award-winning pastry chef known for innovative desserts that blend traditional and contemporary styles.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "10+ years",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Restaurant Manager",
    bio: "Hospitality professional ensuring every guest receives exceptional service and memorable experiences.",
    image: "/placeholder.svg?height=400&width=300",
    experience: "7+ years",
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );

  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      members.push(teamMembers[index]);
    }
    return members;
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Meet Our Team</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Our passionate team of culinary professionals and hospitality
            experts work together to create exceptional dining experiences for
            every guest.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleMembers().map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden hover-glow hover-lift"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-heading-3 text-[var(--text-primary)] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[var(--primary)] font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {member.experience} experience
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-lg hover-lift"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-lg hover-lift"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
