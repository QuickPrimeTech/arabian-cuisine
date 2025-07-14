import { Card, CardContent } from "@/components/ui/card";
import { Section, Header, Title, SubTitle } from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "Executive Chef",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749846415/ouIU3wkd-chefhameedprofile_1-scaled_nj53ep.jpg",
    bio: "Founder and culinary visionary with 20+ years of fine dining expertise.",
  },
  {
    id: 2,
    name: "Isabella Green",
    role: "General Manager",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749846629/Chef_Nak__Profile_Picture_ynm2bg.jpg",
    bio: "Ensures every guest experience is seamless and memorable.",
  },
  {
    id: 3,
    name: "Carlos Ramirez",
    role: "Sous Chef",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749846559/ujyx5a6mjzdxemyjdplx_j1xcd5.jpg",
    bio: "Crafts innovative flavors that elevate every plate.",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Pastry Chef",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749846509/bobby-flay_profile_2017_zqkzfc.jpg",
    bio: "Creates sweet masterpieces that finish every meal with a smile.",
  },
];

const Team = () => {
  return (
    <Section className="bg-secondary/30">
      <Header>
        <Title>Meet Our Team</Title>
        <SubTitle>
          Passionate professionals dedicated to culinary excellence.
        </SubTitle>
      </Header>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {teamMembers.map(({ id, name, role, image, bio }) => (
            <CarouselItem
              key={id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full flex flex-col text-center items-center p-6">
                <Avatar className="size-48">
                  <AvatarImage
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="bg-secondary text-primary">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardContent className="p-0">
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{role}</p>
                  <p className="text-sm text-muted-foreground">{bio}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default Team;
