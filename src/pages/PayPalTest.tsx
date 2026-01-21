import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalTest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState<any>(null);
  const [payOption, setPayOption] = useState<"deposit" | "full">("deposit");

  // ===============================
  // LOAD DATA (STATE OR STORAGE)
  // ===============================
  useEffect(() => {
    const stateData = location.state;

    if (stateData) {
      localStorage.setItem("bookingData", JSON.stringify(stateData));
      setData(stateData);
      return;
    }

    const stored = localStorage.getItem("bookingData");
    if (stored) {
      setData(JSON.parse(stored));
      return;
    }
  }, [location.state]);

  // ===============================
  // RENDER PAYPAL
  // ===============================
  useEffect(() => {
    if (!data || !window.paypal) return;

    const container = document.getElementById("paypal-buttons");
    if (!container) return;

    container.innerHTML = "";

    const total =
      data.trek.price * Number(data.booking.travelers);

    const amount = payOption === "deposit" ? total * 0.5 : total;

    window.paypal
      .Buttons({
        createOrder: (_: any, actions: any) =>
          actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toFixed(2),
                },
              },
            ],
          }),

        onApprove: async (_: any, actions: any) => {
          await actions.order.capture();

          alert("Payment successful!");
          localStorage.removeItem("bookingData");
          navigate("/");
        },

        onError: (err: any) => {
          console.error(err);
          alert("Payment failed");
        },
      })
      .render(container);
  }, [data, payOption]);

  // ===============================
  // SAFETY GUARD
  // ===============================
  if (!data) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-600 font-semibold">
          ❌ No payment data found.
        </p>
        <Button className="mt-4" onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  const total =
    data.trek.price * Number(data.booking.travelers);

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        Pay for {data.trek.name}
      </h1>

      <div className="flex justify-center gap-2 mb-4">
        <Button
          variant={payOption === "deposit" ? "cta" : "outline"}
          onClick={() => setPayOption("deposit")}
        >
          Pay 50%
        </Button>
        <Button
          variant={payOption === "full" ? "cta" : "outline"}
          onClick={() => setPayOption("full")}
        >
          Pay Full
        </Button>
      </div>

      <p className="mb-4">
        {payOption === "deposit"
          ? `$${(total * 0.5).toFixed(2)} deposit`
          : `$${total.toFixed(2)} full payment`}
      </p>

      <div id="paypal-buttons" />
    </div>
  );
};

export default PayPalTest;
