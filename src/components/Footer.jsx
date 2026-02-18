import React from "react";
import { Github, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#001219] text-cyan-50/50 pt-16 pb-8 overflow-hidden border-t-4 border-[#e9ff70]/20">
      {/* Texture Overlay (Grainy effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* BAGIAN KIRI: BRANDING */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tighter text-[#e9ff70] uppercase mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              FARHAN DENIEL
            </h2>
            <p className="text-xs max-w-[300px] leading-relaxed font-medium uppercase tracking-wider">
              Membangun pengalaman visual yang ikonik dan fungsional melalui
              desain grafis dan teknologi komunikasi.
            </p>
          </div>

          {/* BAGIAN TENGAH: SOCIAL MEDIA (Style Boxy) */}
          <div className="flex gap-4">
            <SocialIcon
              icon={<Github size={20} />}
              link="https://github.com/"
            />
            <SocialIcon
              icon={<Instagram size={20} />}
              link="https://instagram.com/frhnniell"
            />
            <SocialIcon
              icon={<Linkedin size={20} />}
              link="https://linkedin.com/"
            />
          </div>
        </div>

        {/* GARIS BAWAH & COPYRIGHT */}
        <div className="pt-8 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
          <p className="flex items-center gap-2">
            © {currentYear}{" "}
            <span className="text-[#e9ff70]">Farhan Deniel</span>. [PENS]
            Student.
          </p>

          <p className="flex items-center gap-1.5 bg-black/30 px-4 py-2 border border-white/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            Made with{" "}
            <Heart size={14} className="text-[#e9ff70] fill-[#e9ff70]" /> by
            <span className="text-white font-black italic">FRHNNIELL</span>
          </p>
        </div>
      </div>

      {/* Dekorasi Background Glow Samping (Biru Teal) */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#005f73]/20 blur-[80px] rounded-full"></div>
    </footer>
  );
}

// Sub-komponen untuk Ikon Sosial Media (Style Porto: Boxy & Hard Shadow)
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border-2 border-white/10 rounded-none text-white hover:text-[#001219] hover:bg-[#e9ff70] hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
