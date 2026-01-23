import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import featuredImage from "../assets/featured.jpg";
import DolpoImage from "../assets/dolpo.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Best Time to Trek in Nepal: A Complete Season Guide",
    excerpt:
      "Discover the optimal months for Himalayan trekking, from the crystal-clear autumn skies to the blooming rhododendrons of spring.",
    image: featuredImage, // ✅ LOCAL IMAGE FROM PUBLIC
    author: "Pemba Sherpa",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "Altitude Sickness: Prevention, Symptoms & Treatment",
    excerpt:
      "Essential knowledge for every trekker. Learn how to recognize, prevent, and manage altitude sickness in the Himalayas.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
    author: "Dr. Mingma Dorje",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "Health & Safety",
  },
  {
    id: 3,
    title: "Complete Packing List for Everest Base Camp Trek",
    excerpt:
      "Don't forget a thing! Our comprehensive packing guide covers everything from base layers to altitude essentials.",
    image: DolpoImage,
    author: "Tashi Lama",
    date: "December 5, 2024",
    readTime: "12 min read",
    category: "Gear Guide",
  },
  {
    id: 4,
    title: "Understanding Sherpa Culture: Traditions of the High Himalayas",
    excerpt:
      "Explore the rich cultural heritage of the Sherpa people, from Buddhist traditions to the warmth of mountain hospitality.",
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    author: "Dawa Yangzum",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    id: 5,
    title: "Nepali Festivals: When Culture Meets Adventure",
    excerpt:
      "Plan your trek around Nepal's vibrant festivals. Experience Dashain, Tihar, and local celebrations in the mountains.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    author: "Karma Tenzing",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Culture",
  },
  {
    id: 6,
    title: "Training for High Altitude Trekking: A 12-Week Program",
    excerpt:
      "Get physically ready for your Himalayan adventure with our structured training program designed for trekkers.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
    author: "Pasang Nuru",
    date: "November 15, 2024",
    readTime: "15 min read",
    category: "Fitness",
  },
];

const BlogPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-sky-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Travel Insights
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Blog & Travel Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert tips, cultural insights, and practical guides to help you prepare
              for your Himalayan adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <article className="mb-16">
            <Link to="#" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id}>
                <Link to="#" className="group block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
