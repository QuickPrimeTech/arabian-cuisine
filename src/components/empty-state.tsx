// components/empty-state.tsx
import { ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title?: string;
  description?: string;
  onReset?: () => void;
  className?: string;
};

export function EmptyState({
  title = "No results found",
  description = "Try adjusting your filters or reset them to see all images.",
  onReset,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-20 text-center space-y-4",
        className
      )}
    >
      <ImageOff className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-muted-foreground max-w-md">{description}</p>
      {onReset && <Button onClick={onReset}>Reset Filters</Button>}
    </div>
  );
}
