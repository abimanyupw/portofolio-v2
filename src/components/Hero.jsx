import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Github,
  Instagram,
  Linkedin,
  Rocket,
  Download,
} from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const jobs = [
    "Front-End Developer",
    "Network Engineer",
    "UI/UX Designer",
    "Fullstack Learner",
    "Tech Enthusiast",
    "Mobile Apps Developer",
  ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % jobs.length;
    let fullText = jobs[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, typingSpeed]);

  return (
    <section
      id="home"
      // Perbaikan: Tambahkan scroll-mt agar saat diklik navigasi tidak terpotong navbar
      // Sesuaikan pt (padding-top) agar konsisten di semua layar
      className="relative min-h-screen flex items-center justify-center bg-[#030014] overflow-hidden pt-32 md:pt-36 lg:pt-20 scroll-mt-20"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* KOLOM KIRI: TEKS & CALL TO ACTION */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="flex flex-col justify-center text-left"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <Sparkles size={14} />
            <span>Ready to Innovate</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
              Abimanyu
            </span>
          </h1>

          {/* AREA TYPEWRITER */}
          <div className="h-8 md:h-12 mb-6">
            <p className="text-xl md:text-3xl font-medium text-slate-300 border-r-4 border-indigo-500 pr-2 w-fit">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-slate-400 max-w-lg text-sm md:text-lg mb-10 leading-relaxed">
            Passionate about building modern, high-performance, and responsive
            web applications with cutting-edge technologies.
          </p>

          {/* TOMBOL AKSI */}
          <div className="flex flex-wrap gap-4">
            <a href="#project" className="contents">
              <button className="flex-1 md:flex-none px-8 py-3 md:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/25 active:scale-95 text-sm md:text-base">
                <Rocket size={20} /> View Projects
              </button>
            </a>

            <a
              href="/CV_Abimanyu.pdf"
              download="CV_Abimanyu.pdf"
              className="contents"
            >
              <button className="flex-1 md:flex-none px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 text-sm md:text-base">
                <Download size={20} /> CV
              </button>
            </a>
          </div>

          {/* SOSIAL MEDIA */}
          <div className="flex gap-6 mt-12 justify-center md:justify-start">
            <SocialIcon
              icon={<Github />}
              link="https://github.com/abimanyupw"
            />
            <SocialIcon
              icon={<Instagram />}
              link="https://instagram.com/abimanyupw_"
            />
            <SocialIcon
              icon={<Linkedin />}
              link="https://www.linkedin.com/in/abimanyu-pradipa-wisnu-101158346/"
            />
          </div>
        </div>

        {/* KOLOM KANAN: FOTO PROFIL */}
        <div
          className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative group">
            {/* Outer Glow Animation */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>

            {/* Photo Container */}
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-[#030014] overflow-hidden bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 bg-white/10 backdrop-blur-xl border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl animate-bounce">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-tighter">
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles untuk Kursor Mengetik */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
          margin-left: 2px;
          color: #6366f1;
        }
      `}</style>
    </section>
  );
}

// Sub-komponen Social Icon
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 24 })}
    </a>
  );
}
