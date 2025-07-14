import { GalleryFiltersPage } from "@/sections/gallery/gallery-filters";
import GalleryHeader from "@/sections/gallery/hero";
import ImageGridSection from "@/sections/gallery/image-grid";
        
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
