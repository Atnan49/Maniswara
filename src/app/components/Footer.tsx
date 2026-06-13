import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2A2620]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p
              className="text-[#F1ECD9]/50 uppercase mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.35em" }}
            >
              House of Dapoer Baru &amp; Bagel's
            </p>
            <p
              className="text-[#F1ECD9]"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700 }}
            >
              Maniswara
            </p>
            <p
              className="text-[#F1ECD9]/40 mt-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontStyle: "italic" }}
            >
              And This Is Our Story Really Begins
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="https://instagram.com/maniswara_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F1ECD9]/50 hover:text-[#F1ECD9] transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}
            >
              <Instagram size={16} />
              @maniswara_
            </a>
            <p
              className="text-[#F1ECD9]/30"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px" }}
            >
              © 2024 Maniswara. All rights reserved.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-[#F1ECD9]/8 text-center">
          <p
            className="text-[#F1ECD9]/20"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            MANISWARA · HOUSE OF DAPOER BARU & BAGEL'S ·SOLO
          </p>
        </div>
      </div>
    </footer>
  );
}
