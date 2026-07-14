import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Services";
import PricingPage from "./pages/Pricing";
import GalleryPage from "./pages/Gallery";

// Corrected Imports
import ScrollToTopButton from "./components/layout/Scrolltotop";
import FloatingSidePanel from "./components/layout/Floatingsidepanel";

// 1. Inline Scroll To Top Router Utility (No extra file or import needed!)
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* Listens to page changes and scrolls the screen to 0, 0 */}
      <ScrollToTopOnNavigate />

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <Footer />
      
      <FloatingSidePanel />
      <ScrollToTopButton />
    </>
  );
}

export default App;