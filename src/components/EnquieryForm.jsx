import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
  User,
  XCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  city: "",
  message: "",
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    // Build Form Data from controlled state to ensure accuracy
    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });

    dataToSend.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );
    dataToSend.append(
      "subject",
      "New Enquiry from Perfect Engineering Website"
    );
    dataToSend.append("from_name", "Perfect Engineering Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusMessage("Your message has been sent successfully! Our team will contact you soon.");
        setFormData(initialForm); // Clears the controlled input states
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
        setStatusMessage(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus("error");
      setStatusMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-light/50";

  return (
    <section
      id="enquiry"
      className="scroll-mt-20 bg-slate-50 py-16 sm:scroll-mt-28 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl bg-brand-navy p-6 text-white sm:p-8 lg:p-10 shadow-xl shadow-brand-navy/10"
          >
            <p className="text-sm font-bold tracking-[0.16em] text-brand-light/80">
              REQUEST A SITE VISIT
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Let’s discuss your solar requirement.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-brand-light/70 sm:text-base">
              Share your project details and our team will get in touch to
              understand your power requirement, site conditions, and suitable
              Solar EPC or LT panel solution.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
                  <Phone size={19} className="text-brand-light" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-light/60">
                    Call Us
                  </p>
                  <a
                    href="tel:+918077413551"
                    className="mt-1 block font-bold text-white transition hover:text-brand-light"
                  >
                    +91 80774 13551
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
                  <Mail size={19} className="text-brand-light" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-light/60">
                    Email Us
                  </p>
                  <a
                    href="mailto:perfectengineeringservices.7@gmail.com"
                    className="mt-1 block break-all font-bold text-white transition hover:text-brand-light"
                  >
                    perfectengineeringservices.7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
                  <Building2 size={19} className="text-brand-light" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-light/60">
                    Service Coverage
                  </p>
                  <p className="mt-1 font-bold text-white">Pan India</p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:text-left">
              <p className="text-sm font-semibold text-brand-light/90">
                Industrial • Commercial • Solar EPC • LT Panels
              </p>
            </div>
          </motion.div>

          {/* Right form card column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-bold tracking-[0.14em] text-brand-blue">
                GET A QUOTE
              </p>
              <h3 className="mt-2 text-2xl font-black text-brand-navy sm:text-3xl">
                Send us your enquiry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                Fill in the details below. We will contact you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot anti-spam field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`${inputClass} pl-11`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Factory name"
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`${inputClass} pl-11`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`${inputClass} pl-11`}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Industrial Solar Installation">
                      Industrial Solar Installation
                    </option>
                    <option value="Commercial Solar Installation">
                      Commercial Solar Installation
                    </option>
                    <option value="Turnkey Solar EPC">
                      Turnkey Solar EPC
                    </option>
                    <option value="LT Panel Services">LT Panel Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Project City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bhiwadi, Haryana"
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Tell us about your requirement
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Example: We need a rooftop solar system for our factory. Please contact us for a site survey."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status Alert Dynamic Notification Box */}
              {status !== "idle" && (
                <div
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm font-medium transition-all ${
                    status === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                  ) : (
                    <XCircle size={20} className="mt-0.5 shrink-0" />
                  )}
                  <p>{statusMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-4 font-bold text-white shadow-lg shadow-brand-navy/15 transition-all hover:-translate-y-0.5 hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-relaxed text-slate-400">
                By submitting this form, you agree to be contacted by Perfect
                Engineering and Services regarding your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}