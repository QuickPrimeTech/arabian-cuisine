import { Suspense } from "react";
import MenuHero from "@/sections/menu/MenuHero";
import MenuFilters from "@/sections/menu/MenuFilters";
import MenuGrid from "@/sections/menu/MenuGrid";
import CTASection from "@/sections/shared/CTASection";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export const metadata = {
  title: "Menu - Bella Vista Restaurant",
  description:
    "Explore our exquisite menu featuring fresh ingredients, innovative cuisine, and chef's signature dishes. From appetizers to desserts, discover culinary excellence.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <section className="section-padding">
        <div className="container-custom">
          <Suspense fallback={<LoadingSkeleton type="default" />}>
            <MenuFilters />
            <MenuGrid />
          </Suspense>
        </div>
      </section>
      <CTASection
        title="Ready to Taste Excellence?"
        description="Experience our chef's artistry firsthand. Reserve your table and embark on a culinary journey."
        primaryCTA={{ text: "Make Reservation", href: "/reserve" }}
        secondaryCTA={{ text: "Private Events", href: "/private-events" }}
      />
    </>
  );
}
