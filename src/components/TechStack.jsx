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
          className="group p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300"
        >
          <img
            src={tech.image}
            alt={tech.name}
            className="w-12 h-12 mb-3 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
