import { motion } from "motion/react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const hours = [
  { day: "Senin – Jumat", time: "07.00 – 21.00" },
  { day: "Sabtu", time: "07.00 – 22.00" },
  { day: "Minggu", time: "08.00 – 21.00" },
];

export function VisitSection() {
  return (
    <section id="visit" className="bg-[#2F3B2C]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C1652F] uppercase mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.35em", fontWeight: 600 }}
          >
            Visit Us
          </p>
          <h2
            className="text-[#F1ECD9]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            Temukan Kami
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-[#F4EFE3]/8 rounded-2xl p-8 border border-[#F1ECD9]/10"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "#C1652F" }}
            >
              <MapPin size={18} color="#F1ECD9" />
            </div>
            <h3
              className="text-[#F1ECD9] mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}
            >
              Alamat
            </h3>
            <p
              className="text-[#F1ECD9]/65"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              Jl. Contoh No. 12,<br />
              Bandung, Jawa Barat<br />
              40123
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 text-[#C1652F] hover:text-[#D4763F] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600 }}
            >
              Buka di Maps →
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#F4EFE3]/8 rounded-2xl p-8 border border-[#F1ECD9]/10"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "#C1652F" }}
            >
              <Clock size={18} color="#F1ECD9" />
            </div>
            <h3
              className="text-[#F1ECD9] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}
            >
              Jam Buka
            </h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center">
                  <span
                    className="text-[#F1ECD9]/60"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
                  >
                    {h.day}
                  </span>
                  <span
                    className="text-[#F1ECD9]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Reservasi */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#F4EFE3]/8 rounded-2xl p-8 border border-[#F1ECD9]/10"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "#C1652F" }}
            >
              <Phone size={18} color="#F1ECD9" />
            </div>
            <h3
              className="text-[#F1ECD9] mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600 }}
            >
              Hubungi Kami
            </h3>
            <p
              className="text-[#F1ECD9]/65 mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.7 }}
            >
              Reservasi meja atau tanya menu? Hubungi kami langsung.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F1ECD9]/70 hover:text-[#F1ECD9] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
              >
                <span className="text-[#C1652F]">WA</span> +62 812-3456-7890
              </a>
              <a
                href="https://instagram.com/maniswara_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F1ECD9]/70 hover:text-[#F1ECD9] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
              >
                <Instagram size={14} className="text-[#C1652F]" /> @maniswara_
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl overflow-hidden"
          style={{ height: "280px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1768400777008-148b0aae6346?w=1200&h=560&fit=crop&auto=format"
            alt="Suasana Maniswara"
            className="w-full h-full object-cover opacity-60"
          />
          <div
            className="relative -top-full h-full flex items-center justify-center"
            style={{ background: "rgba(47,59,44,0.65)" }}
          >
            <div className="text-center">
              <p
                className="text-[#F1ECD9]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(24px, 4vw, 40px)",
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                "A place to begin again."
              </p>
              <p
                className="text-[#F1ECD9]/60 mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
              >
                — Maniswara
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
