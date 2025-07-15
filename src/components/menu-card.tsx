import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MenuItem } from "@/types/menu";
import { Star } from "lucide-react";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Card className="w-full h-full overflow-hidden group border border-gray-700 hover:shadow-lg transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Featured</span>
          </div>
        )}
        {item.dietary.length > 0 && (
          <div className="absolute top-4 right-4 flex flex-wrap gap-1">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <span className="text-xl whitespace-nowrap font-bold text-secondary">
            Ksh {item.price}
          </span>
        </div>
        <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>
        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full font-medium">
          {item.category}
        </span>
      </CardContent>
    </Card>
  );
}
