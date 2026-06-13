import { motion } from "motion/react";

const photos = [
  {
    src: "/images/ig-4.jpg",
    alt: "Maniswara Instagram Photo 1",
    span: "row-span-2",
  },
  {
    src: "/images/ig-5.jpg",
    alt: "Maniswara Instagram Photo 2",
    span: "",
  },
  {
    src: "/images/ig-6.jpg",
    alt: "Maniswara Instagram Photo 3",
    span: "",
  },
  {
    src: "/images/ig-7.jpg",
    alt: "Maniswara Instagram Photo 4",
    span: "",
  },
  {
    src: "/images/ig-8.jpg",
    alt: "Maniswara Instagram Photo 5",
    span: "row-span-2",
  },
  {
    src: "/images/ig-9.jpg",
    alt: "Maniswara Instagram Photo 6",
    span: "",
  },
  {
    src: "/images/ig-10.jpg",
    alt: "Maniswara Instagram Photo 7",
    span: "",
  },
  {
    src: "/images/ig-11.jpg",
    alt: "Maniswara Instagram Photo 8",
    span: "",
  },
  {
    src: "/images/ig-12.jpg",
    alt: "Maniswara Instagram Photo 9",
    span: "",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#F4EFE3]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-[#C1652F] uppercase mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.35em", fontWeight: 600 }}
          >
            Gallery
          </p>
          <h2
            className="text-[#2A2620]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
            }}
          >
            Setiap Sudut, Setiap Rasa
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridAutoRows: "200px" }}>
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl overflow-hidden bg-[#2A2620] group cursor-pointer ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/maniswara.soc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#2A2620] text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F1ECD9] transition-all duration-250"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @maniswara.soc di Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
