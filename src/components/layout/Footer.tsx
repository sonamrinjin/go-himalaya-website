import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mountain-dark text-background/90">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-background">
                  Go Himalaya
                </span>
                <span className="text-xs tracking-wider uppercase text-background/60">
                  Treks & Expedition
                </span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Experience authentic Himalayan adventures with local experts. 
              We've been guiding trekkers through Nepal's majestic mountains since 2005.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100083199257147&sk=about" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/go_himalaya/" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@go_himalaya" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Popular Treks", path: "/treks" },
                { name: "Peak Climbing", path: "/treks?category=peak-climbing" },
                { name: "About Us", path: "/about" },
                { name: "Travel Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">Popular Treks</h4>
            <ul className="space-y-3">
              {[
                "Everest Base Camp Trek",
                "Annapurna Base Camp Trek",
                "Langtang Valley Trek",
                "Manaslu Circuit Trek",
                "Upper Mustang Trek",
              ].map((trek) => (
                <li key={trek}>
                  <Link
                    to="/treks"
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {trek}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-background/70">
                  Thamel, Kathmandu<br />Nepal 44600
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+9779869151197" className="text-sm text-background/70 hover:text-accent transition-colors">
                  +977 9869151197
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:gohimalaya571@gmail.com" className="text-sm text-background/70 hover:text-accent transition-colors">
                  gohimalaya571@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Go Himalaya Treks and Expedition. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-background/50 hover:text-background/70 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-background/50 hover:text-background/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
