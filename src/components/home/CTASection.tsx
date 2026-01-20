import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
const CTASection = () => {
  return <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Himalayan Adventure?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us today to plan your dream trek. Our team is ready to create 
            a personalized itinerary just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/treks">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Browse All Treks
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="tel:+9771234567890" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider opacity-60">Call Us</p>
                <p className="font-medium">+977 9869151197   </p>
              </div>
            </a>
            <a href="mailto:info@gohimalaya.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <div className="p-2 rounded-lg bg-primary-foreground/10">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider opacity-60">Email Us</p>
                <p className="font-medium">gohimalaya571@gmail.com </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;