import React from "react";

const TechStack = () => {
  const techList = [
    {
      name: "React",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      name: "JavaScript",
      image: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      name: "Tailwind",
      image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "Node.js",
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      name: "Python",
      image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    { name: "Vite", image: "https://cdn.worldvectorlogo.com/logos/vitejs.svg" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {techList.map((tech, i) => (
        <div
          key={i}
          data-aos="zoom-in"
          data-aos-delay={i * 50}
          className="group p-6 bg-[#e9ff70] border-2 border-black rounded-none flex flex-col items-center justify-center 
                     hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 
                     shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] 
                     active:shadow-none active:translate-x-[2px] active:translate-y-[2px] cursor-default"
        >
          {/* Box Logo dengan Background Putih/Terang */}
          <div className="w-16 h-16 mb-4 bg-white/40 border-2 border-black/10 flex items-center justify-center p-3 group-hover:bg-white transition-colors duration-300 shadow-inner">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <span className="text-xs font-black text-[#001219] uppercase tracking-tighter group-hover:scale-105 transition-transform">
            {tech.name}
          </span>

          {/* Label Kecil ala Desain Grafis */}
          <div className="mt-2 w-full h-[2px] bg-black/10 group-hover:bg-black/20"></div>
          <span className="mt-1 text-[8px] font-black text-[#001219]/40 uppercase tracking-widest">
            Dev Tool
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
