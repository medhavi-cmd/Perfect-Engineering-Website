import { motion } from "framer-motion";
import { ArrowUpRight, Building2, MapPin, ShieldCheck } from "lucide-react";
import clients from "../data/clients";
import { scrollToSection } from "../utils/scrollToSection";

function ClientMark({ client }) {
  if (client.logo) {
    return (
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-9 max-w-[130px] object-contain sm:h-10"
      />
    );
  }

  const initials = client.name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06265c] text-xs font-black tracking-wide text-white shadow-md shadow-blue-900/20">
      {initials}
    </div>
  );
}

function ClientItem({ client }) {
  return (
    <article className="flex min-w-[285px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-md sm:min-w-[340px] sm:px-5">
      <ClientMark client={client} />

      <div className="min-w-0">
        <h3 className="truncate text-sm font-black text-white sm:text-base">
          {client.name}
        </h3>

        <div className="mt-1 flex items-center gap-1.5 text-xs text-blue-100">
          <MapPin size={13} className="shrink-0 text-blue-300" />
          <span className="truncate">{client.location}</span>
        </div>
      </div>

      <div className="ml-auto hidden rounded-lg border border-blue-200/20 bg-blue-300/10 px-2.5 py-1 text-[10px] font-bold text-blue-100 sm:block">
        {client.service}
      </div>
    </article>
  );
}

export default function Clients() {
  const loopClients = [...clients, ...clients, ...clients];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#06265c] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-100">
              <ShieldCheck size={15} className="text-blue-300" />
              TRUSTED PROJECT PARTNERS
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              Trusted by businesses
              <span className="block text-blue-300">that value reliable execution.</span>
            </h2>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-6">
            <p className="text-sm leading-relaxed text-blue-100">
              We work with industrial facilities, commercial businesses, and
              residential societies to deliver dependable solar EPC and LT panel
              solutions across India.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("enquiry")}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-blue-200"
            >
              Discuss your project
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#06265c] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#06265c] to-transparent sm:w-24" />

          <motion.div
            className="flex w-max gap-4 py-2 sm:gap-5"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: Math.max(clients.length * 7, 20),
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loopClients.map((client, index) => (
              <ClientItem key={`${client.name}-${index}`} client={client} />
            ))}
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="border-l-2 border-blue-300 pl-4">
            <p className="text-2xl font-black text-white">25+</p>
            <p className="mt-1 text-xs font-semibold text-blue-200">
              Projects completed
            </p>
          </div>

          <div className="border-l-2 border-blue-300 pl-4">
            <p className="text-2xl font-black text-white">3+ Years</p>
            <p className="mt-1 text-xs font-semibold text-blue-200">
              Industry experience
            </p>
          </div>

          <div className="border-l-2 border-blue-300 pl-4">
            <p className="text-2xl font-black text-white">Pan India</p>
            <p className="mt-1 text-xs font-semibold text-blue-200">
              Service coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}