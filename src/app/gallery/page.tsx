"use client";

import { useState } from "react";
import GalleryHeroSection from "@/sections/gallery/hero";
import ImageGridSection from "@/sections/gallery/image-grid";
import GalleryCTASection from "@/sections/gallery/cta";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <GalleryHeroSection />
      <ImageGridSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GalleryCTASection />
    </>
  );
}
