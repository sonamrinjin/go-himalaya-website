import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { getTrekBySlug } from "@/data/treks";
import { Button } from "@/components/ui/button";
import { 
  Clock, Mountain, Gauge, Users, Calendar, MapPin, 
  ChevronLeft, Check, X, ChevronDown, ChevronUp 
} from "lucide-react";
import { cn } from "@/lib/utils";
import BookingForm from "@/components/booking/BookingForm";

const TrekDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const trek = getTrekBySlug(slug || "");
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showBookingForm, setShowBookingForm] = useState(false);

  if (!trek) {
    return (
      <Layout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Trek Not Found</h1>
          <p className="text-muted-foreground mb-8">The trek you're looking for doesn't exist.</p>
          <Link to="/treks">
            <Button variant="default">View All Treks</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const difficultyColors: Record<string, string> = {
    Easy: "bg-green-100 text-green-700",
    Moderate: "bg-blue-100 text-blue-700",
    Challenging: "bg-amber-100 text-amber-700",
    Strenuous: "bg-orange-100 text-orange-700",
    Extreme: "bg-red-100 text-red-700",
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={trek.image}
          alt={trek.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-dark via-mountain-dark/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              Back to Treks
            </button>
            
            <span className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-medium mb-4",
              difficultyColors[trek.difficulty]
            )}>
              {trek.difficulty}
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
              {trek.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{trek.duration} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5" />
                <span>{trek.maxAltitude.toLocaleString()}m</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{trek.region} Region</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{trek.groupSize}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{trek.description}</p>
                
                <h3 className="font-semibold text-foreground mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {trek.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-3">
                  {trek.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border border-border rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                            {day.day}
                          </span>
                          <div>
                            <h4 className="font-semibold text-foreground">{day.title}</h4>
                            {day.altitude && (
                              <span className="text-sm text-muted-foreground">
                                Altitude: {day.altitude.toLocaleString()}m
                              </span>
                            )}
                          </div>
                        </div>
                        {expandedDay === day.day ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        expandedDay === day.day ? "max-h-40 p-4 pt-0" : "max-h-0"
                      )}>
                        <p className="text-muted-foreground pl-16">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes/Excludes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {trek.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">What's Excluded</h3>
                  <ul className="space-y-2">
                    {trek.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best Season & Packing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Best Season</h3>
                  <div className="flex flex-wrap gap-2">
                    {trek.bestSeason.map((month) => (
                      <span
                        key={month}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                      >
                        {month}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">Essential Gear</h3>
                  <ul className="space-y-1">
                    {trek.packingList.slice(0, 6).map((item, index) => (
                      <li key={index} className="text-muted-foreground text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Price Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">${trek.price}</span>
                      <span className="text-muted-foreground">/ person</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{trek.duration} Days</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Max Altitude</span>
                      <span className="font-medium text-foreground">{trek.maxAltitude.toLocaleString()}m</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Difficulty</span>
                      <span className="font-medium text-foreground">{trek.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Group Size</span>
                      <span className="font-medium text-foreground">{trek.groupSize}</span>
                    </div>
                  </div>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    onClick={() => setShowBookingForm(true)}
                  >
                    Book This Trek
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Free cancellation up to 30 days before departure
                  </p>
                </div>

                {/* Need Help */}
                <div className="bg-muted/50 rounded-2xl p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Need Help Deciding?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our trek specialists are here to help you plan the perfect adventure.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && (
        <BookingForm
          trek={trek}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </Layout>
  );
};

export default TrekDetailPage;
