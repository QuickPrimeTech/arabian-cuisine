import { Star } from "lucide-react";
type RatingProps = {
  rating: number;
};

export function StarRating({ rating }: RatingProps) {
  return (
    <div className="flex justify-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 text-yellow-500 ${
            i < rating ? "fill-current" : "stroke-current"
          }`}
        />
      ))}
    </div>
  );
}
