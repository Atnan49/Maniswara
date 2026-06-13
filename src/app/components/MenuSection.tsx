"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import menuData from "../../../menu.json";

interface MenuItem {
  name: string;
  description: string;
  price: number | null;
  highlight?: boolean;
}

interface RawCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

interface MenuCategory {
  id: string;
  label: string;
  sectionBadge: string;
  bgColor: string;
  textColor: string;
  badgeColor: string;
  items: MenuItem[];
}

const colorPalettes = [
  { bgColor: "#F4EFE3", textColor: "#2A2620", badgeColor: "#C1652F" },
  { bgColor: "#2F3B2C", textColor: "#F1ECD9", badgeColor: "#C1652F" },
  { bgColor: "#5E5F4C", textColor: "#F1ECD9", badgeColor: "#C1652F" },
];

const categories: MenuCategory[] = menuData.categories.map((cat: RawCategory, index: number) => ({
  id: cat.id,
  label: cat.title,
  sectionBadge: cat.subtitle || `${cat.title} Sections`,
  bgColor: colorPalettes[index % 3].bgColor,
  textColor: colorPalettes[index % 3].textColor,
  badgeColor: colorPalettes[index % 3].badgeColor,
  items: cat.items,
}));

function formatPrice(p: number | null) {
  if (p == null) return "Sesuai Pilihan";
  return "Rp " + p.toLocaleString("id-ID").replace(/,/g, ".");
}

function SectionBadge({ label, badgeColor }: { label: string; badgeColor: string }) {
  return (
    <span
      className="inline-flex items-center px-4 py-1.5 rounded-full mb-6"
      style={{
        backgroundColor: badgeColor,
        fontFamily: "'Playfair Display', serif",
        fontSize: "13px",
        fontStyle: "italic",
        fontWeight: 600,
        color: "#F1ECD9",
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </span>
  );
}

export function MenuSection() {
  const [activeId, setActiveId] = useState(categories[0]?.id || "starters");
  const active = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section id="menu">
      {/* Tab navigation — terracotta strip */}
      <div className="bg-[#C1652F] sticky top-[64px] z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`px-5 py-4 whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activeId === cat.id
                    ? "border-[#F1ECD9] text-[#F1ECD9]"
                    : "border-transparent text-[#F1ECD9]/60 hover:text-[#F1ECD9]/90"
                }`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: activeId === cat.id ? 600 : 400,
                  letterSpacing: "0.03em",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35 }}
          style={{ backgroundColor: active.bgColor }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;
            const swipeThreshold = 50;
            const currentIndex = categories.findIndex((c) => c.id === activeId);

            if (swipe < -swipeThreshold && currentIndex < categories.length - 1) {
              setActiveId(categories[currentIndex + 1].id);
            } else if (swipe > swipeThreshold && currentIndex > 0) {
              setActiveId(categories[currentIndex - 1].id);
            }
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-16">
            {/* Section badge */}
            <SectionBadge label={active.sectionBadge} badgeColor={active.badgeColor} />

            {/* Heading */}
            <h2
              className="mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: active.textColor,
                lineHeight: 1.15,
              }}
            >
              {active.label}
            </h2>

            {/* Items grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ borderColor: `${active.textColor}15` }}>
              {active.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className={`relative p-6 rounded-xl group transition-all duration-200 ${
                    item.highlight ? "ring-1 ring-[#C1652F]/30" : ""
                  }`}
                  style={{
                    backgroundColor: item.highlight
                      ? active.bgColor === "#F4EFE3"
                        ? "rgba(193,101,47,0.08)"
                        : "rgba(241,236,217,0.08)"
                      : "transparent",
                  }}
                >
                  {item.highlight && (
                    <span
                      className="absolute top-4 right-4 px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "#C1652F",
                        color: "#F1ECD9",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Favorit
                    </span>
                  )}
                  <h3
                    className="mb-1.5"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: active.textColor,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: `${active.textColor}99`,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "17px",
                      fontWeight: 600,
                      fontVariantNumeric: "tabular-nums",
                      color: "#C1652F",
                    }}
                  >
                    {formatPrice(item.price)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
