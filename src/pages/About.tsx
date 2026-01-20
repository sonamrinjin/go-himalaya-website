import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Shield, Users, Leaf, Award, Target, Heart } from "lucide-react";
import guideImage from "@/assets/guide-portrait.jpg";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. We maintain the highest standards with trained guides, quality equipment, and emergency protocols.",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We believe in genuine cultural immersion, connecting you with local communities and traditions.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "We're committed to preserving the Himalayas through responsible travel practices and environmental conservation.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "A portion of every trek goes back to local communities through education and infrastructure projects.",
  },
];

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "5000+", label: "Happy Trekkers" },
  { value: "150+", label: "Expert Guides" },
  { value: "50+", label: "Trek Routes" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-sky-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Your Local Partners in Himalayan Adventure
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born in the shadows of the world's highest peaks, Go Himalaya Treks and Expedition 
              brings you authentic Himalayan experiences led by passionate local experts.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2005 by a team of passionate Nepali mountaineers and trekking guides, 
                  Go Himalaya Treks and Expedition was born from a simple belief: the best way to 
                  experience the Himalayas is with those who call it home.
                </p>
                <p>
                  Our founders grew up in the mountain villages of Nepal, learning the trails, 
                  the culture, and the spirit of the Himalayas from childhood. Today, we continue 
                  that tradition, employing only local guides who share our deep connection to 
                  these sacred mountains.
                </p>
                <p>
                  Over the years, we've guided thousands of adventurers from around the world, 
                  from first-time trekkers to experienced mountaineers. Each journey is crafted 
                  with care, ensuring not just safety and comfort, but meaningful connections 
                  with the land and its people.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={guideImage}
                  alt="Experienced Nepali mountain guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-card max-w-[280px]">
                <p className="font-serif text-lg font-semibold mb-1">
                  "The mountains are not just our workplace, they're our home."
                </p>
                <p className="text-sm opacity-80">— Pemba Sherpa, Lead Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-sky-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg">
              Our values guide every decision we make and every trek we lead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Trust & Safety
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
              Licensed & Certified
            </h2>
            <p className="text-muted-foreground text-lg">
              We're fully licensed and meet all international safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "Nepal Tourism Board",
                description: "Official government licensed trekking company",
              },
              {
                icon: Shield,
                title: "TAAN Member",
                description: "Trekking Agencies' Association of Nepal",
              },
              {
                icon: Target,
                title: "NMA Certified",
                description: "Nepal Mountaineering Association certified guides",
              },
            ].map((cert, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mountain-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-background mb-6">
            Ready to Trek with Us?
          </h2>
          <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's plan your perfect Himalayan adventure together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/treks">
              <Button variant="hero" size="lg">
                Explore Treks
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
