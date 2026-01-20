import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mountain, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treks } from "@/data/treks";
import TrekCard from "@/components/treks/TrekCard";

const FeaturedTreks = () => {
  const featuredTreks = treks.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Adventures
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Featured Treks & Expeditions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover our most popular Himalayan adventures, from classic base camp treks 
            to challenging peak climbs, all led by experienced local guides.
          </p>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTreks.map((trek, index) => (
            <TrekCard key={trek.id} trek={trek} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/treks">
            <Button variant="outline" size="lg" className="group">
              View All Treks
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
