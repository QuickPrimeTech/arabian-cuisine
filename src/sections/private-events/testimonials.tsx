import {
  TestimonialCard,
  TestimonialHeader,
  TestimonialContent,
} from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const testimonials = [
  {
    id: "jennifer-david",
    name: "Jennifer & David",
    role: "Wedding Reception",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Our intimate wedding reception at Savoria was everything we dreamed of. The staff went above and beyond to make our day special, and our guests are still raving about the food.",
  },
  {
    id: "michael-thompson",
    name: "Michael Thompson",
    role: "Corporate Dinner",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "We hosted an important client dinner in the private dining room, and it was a tremendous success. The attention to detail and personalized service made all the difference.",
  },
  {
    id: "sarah-rodriguez",
    name: "Sarah Rodriguez",
    role: "Birthday Celebration",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "My 40th birthday celebration at Savoria was absolutely perfect. The team helped me plan every detail, and they created a custom menu that impressed all my guests.",
  },
];

const Testimonials = () => {
  return (
    <Section className="bg-secondary/30">
      <Header>
        <Title>What Our Clients Say</Title>
        <SubTitle>Hear from those who have hosted events at Savoria</SubTitle>
      </Header>
      <Carousel>
        <CarouselContent>
          {testimonials.map((testimonial, key) => (
            <CarouselItem
              className="basis-full md:basis-1/2 lg:basis-1/3"
              key={key}
            >
              <TestimonialCard key={testimonial.id}>
                <TestimonialHeader
                  name={testimonial.name}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
                <TestimonialContent>{testimonial.content}</TestimonialContent>
              </TestimonialCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

export default Testimonials;
