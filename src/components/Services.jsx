import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="section-padding grid-pattern bg-brand-light">
      <div className="container-custom px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-brand-blue">
            OUR SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
            Built for Serious Energy & Electrical Requirements
          </h2>
          <p className="mt-4 text-slate-600">
            Solutions designed for industrial, commercial, and institutional project needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group rounded-[1.6rem] border border-blue-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-brand-light p-4 text-brand-blue">
                    <Icon size={30} />
                  </div>
                  <ArrowUpRight className="text-brand-blue transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                <h3 className="mt-7 text-2xl font-black text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-slate-700">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#enquiry"
                  className="mt-8 inline-flex font-bold text-brand-blue hover:text-brand-navy"
                >
                  Discuss your requirement →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}