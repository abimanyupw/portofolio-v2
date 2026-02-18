import React from "react";
import {
  User,
  Camera,
  Video,
  Palette,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "Abimanyu Studio",
      role: "Lead Photographer",
      period: "2024 - Present",
      desc: "Menangani dokumentasi pernikahan, event korporat, dan photoshoot produk komersial dengan gaya sinematik.",
    },
    {
      company: "Creative Media ID",
      role: "Video Editor & Motion",
      period: "2023 - 2024",
      desc: "Bertanggung jawab atas proses post-production video promosi sosial media dan color grading.",
    },
  ];

  const education = [
    {
      school: "Politeknik Elektronika Negeri Surabaya",
      major: "Telecommunication Engineering",
      period: "2025 - Present",
      desc: "Mendalami teknologi komunikasi yang mendukung transmisi data media digital kualitas tinggi.",
    },
    {
      school: "BuildWithAngga / Dicoding",
      major: "UI/UX & Visual Design",
      period: "2023 - 2024",
      desc: "Sertifikasi dalam desain antarmuka pengguna dan prinsip estetika visual modern.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-[#005f73] text-white overflow-hidden"
    >
      {/* Background Gradient Ornaments (Teal & Dark) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#001219] via-[#005f73] to-[#0a9396]"></div>
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* KOLOM KIRI: IMAGE DENGAN STYLE PORTO (Border Putih Tebal) */}
          <div className="relative group" data-aos="fade-right">
            <div className="relative z-10 overflow-hidden border-[12px] border-white rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="My Creative Process"
                className="w-full h-[500px] object-cover scale-110 group-hover:scale-100 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001219] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Badge Pengalaman (Kuning Stabilo) */}
            <div className="absolute top-10 -left-6 bg-[#e9ff70] border-2 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-float z-20">
              <p className="text-3xl font-black text-[#001219]">2+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#001219]">
                Years Experience
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: TEXT CONTENT */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#e9ff70] text-[#001219] text-xs font-black uppercase tracking-widest w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <User size={14} />
              <span>Behind The Lens</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-[1.1] uppercase">
              Visual Storyteller <br />
              <span className="text-[#e9ff70] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)]">
                & Art Director.
              </span>
            </h2>

            <p className="text-cyan-50 text-lg leading-relaxed font-medium bg-black/10 p-6 border-l-4 border-[#e9ff70] backdrop-blur-sm">
              Halo! Saya{" "}
              <span className="text-[#e9ff70] font-bold">Farhan Deniel</span>,
              seorang kreator visual yang percaya bahwa setiap momen memiliki
              cerita unik. Saya menggabungkan teknik fotografi profesional
              dengan desain grafis modern untuk menciptakan karya yang ikonik.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                icon={<Camera className="text-[#001219]" />}
                title="Photography"
                label="Shutter Expert"
              />
              <SkillCard
                icon={<Video className="text-[#001219]" />}
                title="Videography"
                label="Storytelling"
              />
              <SkillCard
                icon={<Palette className="text-[#001219]" />}
                title="Graphic Design"
                label="Visual Arts"
              />
              <SkillCard
                icon={<Award className="text-[#001219]" />}
                title="Post Production"
                label="Color Grading"
              />
            </div>
          </div>
        </div>

        {/* TIMELINE SECTION (Style Kotak & Hard Shadow) */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* EXPERIENCE */}
          <div
            className="bg-white/5 border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 uppercase text-[#e9ff70]">
              <Briefcase size={24} /> Journey So Far
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#e9ff70]/30">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute left-0 top-2 w-[24px] h-[24px] bg-[#e9ff70] border-4 border-[#005f73] rounded-full z-10"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-white uppercase group-hover:text-[#e9ff70] transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-[10px] bg-white/10 px-2 py-1 font-mono text-cyan-200">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#e9ff70] text-xs font-bold mb-2 uppercase italic">
                    {exp.company}
                  </p>
                  <p className="text-cyan-50 text-sm leading-relaxed opacity-80 font-medium">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div
            className="bg-white/5 border-2 border-white/20 p-8 md:p-12 backdrop-blur-sm shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 uppercase text-[#e9ff70]">
              <GraduationCap size={24} /> Knowledge
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#e9ff70]/30">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute left-0 top-2 w-[24px] h-[24px] bg-[#e9ff70] border-4 border-[#005f73] rounded-full z-10"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-white uppercase group-hover:text-[#e9ff70] transition-colors">
                      {edu.major}
                    </h4>
                    <span className="text-[10px] bg-white/10 px-2 py-1 font-mono text-cyan-200">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[#e9ff70] text-xs font-bold mb-2 uppercase italic">
                    {edu.school}
                  </p>
                  <p className="text-cyan-50 text-sm leading-relaxed opacity-80 font-medium">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function SkillCard({ icon, title, label }) {
  return (
    <div className="p-4 bg-[#e9ff70] border-2 border-black hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group cursor-default">
      <div className="mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-sm font-black text-[#001219] mb-0.5 uppercase tracking-tighter">
        {title}
      </h4>
      <p className="text-[10px] text-[#001219]/60 uppercase tracking-widest font-black">
        {label}
      </p>
    </div>
  );
}
