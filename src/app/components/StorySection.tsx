import { motion } from "motion/react";

const promos = [
  {
    badge: "Promo Mahasiswa",
    title: "Diskon KTM 20%",
    desc: "Tunjukkan KTM-mu dan nikmati potongan 20% setiap Senin s/d Kamis. Pas buat nemenin nugas!",
  },
  {
    badge: "Hari Spesial",
    title: "Jumat Berkah",
    desc: "Setiap hari Jumat, dapatkan free extra shot espresso untuk setiap pembelian kopi susu.",
  },
  {
    badge: "Event Spesial",
    title: "Acoustic Night",
    desc: "Live music setiap Sabtu malam! Nikmati akhir pekan bersama dengan lagu-lagu favorit.",
  },
  {
    badge: "Nasional",
    title: "Merdeka Sale 17%",
    desc: "Promo khusus Hari Kemerdekaan, nikmati diskon 17% untuk semua menu makanan.",
  },
];

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
            className="min-w-0"
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

            {/* Promo & Event Marquee */}
            <div className="mt-10 relative overflow-hidden flex rounded-2xl w-full">
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                  display: flex;
                  width: max-content;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F4EFE3] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F4EFE3] to-transparent z-10 pointer-events-none"></div>

              <div className="animate-marquee gap-4 pr-4">
                {[...promos, ...promos].map((promo, i) => (
                  <div key={i} className="w-[280px] max-w-[85vw] shrink-0 p-5 rounded-2xl border border-[#C1652F]/20 bg-[#C1652F]/5 relative overflow-hidden group hover:bg-[#C1652F]/10 transition-colors cursor-pointer">
                    <div
                      className="absolute top-0 right-0 bg-[#C1652F] text-[#F1ECD9] px-3 py-1 rounded-bl-2xl"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}
                    >
                      {promo.badge}
                    </div>
                    <h3
                      className="text-[#C1652F] mb-1.5 pr-14"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, lineHeight: 1.2 }}
                    >
                      {promo.title}
                    </h3>
                    <p
                      className="text-[#2A2620]/70"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: 1.5 }}
                    >
                      {promo.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative min-w-0"
          >
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden bg-[#2A2620] h-[200px] sm:h-[240px] md:h-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1780815227186-9adce46d69f6?w=800&h=560&fit=crop&auto=format"
                  alt="Bunga, kopi, dan pastry di meja kayu Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#2A2620] h-[140px] md:h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1620146344904-097a0002d797?w=400&h=360&fit=crop&auto=format"
                  alt="Roti artisanal Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#2A2620] h-[140px] md:h-[180px]">
                <img
                  src="https://images.unsplash.com/photo-1771422574848-d8d25740e728?w=400&h=360&fit=crop&auto=format"
                  alt="Latte art Maniswara"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative badge */}
            <div
              className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#C1652F" }}
            >
              <span
                className="text-[#F1ECD9] text-center leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(9px, 3vw, 11px)", fontStyle: "italic" }}
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
