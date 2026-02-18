import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi semua kolom sebelum mengirim!");
      return;
    }

    const phoneNumber = "6285157483033"; // Sudah saya sesuaikan dengan nomor di portofoliomu
    const url =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(
        `Halo Farhan, ada pesan baru dari Portfolio!\n\n` +
          `Nama: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Pesan: ${formData.message}`,
      );

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#005f73] text-white overflow-hidden"
    >
      {/* Background Decor - Teal/Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#001219] via-[#005f73] to-[#0a9396]"></div>
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#e9ff70]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* Badge Style Porto */}
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#e9ff70] text-[#001219] text-xs font-black uppercase tracking-widest mb-6 w-fit mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
            <MessageSquare size={14} />
            <span>Connect with me</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            Hubungi{" "}
            <span className="text-[#e9ff70] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
              Saya
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* INFO KONTAK */}
          <div className="space-y-10" data-aos="fade-right">
            <div className="bg-black/20 p-8 border-l-8 border-[#e9ff70] backdrop-blur-sm">
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
                Let's Talk!
              </h3>
              <p className="text-cyan-50/80 font-medium leading-relaxed">
                Punya ide proyek atau sekadar ingin menyapa? Jangan ragu untuk
                menghubungi saya melalui formulir ini atau kontak langsung di
                bawah.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                value="farhanniel@gmail.com"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                value="Surabaya, Indonesia (PENS)"
              />
            </div>
          </div>

          {/* FORMULIR - STYLE BOXY */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleWhatsAppSend}
              className="bg-[#001219] border-4 border-black p-8 rounded-none space-y-6 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.3)]"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#e9ff70]">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-white/5 border-2 border-white/10 rounded-none px-4 py-3 focus:border-[#e9ff70] transition-all text-white outline-none font-bold"
                    placeholder="Farhan Deniel"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#e9ff70]">
                    Your Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full bg-white/5 border-2 border-white/10 rounded-none px-4 py-3 focus:border-[#e9ff70] transition-all text-white outline-none font-bold"
                    placeholder="farhanniel@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#e9ff70]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-none px-4 py-3 focus:border-[#e9ff70] transition-all text-white outline-none resize-none font-bold"
                  placeholder="Ceritakan proyek atau pesan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e9ff70] text-[#001219] font-black py-5 rounded-none transition-all flex items-center justify-center gap-2 group uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, value }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="p-4 bg-[#e9ff70] border-2 border-black rounded-none text-[#001219] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#e9ff70] font-black mb-1">
          {title}
        </p>
        <p className="text-white font-bold text-lg uppercase tracking-tight italic">
          {value}
        </p>
      </div>
    </div>
  );
}
