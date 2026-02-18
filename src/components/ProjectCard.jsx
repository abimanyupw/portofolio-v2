import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ExternalLink,
  Github,
  X,
  Code2,
  Layers,
  Globe,
  Figma,
} from "lucide-react";

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

  // Lock scroll saat modal aktif
  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails]);

  return (
    <>
      {/* CARD - STYLE BOXY & HARD SHADOW */}
      <div
        data-aos="fade-up"
        data-aos-delay={delay}
        className="group relative bg-[#001219] border-2 border-white/10 rounded-none overflow-hidden hover:border-[#e9ff70]/50 transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)]"
      >
        {/* IMAGE WITH TEAL OVERLAY */}
        <div className="h-56 overflow-hidden relative border-b-2 border-white/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001219] via-transparent to-transparent opacity-90"></div>

          {/* Tag Category (Optional) */}
          <div className="absolute top-4 left-4 bg-[#e9ff70] text-[#001219] px-3 py-1 text-[10px] font-black uppercase tracking-tighter">
            Featured Project
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-[#e9ff70] transition-colors">
            {title}
          </h3>

          <p className="text-cyan-50/70 text-sm leading-tight mb-6 line-clamp-2 font-medium">
            {desc}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-white border-2 border-white/10 rounded-none text-[10px] font-black uppercase hover:bg-[#e9ff70] hover:text-[#001219] hover:border-black transition-all"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#e9ff70] text-[#001219] border-2 border-black rounded-none text-[10px] font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                Details
              </button>
            </div>

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#001219] rounded-none text-xs font-black uppercase hover:bg-cyan-100 transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <Globe size={14} /> Live Preview
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MODAL - REDESIGNED WITH THEME */}
      {showDetails &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4">
            <div
              className="absolute inset-0 bg-[#001219]/95 backdrop-blur-md"
              onClick={() => setShowDetails(false)}
            ></div>

            <div
              data-aos="zoom-in"
              className="relative bg-[#005f73] border-t-4 sm:border-4 border-[#e9ff70] w-full max-w-lg 
                         rounded-none overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,0.5)] 
                         max-h-[90vh] flex flex-col z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black text-[#e9ff70] border-2 border-[#e9ff70] hover:bg-[#e9ff70] hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="relative h-64 sm:h-72">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005f73] via-transparent to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#e9ff70] text-xs font-black uppercase tracking-widest mb-3">
                    <Code2 size={16} />
                    <span>Project Breakdown</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
                    {title}
                  </h2>

                  <p className="text-cyan-50 leading-snug mb-8 font-medium border-l-4 border-[#e9ff70] pl-4 bg-black/10 py-2">
                    {desc}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-white font-black uppercase flex items-center gap-2 text-sm tracking-widest">
                      <Layers size={18} className="text-[#e9ff70]" />
                      Stack used
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-black text-[#e9ff70] border border-[#e9ff70]/30 rounded-none text-[10px] uppercase font-black tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {demoLink && (
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 bg-[#e9ff70] text-[#001219] font-black uppercase text-center flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                      >
                        <Globe size={20} /> Visit Site
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 bg-white text-black font-black uppercase text-center flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        <Github size={20} /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectCard;
