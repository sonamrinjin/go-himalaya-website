import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Treks from "./pages/Treks";
import TrekDetail from "./pages/TrekDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PayPalTest from "./pages/PayPalTest";

/**
 * ✅ Load PayPal SANDBOX SDK (ONLY ONCE)
 */
const loadPayPalScript = (clientId: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.getElementById("paypal-sdk")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${clientId}&currency=CAD&components=buttons`;
    script.async = true;

    script.onload = () => {
      console.log("✅ PayPal SANDBOX SDK loaded");
      resolve();
    };

    script.onerror = () => {
      console.error("❌ PayPal SDK failed to load");
      reject();
    };

    document.body.appendChild(script);
  });

const App = () => {
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

    if (!clientId) {
      console.error("❌ VITE_PAYPAL_CLIENT_ID is missing");
      return;
    }

    loadPayPalScript(clientId)
      .then(() => setPaypalLoaded(true))
      .catch(() => setPaypalLoaded(false));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index paypalLoaded={paypalLoaded} />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/treks/:slug" element={<TrekDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* ✅ THIS WAS MISSING */}
        <Route
          path="/paypal-test"
          element={<PayPalTest paypalLoaded={paypalLoaded} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
