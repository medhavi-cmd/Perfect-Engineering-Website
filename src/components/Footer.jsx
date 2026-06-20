import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { company } from "../data/siteData";

const quickLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Our Services", "#services"],
  ["Project Process", "#process"],
  ["Why Us", "why-choose-us"],
  ["Contact Us", "#contact"],
];

const services = [
  "Industrial Solar Installation",
  "Commercial Solar Installation",
  "Turnkey Solar EPC",
  "LT Panel Services",
];

export default function Footer() {
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Perfect Engineering and Services, I am interested in your Solar EPC or LT Panel services.",
  )}`;

  return (
    <footer className="relative overflow-hidden bg-[#04142f] text-blue-100">
      {/* Decorative background effects */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-blue-300">
              START YOUR PROJECT
            </p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Looking for a reliable Solar EPC partner?
            </h2>
          </div>

          <a
            href="#enquiry"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#06265c] transition hover:-translate-y-1 hover:bg-blue-100"
          >
            Request a Site Visit
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-lg">
              <img
                src={logo}
                alt="Perfect Engineering and Services"
                className="h-full w-full scale-[1.75] object-contain"
              />
            </div>

            <div>
              <p className="font-black tracking-wide text-white">
                PERFECT ENGINEERING
              </p>
              <p className="text-xs font-semibold tracking-[0.14em] text-blue-300">
                AND SERVICES
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-blue-100">
            Industrial and commercial solar panel installation, turnkey Solar
            EPC, and LT panel services for businesses, factories, societies, and
            commercial facilities across India.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={18} className="text-blue-300" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-black tracking-[0.15em] text-white">
            QUICK LINKS
          </h3>

          <ul className="mt-5 space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-blue-100 transition hover:pl-1 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-black tracking-[0.15em] text-white">
            SERVICES
          </h3>

          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li
                key={service}
                className="text-sm leading-relaxed text-blue-100"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-black tracking-[0.15em] text-white">
            CONTACT
          </h3>

          <div className="mt-5 space-y-4 text-sm">
            <a
              href={`tel:${company.phone}`}
              className="flex gap-3 transition hover:text-white"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-blue-300" />
              <span>{company.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex gap-3 transition hover:text-white"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-blue-300" />
              <span className="break-all">{company.email}</span>
            </a>

            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-blue-300" />
              <span className="leading-relaxed">
                Bhiwadi, Rajasthan
                <br />
                Serving Pan India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs text-blue-300 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Perfect Engineering and Services. All
            rights reserved.
          </p>

          <p className="text-blue-300/80">
            Industrial Solar EPC • Commercial Solar • LT Panel Services
          </p>
        </div>
      </div>
    </footer>
  );
}
