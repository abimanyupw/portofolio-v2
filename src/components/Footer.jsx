import React from "react";
import { Github, Instagram, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030014] text-slate-500 pt-16 pb-8 overflow-hidden">
      {/* Garis Pemisah Gradasi */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* BAGIAN KIRI: BRAND */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-2">
              ABIMANYU
            </h2>
            <p className="text-sm max-w-[250px] leading-relaxed">
              Membangun pengalaman digital yang inovatif dan fungsional dengan
              dedikasi penuh.
            </p>
          </div>

          {/* BAGIAN TENGAH: SOCIAL MEDIA */}
          <div className="flex gap-4">
            <SocialIcon
              icon={<Github size={20} />}
              link="https://github.com/"
            />
            <SocialIcon
              icon={<Instagram size={20} />}
              link="https://instagram.com/"
            />
            <SocialIcon
              icon={<Linkedin size={20} />}
              link="https://linkedin.com/"
            />
          </div>
        </div>

        {/* GARIS BAWAH & COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
          <p>
            © {currentYear} <span className="text-white">Abimanyu</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{" "}
            by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 font-bold">
              Abimanyu
            </span>
          </p>
        </div>
      </div>

      {/* Dekorasi Background Glow Samping */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/5 blur-[80px] rounded-full"></div>
    </footer>
  );
}

// Sub-komponen untuk Ikon Sosial Media
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-600/20 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
