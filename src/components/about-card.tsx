import Image from "next/image";
import { cn } from "@/lib/utils";
import CTAButton from "@/components/cta-button";
import { Children, WithChildrenAndClass } from "@/types";

type AboutCardProps = {
  reverse?: boolean;
};

export function AboutCard({
  children,
  reverse,
}: React.PropsWithChildren<AboutCardProps>) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-8 items-center mb-16",
        reverse && "md:flex-row-reverse"
      )}
    >
      {children}
    </div>
  );
}
export function AboutCardContent({
  children,
  className,
}: WithChildrenAndClass) {
  return <div className={cn("w-full md:w-1/2", className)}>{children}</div>;
}

export function AboutCardImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full md:w-1/2 h-64 md:h-80", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover rounded-lg"
      />
    </div>
  );
}

export function AboutCardHeader({ children, className }: WithChildrenAndClass) {
  return <div className={cn("space-y-4 mb-4", className)}>{children}</div>;
}
export function AboutCardTitle({ children }: Children) {
  return <h3 className="text-2xl font-bold">{children}</h3>;
}

export function AboutCardDescription({ children }: Children) {
  return <p className="text-muted-foreground">{children}</p>;
}

export function AboutCardCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <CTAButton href={href}>{children}</CTAButton>;
}
