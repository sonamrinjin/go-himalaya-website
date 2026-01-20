import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import TrekCard from "@/components/treks/TrekCard";
import { treks, type Region, type Difficulty, type TrekCategory } from "@/data/treks";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const regions: Region[] = ["Everest", "Annapurna", "Langtang", "Manaslu", "Mustang", "Dolpo", "Kanchenjunga", "Makalu"];
const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Strenuous", "Extreme"];
const categories: { value: TrekCategory | "all"; label: string }[] = [
  { value: "all", label: "All Treks" },
  { value: "popular", label: "Popular Treks" },
  { value: "remote", label: "Remote Treks" },
  { value: "peak-climbing", label: "Peak Climbing" },
];

const TreksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const categoryParam = searchParams.get("category") as TrekCategory | null;
  const regionParam = searchParams.get("region") as Region | null;
  const difficultyParam = searchParams.get("difficulty") as Difficulty | null;

  const [selectedCategory, setSelectedCategory] = useState<TrekCategory | "all">(categoryParam || "all");
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(regionParam);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(difficultyParam);

  const filteredTreks = useMemo(() => {
    return treks.filter((trek) => {
      if (selectedCategory !== "all" && trek.category !== selectedCategory) return false;
      if (selectedRegion && trek.region !== selectedRegion) return false;
      if (selectedDifficulty && trek.difficulty !== selectedDifficulty) return false;
      return true;
    });
  }, [selectedCategory, selectedRegion, selectedDifficulty]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedRegion(null);
    setSelectedDifficulty(null);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedRegion || selectedDifficulty;

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-sky-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Explore Our Adventures
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Treks & Expeditions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From gentle hill walks to challenging peak climbs, discover the perfect 
              Himalayan adventure tailored to your experience and dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filter Toggle & Clear */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="gap-2 text-muted-foreground">
                <X className="h-4 w-4" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Expandable Filters */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              showFilters ? "max-h-96 mb-8" : "max-h-0"
            )}
          >
            <div className="p-6 bg-muted/50 rounded-2xl space-y-6">
              {/* Region Filter */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Region</h4>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm transition-all",
                        selectedRegion === region
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-background text-muted-foreground hover:bg-background/80"
                      )}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Difficulty</h4>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-sm transition-all",
                        selectedDifficulty === diff
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-background text-muted-foreground hover:bg-background/80"
                      )}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="font-medium text-foreground">{filteredTreks.length}</span> treks
          </p>

          {/* Trek Grid */}
          {filteredTreks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTreks.map((trek, index) => (
                <TrekCard key={trek.id} trek={trek} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No treks found matching your criteria</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TreksPage;
