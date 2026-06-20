import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom px-5">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[0.2em] text-brand-blue">
              PROJECT EXPERIENCE
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
              Delivering Solutions Across Industrial & Commercial Sites
            </h2>
          </div>
          <a href="#enquiry" className="font-bold text-brand-blue hover:text-brand-navy">
            Discuss Your Project →
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-navy">
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-brand-navy">{project.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={16} className="text-brand-blue" />
                  {project.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Project details and capacities can be updated after client confirmation.
        </p>
      </div>
    </section>
  );
}