import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  X,
  ExternalLink,
  Calendar,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock scroll saat modal aktif
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCert]);

  const certificateList = [
    {
      title: "Belajar dasar pemrograman web",
      issuer: "Dicoding Indonesia",
      image: "certif/dicoding-dasar-web.jpg",
      date: "Nov 2024 - Nov 2027",
      description: "Menyelesaikan kelas belajar dasar pemrograman web.",
    },
    {
      title: "Belajar Membuat aplikasi Flutter Pemula",
      issuer: "Dicoding Indonesia",
      image: "certif/dicoding-fluuterpemula.jpg",
      date: "Des 2025 - Des 2028",
      description:
        "Menyelesaikan kelas belajar membuat aplikasi flutter pemula.",
    },
    {
      title: "Belajar dasar pemrograman javascript",
      issuer: "Dicoding Indonesia",
      image: "certif/dicoding-javascript.jpg",
      date: "Des 2024 - Des 2027",
      description: "Menyelesaikan kelas belajar dasar pemrograman javascript.",
    },
    {
      title: "Belajar backend pemula dengan javascript",
      issuer: "Dicoding Indonesia",
      image: "certif/dicoding-javascript2.jpg",
      date: "Nov 2024 - Nov 2027",
      description:
        "Menyelesaikan kelas belajar backend pemula dengan javascript.",
    },
    {
      title: "Belajar Membuat Front-End Web Untuk Pemula",
      issuer: "Dicoding Indonesia",
      image: "certif/dicoding-frontend.jpg",
      date: "Jan 2025 - Jan 2028",
      description: "Menyelesaikan kelas belajar Front-End Web untuk Pemula.",
    },
    {
      title: "Cisco Dasar",
      issuer: "ID-Networkers",
      image: "certif/idn-cisco.jpg",
      date: "Jan 2025 - Jan 2028",
      description: "Menyelesaikan kursus online Cisco Dasar.",
    },
    {
      title: "Jaringan Komputer Dasar",
      issuer: "ID-Networkers",
      image: "certif/idn-jaringan.jpg",
      date: "Jan 2025 - Jan 2028",
      description: "Menyelesaikan kursus online Jaringan Komputer Dasar.",
    },
    {
      title: "Mikrotik Dasar",
      issuer: "ID-Networkers",
      image: "certif/idn-mikrotik.jpg",
      date: "Jan 2025 - Jan 2028",
      description: "Menyelesaikan kursus online Mikrotik Dasar.",
    },
    {
      title: "Front-End HTML",
      issuer: "Myskill",
      image: "certif/myskill-frontend.jpg",
      date: "May 2025",
      description: "Menyelesaikan kursus online Front-End HTML.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* GRID DAFTAR SERTIFIKAT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateList.map((c, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            onClick={() => setSelectedCert(c)}
            className="group relative flex flex-col bg-[#001219] border-2 border-white/10 rounded-none overflow-hidden hover:border-[#e9ff70]/50 transition-all duration-500 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)]"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full bg-white/5 p-4 border-b-2 border-white/10">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-contain grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001219] via-transparent to-transparent opacity-40"></div>

              {/* Verified Badge - Style Porto */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#e9ff70] text-[#001219] text-[10px] font-black uppercase tracking-tighter border border-black">
                  <ShieldCheck size={12} />
                  Verified
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-[#e9ff70]/10 text-[#e9ff70] border border-[#e9ff70]/20">
                  <Award size={16} />
                </div>
                <span className="text-[10px] font-black text-cyan-200 uppercase tracking-widest">
                  {c.issuer}
                </span>
              </div>

              <h3 className="text-lg font-black text-white mb-4 group-hover:text-[#e9ff70] transition-colors leading-tight uppercase tracking-tighter">
                {c.title}
              </h3>

              <div className="mt-auto flex items-center justify-between pt-4 border-t-2 border-white/5">
                <div className="flex items-center gap-2 text-cyan-50/60 text-[10px] font-bold uppercase">
                  <Calendar size={14} className="text-[#e9ff70]" />
                  {c.date}
                </div>
                <div className="text-[#e9ff70] group-hover:scale-110 transition-transform">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL (STYLE BOXY) */}
      {selectedCert &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div
              className="absolute inset-0 bg-[#001219]/95 backdrop-blur-md transition-opacity"
              onClick={() => setSelectedCert(null)}
            ></div>

            <div
              data-aos="zoom-in"
              className="relative bg-[#005f73] border-t-4 sm:border-4 border-[#e9ff70] w-full max-w-lg 
                         rounded-none overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] 
                         max-h-[90vh] flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black text-[#e9ff70] border-2 border-[#e9ff70] hover:bg-[#e9ff70] hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="w-full bg-white/5 p-6 border-b-2 border-white/10">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-80 object-contain shadow-2xl border-4 border-white"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#e9ff70] text-xs font-black uppercase tracking-widest mb-3">
                    <Sparkles size={16} />
                    <span>Certificate Credentials</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-none uppercase tracking-tighter italic">
                    {selectedCert.title}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-4 bg-black/20 border-2 border-white/10">
                      <Calendar size={20} className="text-[#e9ff70]" />
                      <span className="text-xs text-white font-black uppercase tracking-tighter">
                        {selectedCert.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-black/20 border-2 border-white/10">
                      <Award size={20} className="text-[#e9ff70]" />
                      <span className="text-xs text-white font-black uppercase tracking-tighter">
                        {selectedCert.issuer}
                      </span>
                    </div>
                  </div>

                  <p className="text-cyan-50 text-sm leading-snug font-medium border-l-4 border-[#e9ff70] pl-4 bg-black/10 py-3 mb-8">
                    "{selectedCert.description}"
                  </p>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-full py-4 bg-[#e9ff70] text-[#001219] font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all border-2 border-black"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default Certificates;
