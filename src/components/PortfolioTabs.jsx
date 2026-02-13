import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Sub-Komponen
import Projects from "./Projects";
import Certificates from "./Certificates";
import TechStack from "./TechStack";

// Import Icons
import { Award, Code, Boxes, Sparkles } from "lucide-react";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#030014] text-white py-24 px-[5%] overflow-hidden font-sans"
      id="portfolio"
    >
      {/* 1. Background Glow Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 2. Header Section */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 w-fit mx-auto">
          <Sparkles size={14} />
          <span>Milestones</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
          Portfolio{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Eksplorasi perjalanan saya melalui proyek, sertifikasi, dan keahlian
          teknis. Setiap bagian mewakili langkah saya dalam pembelajaran
          berkelanjutan.
        </p>
      </div>

      {/* 3. Tab Navigation (Anti-Overflow & Swipeable) */}
      <div className="relative z-10 mb-16 px-2">
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 md:gap-4 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full max-w-fit mx-auto">
          {/* Tombol Projects */}
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm whitespace-nowrap shrink-0
              ${
                activeTab === "projects"
                  ? "bg-indigo-600/20 border border-indigo-500/50 text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Code size={18} className="shrink-0" /> Projects
          </button>

          {/* Tombol Certificates */}
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm whitespace-nowrap shrink-0
              ${
                activeTab === "certificates"
                  ? "bg-indigo-600/20 border border-indigo-500/50 text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Award size={18} className="shrink-0" /> Certificates
          </button>

          {/* Tombol Tech Stack */}
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 px-6 md:px-8 py-2.5 rounded-xl transition-all duration-300 font-semibold text-sm whitespace-nowrap shrink-0
              ${
                activeTab === "tech"
                  ? "bg-indigo-600/20 border border-indigo-500/50 text-white shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <Boxes size={18} className="shrink-0" /> Tech Stack
          </button>
        </div>
      </div>

      {/* 4. Content Area (Render Komponen berdasarkan Tab Aktif) */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {activeTab === "projects" && (
          <div key="projects-tab" data-aos="fade-up" data-aos-duration="600">
            <Projects />
          </div>
        )}

        {activeTab === "certificates" && (
          <div key="certs-tab" data-aos="fade-up" data-aos-duration="600">
            <Certificates />
          </div>
        )}

        {activeTab === "tech" && (
          <div key="tech-tab" data-aos="fade-up" data-aos-duration="600">
            <TechStack />
          </div>
        )}
      </div>

      {/* CSS Utility untuk Sembunyikan Scrollbar Navigasi */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
