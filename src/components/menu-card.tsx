// components/menu-card.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MenuCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-shadow hover:shadow-lg py-0",
        className
      )}
    >
      {children}
    </Card>
  );
}

export function MenuCardImage({
  src,
  alt,
  badge,
}: {
  src: string;
  alt: string;
  badge?: string;
}) {
  return (
    <div className="relative h-48 w-full">
      <Image src={src} alt={alt} fill className="object-cover" />
      {badge && (
        <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}

export function MenuCardHeaderContent({
  title,
  price,
}: {
  title: string;
  price: number;
}) {
  return (
    <CardHeader className="flex flex-row items-center justify-between pb-0">
      <h3 className="font-bold text-lg">{title}</h3>
      <span className="font-medium text-primary">${price.toFixed(2)}</span>
    </CardHeader>
  );
}

export function MenuCardContent({
  description,
  tags,
}: {
  description: string;
  tags: string[];
}) {
  return (
    <CardContent className="space-y-3 pb-4">
      <p className="text-muted-foreground text-sm line-clamp-2">
        {description}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-secondary text-foreground px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  );
}
