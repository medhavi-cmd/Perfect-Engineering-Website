import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid items-center gap-12 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-brand-light" />
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85"
            alt="Industrial solar panel installation"
            className="relative h-[430px] w-full rounded-[1.5rem] object-cover shadow-xl"
          />
          <div className="absolute -bottom-5 -right-3 rounded-2xl bg-brand-navy p-5 text-white shadow-xl sm:right-6">
            <p className="text-3xl font-black">3+</p>
            <p className="text-sm text-blue-100">Years of Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-bold tracking-[0.2em] text-brand-blue">
            ABOUT US
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-brand-navy sm:text-4xl">
            Engineering Reliable Energy Solutions
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Perfect Engineering and Services provides industrial and commercial
            solar panel installation, turnkey Solar EPC execution, and LT panel
            services. Based in Bhiwadi, Rajasthan, we support project
            requirements across India.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our approach is focused on practical engineering, safe execution,
            quality installation, and dependable project coordination.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "Industrial & Commercial Focus",
              "Quality Installation Approach",
              "Pan India Project Support",
              "End-to-End Execution",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-semibold text-brand-navy">
                <CheckCircle2 className="text-brand-blue" size={20} />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}