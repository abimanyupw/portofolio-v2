import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "Modern portfolio built with React & Tailwind CSS for high performance.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      githubLink: "https://github.com/Abimanyu/aritmatika-solver",
      demoLink: "https://demo-anda.com",
      techStack: ["React", "Tailwind", "Framer"],
    },
    {
      title: "E-Commerce App",
      desc: "A full-featured online store with payment gateway integration.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
      githubLink: "https://github.com/Abimanyu/aritmatika-solver",
      techStack: ["NextJS", "Stripe", "Supabase"],
    },
    {
      title: "Admin Dashboard",
      desc: "Comprehensive analytics dashboard with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=500&q=80",
      githubLink: "https://github.com/Abimanyu/aritmatika-solver", // Link github kamu
      techStack: ["React", "Tailwind", "Python"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} delay={index * 150} />
      ))}
    </div>
  );
};

export default Projects;
