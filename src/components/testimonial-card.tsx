// components/testimonial-card.tsx

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Children } from "@/types";

export function TestimonialCard({ children }: Children) {
  return <Card className="h-full flex flex-col">{children}</Card>;
}

export function TestimonialHeader({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <TestimonialAvatar name={name} avatar={avatar} />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </CardHeader>
  );
}

export function TestimonialAvatar({
  name,
  avatar,
}: {
  name: string;
  avatar: string;
}) {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage
        src={avatar}
        alt={`Avatar of ${name}`}
        className="object-cover"
      />
      <AvatarFallback className="bg-primary/40 text-black">
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}

export function TestimonialContent({ children }: Children) {
  return (
    <CardContent className="text-muted-foreground mt-2 flex-grow">
      “{children}”
    </CardContent>
  );
}
