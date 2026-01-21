import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import BookingForm from "@/components/booking/BookingForm";
import { Trek } from "@/data/treks";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Example trek to pass into booking form
  const fakeTrek: Trek = {
    name: "Everest Base Camp",
    price: 1000,
    slug: "ebc",
  };

  return (
    <Layout>
      <HeroSection />

      {/* Button to open booking form */}
      <div className="text-center my-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => setBookingOpen(true)}
        >
          Book Everest Base Camp
        </button>
      </div>

      <FeaturedTreks />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />

      {/* Booking Form Modal */}
      {bookingOpen && (
        <BookingForm
          trek={fakeTrek}
          onClose={() => setBookingOpen(false)}
          paypalLoaded={true} // will be true after App.tsx loads PayPal SDK
        />
      )}
    </Layout>
  );
};

export default Index;
