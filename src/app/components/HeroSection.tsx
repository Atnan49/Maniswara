import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[#2A2620]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1761695939616-1c03087c1ce4?w=1600&h=900&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Gradient overlay — green to transparent to deep */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2F3B2C]/80 via-[#2A2620]/40 to-[#2A2620]/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#F1ECD9]/70 uppercase mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.35em" }}
        >
          House of Dapoer Baru &amp; Bagel's
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-[#F1ECD9] mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Maniswara
        </motion.h1>

        {/* Italic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[#F1ECD9]/80 mb-10"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          And This Is Our Story Really Begins
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onScrollDown}
            className="px-8 py-3.5 rounded-full text-[#F1ECD9] transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "#C1652F",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Jelajahi Menu
          </button>
          <button
            onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full border border-[#F1ECD9]/40 text-[#F1ECD9] hover:border-[#F1ECD9]/80 transition-all duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            Cerita Kami
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F1ECD9]/50 hover:text-[#F1ECD9] transition-colors"
        style={{ animation: "bounce 2s infinite" }}
      >
        <ChevronDown size={28} />
      </motion.button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
