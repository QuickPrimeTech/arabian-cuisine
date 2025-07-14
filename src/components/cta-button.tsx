import type React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";

interface CTAButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  className,
  ...props
}: CTAButtonProps) {
  return (
    <Button asChild className={cn("font-medium", className)} {...props}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
