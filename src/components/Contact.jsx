import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { company } from "../data/siteData";

export default function Contact() {
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Perfect Engineering and Services, I am interested in your Solar EPC or LT Panel services."
  )}`;

  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    company.mapQuery
  )}&output=embed`;

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-brand-blue">
            CONTACT US
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-4xl">
            Let’s Discuss Your Requirement
          </h2>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[1.5rem] border border-blue-100 shadow-lg lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-brand-dark p-8 text-white sm:p-10">
            <h3 className="text-2xl font-black">{company.name}</h3>
            <p className="mt-4 leading-relaxed text-blue-100">
              Industrial and commercial solar panel installation, Solar EPC, and LT panel services across India.
            </p>

            <div className="mt-8 space-y-5">
              <a href={`tel:${company.phone}`} className="flex gap-4">
                <Phone className="shrink-0 text-blue-300" />
                <span>
                  <strong className="block">Call Us</strong>
                  <span className="text-blue-100">{company.phoneDisplay}</span>
                </span>
              </a>

              <a href={`mailto:${company.email}`} className="flex gap-4">
                <Mail className="shrink-0 text-blue-300" />
                <span>
                  <strong className="block">Email Us</strong>
                  <span className="break-all text-blue-100">{company.email}</span>
                </span>
              </a>

              <div className="flex gap-4">
                <MapPin className="shrink-0 text-blue-300" />
                <span>
                  <strong className="block">Office Location</strong>
                  <span className="text-blue-100">{company.address}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-brand-navy transition hover:bg-blue-100"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href={`mailto:${company.email}?subject=Inquiry for Solar EPC or LT Panel Services`}
                className="rounded-xl border border-white/25 px-4 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Send Email
              </a>
            </div>
          </div>

          <iframe
            title="Perfect Engineering and Services location map"
            src={mapEmbed}
            className="min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}