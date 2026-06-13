"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { MenuSection } from "./components/MenuSection";
import { GallerySection } from "./components/GallerySection";
import { VisitSection } from "./components/VisitSection";
import { Footer } from "./components/Footer";

export default function App() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onNavClick={scrollTo} />
      <HeroSection onScrollDown={() => scrollTo("story")} />
      <StorySection />
      <MenuSection />
      <GallerySection />
      <VisitSection />
      <Footer />
    </div>
  );
}
