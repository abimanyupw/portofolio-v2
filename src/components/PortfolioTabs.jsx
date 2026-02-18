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
      className="relative min-h-screen bg-[#005f73] text-white py-24 px-[5%] overflow-hidden font-sans"
      id="portfolio"
    >
      {/* 1. Background Gradient Decor (Tema Biru Gelap & Teal) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#005f73] to-[#0a9396]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#e9ff70]/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 2. Header Section */}
      <div className="text-center mb-16 relative z-10" data-aos="fade-up">
        {/* Badge Kuning Stabilo sesuai gaya Porto kamu */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#e9ff70] text-[#001219] text-xs font-black uppercase tracking-widest mb-4 w-fit mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
          <Sparkles size={14} />
          <span>Milestones</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase leading-none">
          Portfolio{" "}
          <span className="text-[#e9ff70] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)]">
            Showcase
          </span>
        </h2>

        <p className="text-cyan-50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium opacity-80 border-b-2 border-[#e9ff70]/30 pb-4">
          Eksplorasi perjalanan saya melalui proyek, sertifikasi, dan keahlian
          teknis dalam dunia visual dan teknologi.
        </p>
      </div>

      {/* 3. Tab Navigation (Style Kotak & Hard-Shadow) */}
      <div className="relative z-10 mb-16 px-2">
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-3 p-3 bg-black/20 backdrop-blur-md border-2 border-white/10 rounded-none w-full max-w-fit mx-auto shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
          {/* Nav Button Template Function */}
          {[
            { id: "projects", label: "Projects", icon: <Code size={18} /> },
            {
              id: "certificates",
              label: "Certificates",
              icon: <Award size={18} />,
            },
            { id: "tech", label: "Tech Stack", icon: <Boxes size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 md:px-10 py-3 rounded-none transition-all duration-300 font-black text-sm uppercase whitespace-nowrap shrink-0 border-2
                ${
                  activeTab === tab.id
                    ? "bg-[#e9ff70] border-black text-[#001219] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                    : "bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/20"
                }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-black/10 border-2 border-white/10 p-4 md:p-8 backdrop-blur-sm min-h-[400px]">
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
      </div>

      {/* CSS Utility */}
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
