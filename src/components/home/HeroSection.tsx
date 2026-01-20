import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Himalayan mountain range at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-background">Nepal's Trusted Trekking Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight">
            Authentic Himalayan Adventures with{" "}
            <span className="text-accent">Local Experts</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
            Experience Nepal's majestic peaks, ancient cultures, and pristine trails 
            guided by experienced local Sherpas and mountaineers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/treks">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Explore Treks
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Book Your Adventure
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              { icon: MapPin, text: "Local Nepalese Guides" },
              { icon: Users, text: "Small Group Treks" },
              { icon: Leaf, text: "Eco-Friendly Tourism" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-background/80"
              >
                <item.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/60 hover:text-background transition-colors animate-float"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
