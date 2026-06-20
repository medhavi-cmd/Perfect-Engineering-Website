import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import useGsapReveal from "../hooks/useGsapReveal";
import { reasons, stats } from "../data/whyChooseUs";
import { scrollToSection } from "../utils/scrollToSection";

export default function WhyChooseUs() {
  const headingRef = useGsapReveal({ y: 30 });
  const contentRef = useGsapReveal({ y: 40, delay: 0.1 });

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#f5f9ff] py-16 sm:py-20 lg:py-24"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,38,92,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,38,92,0.8) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0b3d91]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black tracking-[0.16em] text-[#0b3d91] shadow-sm">
            <ShieldCheck size={15} />
            WHY CHOOSE US
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#06265c] sm:text-4xl lg:text-5xl">
            Built for reliable execution,
            <span className="block text-[#0b3d91]">
              from planning to commissioning.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Perfect Engineering and Services helps industrial and commercial
            clients move towards efficient solar energy solutions with focused
            execution, dependable support, and practical engineering.
          </p>
        </div>

        <div
          ref={contentRef}
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Reason cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#06265c] to-[#0b3d91] text-white shadow-md shadow-blue-900/20 transition duration-300 group-hover:scale-105">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#06265c]">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          {/* Trust panel */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl bg-[#06265c] p-7 text-white shadow-2xl shadow-blue-950/20 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl" />

            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-blue-200">
                <CheckCircle2 size={25} />
              </div>

              <p className="mt-6 text-xs font-black tracking-[0.18em] text-blue-300">
                ENGINEERING WITH CONFIDENCE
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                A practical partner for your solar and electrical requirements.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                We focus on understanding your site requirements and delivering
                solutions suitable for your facility, energy needs, and
                long-term operational goals.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-black text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-blue-200">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("enquiry")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-[#06265c] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100"
              >
                Discuss Your Requirement
                <CheckCircle2 size={17} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}