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
        scrolled ? "top-0" : "top-2"
      }`}
    >
      {/* NAVBAR CONTAINER - STYLE BOXY */}
      <div
        className={`max-w-6xl mx-auto rounded-none border-2 transition-all duration-300 relative z-[1001] ${
          scrolled || isOpen
            ? "bg-[#001219]/90 backdrop-blur-xl border-[#e9ff70]/50 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] py-2 px-6"
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex justify-between items-center">
          <a href="#home" className="group">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#e9ff70] uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
              FARHAN DENIEL
            </h1>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-[#e9ff70] transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e9ff70] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2 bg-[#e9ff70] border-2 border-black text-[#001219] text-xs font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                Hire Me
              </a>
            </div>

            <button
              className="md:hidden text-[#e9ff70] p-2 bg-black/20 border-2 border-[#e9ff70]/20 hover:border-[#e9ff70] transition-all relative z-[1002]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - BRUTALIST STYLE */}
      <div
        className={`fixed inset-0 bg-[#005f73]/95 backdrop-blur-3xl md:hidden transition-all duration-500 z-[1000] ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full pt-28 px-8 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full py-5 px-8 rounded-none bg-[#001219] border-2 border-[#e9ff70]/30 text-lg font-black text-white flex items-center gap-5 transition-all active:scale-95 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] uppercase tracking-tighter"
            >
              <span className="p-2 bg-[#e9ff70] text-[#001219] rounded-none">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full mt-6 py-5 bg-[#e9ff70] text-[#001219] text-center font-black uppercase tracking-widest border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
