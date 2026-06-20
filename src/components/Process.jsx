import { motion } from "framer-motion";
import { processSteps } from "../data/siteData";

export default function Process() {
  return (
    <section id="process" className="section-padding bg-brand-dark">
      <div className="container-custom px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-300">
            OUR PROCESS
          </p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            A Structured Approach to Project Execution
          </h2>
          <p className="mt-4 text-blue-100">
            From the first discussion to commissioning, every stage is planned for clarity and execution quality.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(([number, title, description], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-4xl font-black text-blue-300">{number}</p>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-sm text-blue-100">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}