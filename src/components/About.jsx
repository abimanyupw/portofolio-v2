import React from "react";
import {
  User,
  Code2,
  Rocket,
  BrainCircuit,
  Sparkles,
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react";

import { SiLaravel, SiReact, SiTailwindcss } from "react-icons/si"; // Koleksi Simple Icons (Rekomendasi)

// Warna khas Laravel
// Warna khas React

export default function About() {
  const experiences = [
    {
      company: "Freelance",
      role: "Front-End Developer",
      period: "2024 - Present",
      desc: "Mengembangkan berbagai proyek web responsif menggunakan React dan Tailwind CSS untuk klien lokal.",
    },
    {
      company: "Open Source Contributor",
      role: "Contributor",
      period: "2023 - 2024",
      desc: "Berkontribusi dalam pemeliharaan dan penambahan fitur pada berbagai repositori tools otomasi.",
    },
  ];

  const education = [
    {
      school: "SMK Negeri 1 (Contoh)",
      major: "Teknik Komputer dan Jaringan",
      period: "2023 - 2026",
      desc: "Mempelajari infrastruktur jaringan, administrasi server, dan dasar-dasar pengembangan perangkat lunak.",
    },
    {
      school: "Self-Taught / Online Courses",
      major: "Fullstack Web Development",
      period: "2023 - Present",
      desc: "Mempelajari ekosistem JavaScript modern melalui platform seperti Dicoding, Udemy, dan dokumentasi resmi.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#030014] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-16" data-aos="fade-up">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Getting to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* KOLOM KIRI: TEKS DESKRIPSI & STATS */}
          <div className="space-y-12">
            <div data-aos="fade-right">
              <h3 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <User className="text-blue-500" size={24} />
                Who Am I?
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-xl">
                Saya adalah seorang siswa{" "}
                <span className="text-white font-medium">
                  Teknik Komputer dan Jaringan
                </span>{" "}
                yang memiliki minat besar dalam membangun ekosistem web modern.
              </p>
              <p className="text-gray-400 leading-relaxed text-xl">
                Fokus utama saya saat ini adalah menciptakan pengalaman digital
                yang inovatif melalui{" "}
                <span className="text-blue-400">Laravel</span> dan{" "}
                <span className="text-indigo-400">Figma</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" data-aos="fade-up">
              <StatCard
                icon={<Rocket className="text-blue-400" />}
                val="01+"
                label="Years Learning"
              />
              <StatCard
                icon={<Code2 className="text-indigo-400" />}
                val="10+"
                label="Projects Built"
              />
              <StatCard
                icon={<SiLaravel size={30} className="text-[#FF2D20]" />}
                val="Laravel"
                label="Main Framework"
              />
              <StatCard
                icon={<Sparkles className="text-pink-400" />}
                val="Figma"
                label="UI Styling"
              />
            </div>
          </div>

          {/* KOLOM KANAN: TIMELINE (WORK & EDU) */}
          <div className="grid grid-cols-1 gap-10">
            {/* WORK EXPERIENCE */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-indigo-500" size={24} />
                Work Experience
              </h3>
              <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-6 relative">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    title={exp.role}
                    subtitle={exp.company}
                    period={exp.period}
                    desc={exp.desc}
                  />
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-500" size={24} />
                Education
              </h3>
              <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-6 relative">
                {education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    title={edu.major}
                    subtitle={edu.school}
                    period={edu.period}
                    desc={edu.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Komponen Pembantu untuk Item Timeline
function TimelineItem({ title, subtitle, period, desc }) {
  return (
    <div className="relative">
      <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] border-4 border-[#030014]"></div>
      <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all group">
        <div className="flex flex-col mb-2">
          <div className="flex justify-between items-start gap-2">
            <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
              {title}
            </h4>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-full shrink-0">
              <Calendar size={10} /> {period}
            </span>
          </div>
          <p className="text-blue-400 text-sm font-medium mt-1">{subtitle}</p>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, val, label }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 p-4 rounded-2xl transition-all hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1">
      <div className="mb-3 p-2 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-black text-white mb-0.5">{val}</h4>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
