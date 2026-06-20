import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { scrollToSection } from "../utils/scrollToSection";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Process", "process"],
  ["Why Us", "why-choose-us"],
  ["Clients", "clients"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {/* Outer Card Container: Stay transparent everywhere, text adapt color dynamically if needed */}
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/20 bg-white/10 shadow-xl shadow-blue-950/5 backdrop-blur-xl lg:border-blue-100 lg:bg-white/95 lg:shadow-xl lg:shadow-blue-950/10"
            : "border-white/20 bg-white/5 shadow-none backdrop-blur-md lg:border-white/80 lg:bg-white/90 lg:shadow-lg lg:shadow-blue-950/5"
        }`}
      >
        <div className="flex h-[66px] items-center justify-between gap-3 px-3 sm:h-[72px] sm:px-5">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex min-w-0 items-center gap-2.5 text-left sm:gap-3"
            aria-label="Go to home"
          >
            <div className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-100 bg-white p-1.5 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-12 sm:w-16">
              <img
                src={logo}
                alt="Perfect Engineering and Services"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Responsive Text: White on Mobile Header layer, Dark Navy on Desktop */}
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-[12px] font-black leading-none tracking-[0.06em] text-white lg:text-[#06265c] md:text-sm">
                PERFECT ENGINEERING
              </p>

              <p className="mt-1 truncate text-[8px] font-bold tracking-[0.16em] text-blue-200 lg:text-[#0b3d91] md:text-[9px]">
                SOLAR EPC & LT PANELS
              </p>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center rounded-full border border-blue-100 bg-blue-50/70 p-1 lg:flex">
            {links.map(([label, sectionId]) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => handleNavClick(sectionId)}
                className="rounded-full px-2.5 py-2 text-[13px] font-bold text-[#06265c] transition hover:bg-white hover:text-[#0b3d91] hover:shadow-sm xl:px-3 xl:text-sm"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => handleNavClick("enquiry")}
            className="hidden shrink-0 items-center gap-2 rounded-xl bg-[#06265c] px-3.5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b3d91] hover:shadow-xl xl:px-4 xl:py-3 xl:text-sm lg:inline-flex"
          >
            <span className="hidden xl:inline">Get Quote</span>
            <span className="xl:hidden">Quote</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile / Tablet Menu Trigger Icon */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm transition hover:bg-white/20 sm:h-11 sm:w-11 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Card Panels */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-[#04142f]/35 backdrop-blur-[2px] lg:hidden"
            />

            {/* Mobile menu dropdown panel - Reverted back to clean white base */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-3 max-h-[calc(100vh-110px)] max-w-7xl overflow-y-auto rounded-2xl border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-950/15 lg:hidden"
            >
              <nav className="grid gap-1">
                {links.map(([label, sectionId], index) => (
                  <motion.button
                    key={sectionId}
                    type="button"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handleNavClick(sectionId)}
                    className="flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-[#06265c] transition hover:bg-blue-50 active:bg-blue-100"
                  >
                    {label}
                    <ArrowUpRight size={16} className="text-[#0b3d91]" />
                  </motion.button>
                ))}

                <button
                  type="button"
                  onClick={() => handleNavClick("enquiry")}
                  className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#06265c] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#0b3d91]"
                >
                  Get a Free Consultation
                  <ArrowUpRight size={17} />
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}