import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const eventSpaces = [
  {
    id: "main-dining",
    name: "Main Dining Room",
    capacity: "Up to 80 guests",
    description:
      "Our elegant main dining room can be reserved for large private events. The space features our signature décor and can be arranged to accommodate seated dinners or standing receptions.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749830743/RotterdamRendering_DiningRoom_1_HAL6278_mx63yp.jpg",
  },
  {
    id: "private-room",
    name: "Private Dining Room",
    capacity: "Up to 20 guests",
    description:
      "Our intimate private dining room is perfect for smaller gatherings, business dinners, or special celebrations. The room offers privacy while maintaining the elegant atmosphere of Savoria.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749830847/1080_stwdxw.jpg",
  },
  {
    id: "terrace",
    name: "Outdoor Terrace",
    capacity: "Up to 40 guests",
    description:
      "Our beautiful terrace offers an al fresco dining experience with views of the garden. Available seasonally, it's perfect for cocktail parties, summer celebrations, or intimate wedding receptions.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749831004/Fully-Automatic-Terrace-Roof-Retractable-Sliding-and-Folding-Luxury-Outdoor-Patio-Pergola-Water-Proof_srjll1.jpg",
  },
];

const EvenTypesSection = () => {
  return (
    <Section>
      <Header>
        <Title>Our Event Spaces</Title>
        <SubTitle>
          Discover the perfect setting for your special occasion
        </SubTitle>
      </Header>
      <Tabs defaultValue="main-dining" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="flex w-max mb-8 mx-auto space-x-2 px-4">
            {eventSpaces.map((space) => (
              <TabsTrigger
                key={space.id}
                value={space.id}
                className="whitespace-nowrap"
              >
                {space.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {eventSpaces.map((space) => (
          <TabsContent key={space.id} value={space.id}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{space.name}</h3>
                <p className="text-primary font-medium mb-4">
                  {space.capacity}
                </p>
                <p className="text-muted-foreground mb-6">
                  {space.description}
                </p>
                <Button asChild>
                  <a href="#inquiry-form">Inquire About This Space</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};

export default EvenTypesSection;
