import React, { useState } from "react";
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

  const certificateList = [
    {
      title: "Fullstack Web Developer",
      issuer: "Dicoding Indonesia",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      date: "Mei 2025",
      description:
        "Menyelesaikan program intensif pengembangan web dari frontend hingga backend menggunakan ekosistem JavaScript modern (React, Node.js, dan database SQL/NoSQL).",
    },
    {
      title: "React Specialist",
      issuer: "Meta (Coursera)",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      date: "Desember 2024",
      description:
        "Sertifikasi profesional yang mencakup pemahaman mendalam tentang React Hooks, State Management (Redux/Context), serta optimasi performa dan keamanan aplikasi web.",
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
            className="group relative flex flex-col bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-500 cursor-pointer hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck size={12} />
                  Verified
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Award size={16} />
                </div>
                <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                  {c.issuer}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-snug">
                {c.title}
              </h3>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Calendar size={14} className="text-indigo-500" />
                  {c.date}
                </div>
                <div className="text-indigo-500 group-hover:translate-x-1 transition-transform duration-300">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* MODAL DETAIL */}
      {selectedCert && (
        <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4 shadow-2xl">
          <div
            className="absolute inset-0 bg-[#030014]/90 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedCert(null)}
          ></div>

          <div
            data-aos={window.innerWidth < 640 ? "fade-up" : "zoom-in"}
            className="relative bg-[#0a061e] border-t sm:border border-white/10 w-full max-w-2xl 
                       rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl 
                       max-h-[90vh] flex flex-col"
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto my-3 sm:hidden shrink-0"></div>

            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/5 text-white rounded-full 
                         hover:bg-red-500/80 transition-all border border-white/10 shadow-xl"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto no-scrollbar">
              <div className="w-full h-56 sm:h-80 overflow-hidden relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a061e] via-transparent to-transparent"></div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                  <Sparkles size={16} />
                  <span>Certificate Detail</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                  {selectedCert.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <Calendar size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold">
                        Issued on
                      </span>
                      <span className="text-sm text-white font-medium">
                        {selectedCert.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <ExternalLink size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase font-bold">
                        Issuer
                      </span>
                      <span className="text-sm text-white font-medium">
                        {selectedCert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-semibold text-sm flex items-center gap-2 underline underline-offset-8 decoration-indigo-500/50">
                    About this certification
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed italic bg-white/5 p-5 rounded-2xl border border-white/5 border-l-4 border-l-indigo-500">
                    "{selectedCert.description}"
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="mt-10 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-600/30"
                >
                  Back to Certificates
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Certificates;
