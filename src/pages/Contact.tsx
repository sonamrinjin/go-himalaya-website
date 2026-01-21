import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_uk1mh1x", // Service ID
        "template_bwfb6i5", // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "ZSMKx2W_HIti91lsK" // Public Key
      );

      setIsSuccess(true);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Message could not be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-sky-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our treks? Want to customize an adventure?
              We're here to help you plan the perfect Himalayan experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Address</h4>
                      <p className="text-muted-foreground">
                        Thamel, Kathmandu<br />Nepal 44600
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <a
                      href="tel:+9779869151197"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +977 9869151197
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <a
                      href="mailto:gohimalaya571@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      gohimalaya571@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Sun - Fri: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9779869151197"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl hover:bg-green-600"
              >
                <MessageCircle className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-white/80">
                    Quick response guaranteed
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <div className="bg-card rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-card rounded-2xl p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
