import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "../data/siteData";

export default function Hero() {
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Perfect Engineering and Services, I am interested in your Industrial or Commercial Solar EPC and LT Panel services."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-brand-dark pt-20"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=90')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 opacity-20 grid-pattern" />

      <div className="container-custom relative z-10 flex min-h-[calc(100vh-80px)] items-center px-5">
        <div className="max-w-3xl py-20 sm:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-100 backdrop-blur sm:text-sm"
          >
            INDUSTRIAL • COMMERCIAL • PAN INDIA
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gradient text-4xl font-black leading-tight sm:text-5xl lg:text-7xl"
          >
            Industrial & Commercial Solar EPC Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-blue-50 sm:text-xl"
          >
            Solar panel installation, turnkey Solar EPC, and LT panel services
            engineered for industries, businesses, societies, and commercial
            facilities across India.
          </motion.p>

          {/* Action Buttons: Hidden on mobile (hidden), flexible row from small screens up (sm:flex) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 hidden flex-wrap gap-4 sm:flex"
          >
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-brand-navy transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Request a Site Visit <ArrowRight size={18} />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
            >
              <MessageCircle size={19} /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Statistics Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-brand-dark/70 backdrop-blur">
        <div className="container-custom grid grid-cols-1 divide-y divide-white/10 px-5 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["3+", "Years of Experience"],
            ["25+", "Projects Completed"],
            ["Pan India", "Service Coverage"],
          ].map(([number, label]) => (
            <div key={label} className="px-6 py-4 text-center sm:py-5">
              <p className="text-xl font-black sm:text-2xl">{number}</p>
              <p className="mt-0.5 text-xs text-blue-100 sm:mt-1 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}