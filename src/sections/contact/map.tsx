import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/constants";
import { Section } from "@/components/typography";

export default function MapSection() {
  return (
    <Section>
      <div className="container-custom">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784492346204!3d40.75798597138413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1686667368304!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant location"
          ></iframe>
          <div className="absolute bottom-4 right-4">
            <Button asChild variant="secondary" className="shadow-md">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
