import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "United Kingdom",
    trek: "Everest Base Camp Trek",
    rating: 5,
    text: "An absolutely life-changing experience! Our guide Pemba was incredible - his knowledge of the mountains and local culture made every day special. The organization was flawless, and reaching base camp was the highlight of my life.",
    avatar: "SM",
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Germany",
    trek: "Annapurna Circuit Trek",
    rating: 5,
    text: "Go Himalaya made my dream trek a reality. The attention to safety, the quality of accommodations, and the genuine warmth of the team exceeded all expectations. Crossing the Thorong La pass was unforgettable!",
    avatar: "MW",
  },
  {
    id: 3,
    name: "Jennifer & Tom Adams",
    location: "Australia",
    trek: "Langtang Valley Trek",
    rating: 5,
    text: "We chose Langtang for our honeymoon trek and couldn't have made a better choice. The team arranged everything perfectly, from the romantic sunset viewpoints to the authentic village homestays. Truly magical!",
    avatar: "JT",
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    location: "Japan",
    trek: "Island Peak Climbing",
    rating: 5,
    text: "As a first-time peak climber, I was nervous about the technical aspects. The climbing guides were patient, professional, and made sure I was confident every step of the way. Summit success!",
    avatar: "KT",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-mountain-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-background mt-4 mb-6">
            Stories from the Trail
          </h2>
          <p className="text-background/70 text-lg leading-relaxed">
            Hear from adventurers who have experienced the magic of the Himalayas with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-background/10">
            <Quote className="h-12 w-12 text-accent/50 mb-6" />
            
            <div className="min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    "transition-all duration-500",
                    index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                  )}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-background leading-relaxed mb-8">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-background">{testimonial.name}</p>
                      <p className="text-sm text-background/60">
                        {testimonial.location} • {testimonial.trek}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex ? "w-8 bg-accent" : "bg-background/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-background/10 hover:bg-background/20 text-background transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
