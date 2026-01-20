import { Link } from "react-router-dom";
import { Clock, Mountain, Gauge, ArrowRight } from "lucide-react";
import { Trek } from "@/data/treks";
import { cn } from "@/lib/utils";

interface TrekCardProps {
  trek: Trek;
  index?: number;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-blue-100 text-blue-700",
  Challenging: "bg-amber-100 text-amber-700",
  Strenuous: "bg-orange-100 text-orange-700",
  Extreme: "bg-red-100 text-red-700",
};

const TrekCard = ({ trek, index = 0 }: TrekCardProps) => {
  return (
    <Link
      to={`/treks/${trek.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={trek.image}
            alt={trek.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mountain-dark/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <span className={cn(
            "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium",
            difficultyColors[trek.difficulty]
          )}>
            {trek.difficulty}
          </span>
          
          {/* Price */}
          <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <span className="text-xs text-muted-foreground">From</span>
            <span className="block text-lg font-bold text-foreground">${trek.price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Region */}
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {trek.region} Region
          </span>

          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-card-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
            {trek.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">
            {trek.shortDescription}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{trek.duration} Days</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Mountain className="h-4 w-4" />
              <span className="text-sm">{trek.maxAltitude.toLocaleString()}m</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            View Details
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TrekCard;
