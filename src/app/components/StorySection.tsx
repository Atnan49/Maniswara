import { motion } from "motion/react";

export function StorySection() {
  return (
    <section id="story" className="bg-[#F4EFE3]">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[#C1652F] uppercase mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.35em", fontWeight: 600 }}
            >
              Our Story
            </p>
            <h2
              className="text-[#2A2620] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(34px, 5vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Lahir dari Cinta pada
              <em className="text-[#C1652F]"> Rasa & Ruang</em>
            </h2>
            <div
              className="space-y-4 text-[#2A2620]/75"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", lineHeight: 1.75 }}
            >
              <p>
                Maniswara hadir sebagai rumah — tempat di mana dua dapur bersatu:
                <strong className="text-[#2A2620]"> Dapoer Baru</strong>, dengan masakan hangat penuh kenangan, dan{" "}
                <strong className="text-[#2A2620]">Bagel's</strong>, dengan roti artisanal yang dibakar setiap pagi.
              </p>
              <p>
                Di sini, setiap sudut dirancang untuk membuat kamu betah. Aroma kopi, suara obrolan pelan, dan cahaya yang hangat — itu adalah Maniswara. Bukan sekadar kafe, tapi tempat cerita dimulai.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 flex gap-10">
              {[
                { num: "2+", label: "Tahun Melayani" },
                { num: "50+", label: "Menu Pilihan" },
                { num: "∞", label: "Momen Berharga" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[#C1652F]"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: 700 }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-[#2A2620]/60 mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden bg-[#2A2620]" style={{ height: "280px" }}>
                <img
                  src="https://images.unsplash.com/photo-1780815227186-9adce46d69f6?w=800&h=560&fit=crop&auto=format"
                  alt="Bunga, kopi, dan pastry di meja kayu Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#2A2620]" style={{ height: "180px" }}>
                <img
                  src="https://images.unsplash.com/photo-1620146344904-097a0002d797?w=400&h=360&fit=crop&auto=format"
                  alt="Roti artisanal Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#2A2620]" style={{ height: "180px" }}>
                <img
                  src="https://images.unsplash.com/photo-1771422574848-d8d25740e728?w=400&h=360&fit=crop&auto=format"
                  alt="Latte art Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#C1652F" }}
            >
              <span
                className="text-[#F1ECD9] text-center leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontStyle: "italic" }}
              >
                Since<br />2022
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
