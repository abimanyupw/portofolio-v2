import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, Share2 } from "lucide-react";

export default function Contact() {
  // State untuk menyimpan input form
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

    // Validasi: Pastikan semua kolom terisi
    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi semua kolom sebelum mengirim!");
      return;
    }

    // Konfigurasi WhatsApp
    const phoneNumber = "6212345678"; // GANTI dengan nomor WA Anda (awali dengan 62)
    const url =
      `https://wa.me/${phoneNumber}?text=` +
      encodeURIComponent(
        `Halo, ada pesan baru dari Portfolio!\n\n` +
          `Nama: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Pesan: ${formData.message}`,
      );

    // Buka WhatsApp di tab baru
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#030014] text-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Saya
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* INFO KONTAK */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MessageSquare className="text-indigo-500" /> Let's Talk
            </h3>
            <div className="space-y-6">
              <ContactInfo icon={<Mail />} title="Email" value="@gmail.com" />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                value="Indonesia"
              />
            </div>
          </div>

          {/* FORMULIR */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleWhatsAppSend}
              className="bg-white/5 backdrop-blur-xl border w-full border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-400">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 transition-all text-white outline-none"
                    placeholder="Abimanyu"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 transition-all text-white outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 transition-all text-white outline-none resize-none"
                  placeholder="Tulis pesan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
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
      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">
          {title}
        </p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}
