import React, { useState } from "react";
import { ExternalLink, Github, X, Code2, Layers, Globe } from "lucide-react";

const ProjectCard = ({
  title,
  desc,
  image,
  delay,
  githubLink,
  demoLink,
  techStack,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="group relative bg-[#0a061e] border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
      >
        {/* Gambar Proyek */}
        <div className="h-56 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a061e] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Konten Utama */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {desc}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {/* Tombol GitHub */}
              <a
                href={githubLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
              >
                <Github size={14} /> GitHub
              </a>

              {/* Tombol Detail */}
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-white border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all"
              >
                Details
              </button>
            </div>

            {/* Tombol Live Demo (Hanya muncul jika ada linknya) */}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-xs font-bold hover:opacity-90 transition-all shadow-lg shadow-indigo-600/20"
              >
                <Globe size={14} /> Live Preview
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      {showDetails && (
        <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="absolute inset-0 bg-[#030014]/90 backdrop-blur-md"
            onClick={() => setShowDetails(false)}
          ></div>

          <div
            data-aos={window.innerWidth < 640 ? "fade-up" : "zoom-in"}
            className="relative bg-[#0a061e] border-t sm:border border-white/10 w-full max-w-2xl 
                       rounded-t-[2.5rem] sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto my-3 sm:hidden shrink-0"></div>

            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/5 text-white rounded-full border border-white/10 hover:bg-red-500/80 transition-all"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto no-scrollbar">
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <Code2 size={16} />
                  <span>Project Detail</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {title}
                </h2>

                <p className="text-slate-400 leading-relaxed mb-6">{desc}</p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-semibold flex items-center gap-2 text-sm">
                    <Layers size={18} className="text-indigo-400" />{" "}
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-slate-300 uppercase tracking-wider font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20"
                    >
                      <Globe size={20} /> Visit Live Site
                    </a>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={20} /> GitHub Code
                    </a>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="flex-1 py-4 bg-white/5 text-slate-400 font-bold rounded-2xl border border-white/5 hover:text-white transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
