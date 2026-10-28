import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Pillars from "./components/Pillars";
import Programmes from "./components/Programmes";
import LifeSection from "./components/LifeSection";
import Gallery from "./components/Gallery";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { initSmoothScroll } from "./lib/smoothScroll";

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <div className="min-h-screen bg-cream-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Pillars />
        <Programmes />
        <LifeSection />
        <Gallery />
        <Admissions />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
