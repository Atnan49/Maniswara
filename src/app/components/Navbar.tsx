"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavClick: (section: string) => void;
}

export function Navbar({ onNavClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", id: "hero" },
    { label: "Our Story", id: "story" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "Visit Us", id: "visit" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2F3B2C] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavClick("hero")}
          className="flex flex-col items-start leading-none"
        >
          <span
            className="text-[#F1ECD9] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.3em" }}
          >
            House of
          </span>
          <span
            className="text-[#F1ECD9]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, lineHeight: 1.1 }}
          >
            Maniswara
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNavClick(l.id)}
              className="text-[#F1ECD9]/80 hover:text-[#F1ECD9] transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", letterSpacing: "0.05em" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => onNavClick("menu")}
            className="px-5 py-2 rounded-full text-[#F1ECD9] transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "#C1652F",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            Lihat Menu
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F1ECD9] p-1"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2F3B2C] px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { onNavClick(l.id); setMenuOpen(false); }}
              className="text-[#F1ECD9]/80 hover:text-[#F1ECD9] text-left py-1 transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
