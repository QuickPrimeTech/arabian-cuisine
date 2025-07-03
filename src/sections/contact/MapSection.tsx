import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function MapSection() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 mb-4">Find Us</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Located in the heart of downtown, Arabian Cuisine is easily
            accessible and surrounded by the city's cultural attractions.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-luxury">
          {/* Placeholder for Google Maps */}
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Interactive Map</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  Click below to view our location on Google Maps
                </p>
                <a
                  href="https://maps.google.com/?q=123+Gourmet+Street+Downtown+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Parking</h3>
            <p className="text-[var(--text-secondary)]">
              Complimentary valet parking available for dinner service. Street
              parking and nearby garages for lunch.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Public Transit</h3>
            <p className="text-[var(--text-secondary)]">
              Conveniently located near subway stations and bus routes. Just a
              5-minute walk from Central Station.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
            <p className="text-[var(--text-secondary)]">
              Fully wheelchair accessible with dedicated parking spaces and
              accessible restroom facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
