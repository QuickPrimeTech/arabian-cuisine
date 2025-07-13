import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { galleryImages } from "@/lib/data";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function AtmosphereSection() {
  return (
    <Section aria-labelledby="atmosphere-header" className="section-padding">
      <Header>
        <Title id="atmosphere-header">Our Atmosphere</Title>
        <SubTitle>Experience the ambiance of Savoria</SubTitle>
      </Header>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {galleryImages
            .filter((image) =>
              ["Interior", "Exterior"].includes(image.category)
            )
            .slice(0, 6)
            .map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div
                  key={image.id}
                  className="relative aspect-16/9 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-center mt-8">
        <CTAButton href="/gallery">View Full Gallery</CTAButton>
      </div>
    </Section>
  );
}
