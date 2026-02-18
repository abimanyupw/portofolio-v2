import React, { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  Instagram,
  Camera,
  Video,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const jobs = [
    "Professional Photographer",
    "Cinematic Videographer",
    "Graphic & Logo Designer",
    "Social Media Specialist",
    "Event Documentations",
  ];
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % jobs.length;
    let fullText = jobs[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  }, [isDeleting, loopNum, text.length, jobs]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [tick, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#005f73] overflow-hidden pt-32 md:pt-36 lg:pt-20 scroll-mt-20"
    >
      {/* BACKGROUND GRADIENT (Inspirasi: Teal ke Deep Navy dari Gambar Porto) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a9396] via-[#005f73] to-[#001219]"></div>

      {/* Texture Overlay (Grainy effect seperti di desainmu) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* KOLOM KIRI: KONTEN TETAP SAMA */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="flex flex-col justify-center text-left"
        >
          {/* Badge: Kuning Stabilo Hard-Edge */}
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#e9ff70] text-[#001219] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            <Sparkles size={14} />
            <span>Capturing Moments, Creating Art</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-[0.9]">
            CREATIVE <br />
            {/* Gradasi Teks Kuning Stabilo */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9ff70] to-[#d4e662] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              VISIONARY
            </span>
          </h1>

          {/* AREA TYPEWRITER */}
          <div className="h-8 md:h-12 mb-8 border-l-4 border-[#e9ff70] pl-4">
            <p className="text-xl md:text-3xl font-bold text-white uppercase italic tracking-tight">
              {text}
              <span className="animate-blink text-[#e9ff70]">|</span>
            </p>
          </div>

          <p className="text-cyan-50 max-w-lg text-sm md:text-lg mb-10 leading-relaxed font-medium">
            Membantu brand dan momen berhargamu tampil lebih ikonik melalui
            lensa profesional dan sentuhan{" "}
            <span className="text-[#e9ff70]">desain grafis</span> yang
            eksklusif.
          </p>

          {/* TOMBOL AKSI: Style Kotak sesuai Gambar */}
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="contents">
              <button className="flex-1 md:flex-none px-10 py-4 bg-[#e9ff70] text-[#001219] font-black rounded-none flex items-center justify-center gap-2 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-sm md:text-base">
                Explore Work <ArrowRight size={20} />
              </button>
            </a>

            <a href="#contact" className="contents">
              <button className="flex-1 md:flex-none px-10 py-4 bg-transparent border-2 border-white text-white font-black rounded-none flex items-center justify-center gap-2 transition-all hover:bg-white/10 active:scale-95 text-sm md:text-base shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]">
                Let's Talk
              </button>
            </a>
          </div>

          {/* SOSIAL MEDIA */}
          <div className="flex gap-4 mt-12 justify-center md:justify-start">
            <SocialIcon icon={<Instagram />} link="#" />
            <SocialIcon icon={<Camera />} link="#" title="Photography" />
            <SocialIcon icon={<Video />} link="#" title="Videography" />
            <SocialIcon icon={<Palette />} link="#" title="Design" />
          </div>
        </div>

        {/* KOLOM KANAN: VISUAL (Frame Putih Tebal sesuai Gambar) */}
        <div
          className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="relative">
            {/* Star Decor (Aksen Kuning Stabilo) */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#e9ff70] opacity-20 blur-xl rounded-full animate-pulse"></div>

            {/* Main Image Frame (Mirip Porto: Border Putih & Kaku) */}
            <div className="relative w-64 h-[400px] md:w-80 md:h-[500px] overflow-hidden border-[10px] border-white shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                alt="Visual Showcase"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#005f73]/10 mix-blend-multiply"></div>
            </div>

            {/* Floating Card: Design (Kuning Stabilo) */}
            <div className="absolute top-10 -right-8 md:-right-12 bg-[#e9ff70] border-2 border-black p-3 shadow-lg rotate-12 hover:rotate-0 transition-all duration-500 group">
              <Palette
                className="text-black group-hover:scale-110 transition-transform"
                size={28}
              />
            </div>

            {/* Floating Card: Video (Biru Teal) */}
            <div className="absolute bottom-20 -left-8 md:-left-12 bg-white p-3 shadow-lg -rotate-12 hover:rotate-0 transition-all duration-500 group">
              <Video
                className="text-[#005f73] group-hover:scale-110 transition-transform"
                size={28}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.7s infinite; }
      `}</style>
    </section>
  );
}

function SocialIcon({ icon, link, title }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="p-3 bg-white/5 border border-white/20 rounded-none text-white hover:text-[#001219] hover:bg-[#e9ff70] hover:border-transparent transition-all duration-500 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
    >
      {React.cloneElement(icon, { size: 22 })}
    </a>
  );
}
