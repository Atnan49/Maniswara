import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MenuItem {
  name: string;
  desc: string;
  price: number;
  highlight?: boolean;
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

const categories: MenuCategory[] = [
  {
    id: "bagels",
    label: "Bagel's",
    sectionBadge: "Bagel's Sections",
    bgColor: "#F4EFE3",
    textColor: "#2A2620",
    badgeColor: "#C1652F",
    items: [
      { name: "Plain Bagel", desc: "Bagel klasik dengan butter & selai pilihan", price: 25000 },
      { name: "Smoked Beef Bagel", desc: "Smoked beef, lettuce, tomat, cream cheese", price: 48000, highlight: true },
      { name: "Cream Cheese Bagel", desc: "Cream cheese homemade, herb, garlic butter", price: 38000 },
      { name: "Avocado Bagel", desc: "Avocado mash, lemon, microgreens, red pepper flakes", price: 45000, highlight: true },
      { name: "Egg & Cheese Bagel", desc: "Scrambled egg, cheddar melt, mayo", price: 42000 },
      { name: "Tuna Melt Bagel", desc: "Tuna salad, tomat, cheddar, dibakar sempurna", price: 46000 },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    sectionBadge: "Pasta Sections",
    bgColor: "#2F3B2C",
    textColor: "#F1ECD9",
    badgeColor: "#C1652F",
    items: [
      { name: "Aglio e Olio", desc: "Spaghetti, bawang putih, chili flakes, parsley", price: 48000 },
      { name: "Carbonara", desc: "Pasta creamy, smoked beef, kuning telur, parmesan", price: 55000, highlight: true },
      { name: "Bolognese", desc: "Ragu daging sapi, tomat san marzano, basilico", price: 58000, highlight: true },
      { name: "Arrabbiata", desc: "Saus tomat pedas, bawang putih, chili, parsley", price: 48000 },
      { name: "Pesto Genovese", desc: "Basil pesto homemade, cherry tomat, parmesan", price: 55000 },
      { name: "Pasta Alfredo", desc: "Saus creamy butter parmesan, pappardelle", price: 52000 },
    ],
  },
  {
    id: "sandwich",
    label: "Sandwich",
    sectionBadge: "Sandwich Sections",
    bgColor: "#5E5F4C",
    textColor: "#F1ECD9",
    badgeColor: "#C1652F",
    items: [
      { name: "Classic Club", desc: "Smoked beef, telur, selada, tomat, mayo, sourdough", price: 48000 },
      { name: "Smoked Beef Melt", desc: "Smoked beef, cheddar melt, pickles, mustard", price: 52000, highlight: true },
      { name: "Caprese Toast", desc: "Mozzarella segar, tomat heirloom, basil, balsamic", price: 45000 },
      { name: "Chicken Avocado", desc: "Chicken breast panggang, avocado, sriracha mayo", price: 58000, highlight: true },
      { name: "Mushroom Swiss", desc: "Jamur sauté, keju Swiss, thyme, brioche", price: 50000 },
    ],
  },
  {
    id: "pancake",
    label: "Pancake",
    sectionBadge: "Pancake Sections",
    bgColor: "#F4EFE3",
    textColor: "#2A2620",
    badgeColor: "#C1652F",
    items: [
      { name: "Classic Buttermilk", desc: "Pancake klasik dengan maple syrup & butter", price: 38000 },
      { name: "Blueberry Stack", desc: "Blueberry segar, whipped cream, blueberry compote", price: 48000, highlight: true },
      { name: "Banana Caramel", desc: "Pisang karamel, hazelnut, oat granola", price: 48000 },
      { name: "Red Velvet", desc: "Pancake red velvet, cream cheese drizzle", price: 52000, highlight: true },
      { name: "Tiramisu Stack", desc: "Mascarpone cream, espresso soaked, cocoa dusting", price: 55000, highlight: true },
      { name: "Matcha Cream", desc: "Pancake matcha, red bean paste, whipped cream", price: 50000 },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    sectionBadge: "Drink Sections",
    bgColor: "#2F3B2C",
    textColor: "#F1ECD9",
    badgeColor: "#C1652F",
    items: [
      { name: "Espresso", desc: "Single origin, extracted untuk rasa terbaik", price: 28000 },
      { name: "Americano", desc: "Espresso + air panas, bold & clean", price: 32000 },
      { name: "Latte", desc: "Espresso + steamed milk, tekstur smooth", price: 38000, highlight: true },
      { name: "Cappuccino", desc: "Espresso, milk foam, sedikit cinnamon", price: 38000 },
      { name: "Matcha Latte", desc: "Ceremonial matcha, oat milk, house sweetener", price: 42000, highlight: true },
      { name: "Taro Latte", desc: "Taro homemade, fresh milk, purple aesthetic", price: 42000 },
      { name: "Strawberry Milk", desc: "Strawberry fresh blend, full cream milk", price: 38000 },
      { name: "Fresh Lemonade", desc: "Lemon segar, mint, sparkling water", price: 30000 },
    ],
  },
];

function formatPrice(p: number) {
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
  const [activeId, setActiveId] = useState("bagels");
  const active = categories.find((c) => c.id === activeId)!;

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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          style={{ backgroundColor: active.bgColor }}
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
                    item.highlight ? "ring-1" : ""
                  }`}
                  style={{
                    backgroundColor: item.highlight
                      ? active.bgColor === "#F4EFE3"
                        ? "rgba(193,101,47,0.08)"
                        : "rgba(241,236,217,0.08)"
                      : "transparent",
                    ringColor: "rgba(193,101,47,0.3)",
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
                    {item.desc}
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
