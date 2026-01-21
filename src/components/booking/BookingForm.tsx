import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trek } from "@/data/treks";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

interface BookingFormProps {
  trek: Trek;
  onClose: () => void;
}

const BookingForm = ({ trek, onClose }: BookingFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    travelers: 1,
    startDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_uk1mh1x",
        "template_vdsqh5c",
        { ...formData, trekName: trek.name },
        "ZSMKx2W_HIti91lsK"
      );

      toast({
        title: "Booking submitted",
        description: "Redirecting to payment…",
      });

      // ✅ REDIRECT WITH DATA
      navigate("/paypal-test", {
        replace: true,
        state: {
          trek,
          booking: formData,
        },
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Booking failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-card p-6 rounded-xl max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">{trek.name}</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Input
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              name="travelers"
              min={1}
              value={formData.travelers}
              onChange={handleChange}
              required
            />
            <Input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Submitting..." : "Submit Booking"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
