import { MapPin, Shield, Users, Leaf, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Our guides are born and raised in the Himalayas. They know every trail, village, and hidden gem.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols, emergency equipment, and experienced high-altitude guides.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Maximum 12 trekkers per group ensures personalized attention and authentic experiences.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Leave no trace policy, supporting local conservation and sustainable tourism practices.",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "Government licensed, fully insured, and certified by Nepal Tourism Board.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support",
    description: "We give back to local communities through education and infrastructure projects.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-sky-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Why Trek With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Your Adventure, Our Passion
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With over 18 years of experience, we've crafted the perfect trekking 
            experience that combines adventure, safety, and cultural immersion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl cta-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
