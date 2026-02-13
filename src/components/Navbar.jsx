import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code2, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={16} /> },
    { name: "About", href: "#about", icon: <User size={16} /> },
    { name: "Project", href: "#project", icon: <Code2 size={16} /> },
    { name: "Contact", href: "#contact", icon: <MessageSquare size={16} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-[999] transition-all duration-300 px-3 py-2 md:px-10 ${
        scrolled ? "top-0" : "top-1"
      }`}
    >
      {/* NAVBAR CONTAINER */}
      <div
        className={`max-w-6xl mx-auto rounded-xl md:rounded-2xl border border-white/10 transition-all duration-300 relative z-[1001] ${
          scrolled || isOpen
            ? "bg-[#030014]/80 backdrop-blur-xl shadow-2xl py-2 px-4"
            : "bg-transparent py-3 px-5"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#home" className="group">
            <h1 className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              ABIMANYU
            </h1>
          </a>

          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-5 py-2 bg-indigo-600/10 border border-indigo-500/50 text-indigo-400 text-xs font-bold rounded-xl"
              >
                Hire Me
              </a>
            </div>

            <button
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors relative z-[1002]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#030014]/98 backdrop-blur-3xl md:hidden transition-all duration-500 z-[1000] ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Perubahan di sini: justify-start dan pt-24 untuk merapatkan jarak */}
        <div className="flex flex-col items-center justify-start h-full pt-24 px-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full max-w-sm py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-lg font-bold text-white flex items-center gap-4 transition-all active:scale-95"
            >
              <span className="p-2 bg-indigo-500/10 rounded-xl text-indigo-500">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-[240px] mt-4 py-4 bg-indigo-600 text-white text-center font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
