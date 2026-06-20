import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-brand-light py-10">
      <div className="container-custom grid gap-5 px-5 md:grid-cols-3">
        {[
          ["Industrial Focus", "Solutions built for factories, businesses and commercial facilities."],
          ["Turnkey Execution", "From site survey to installation, testing and commissioning."],
          ["Pan India Support", "Serving project requirements across India."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="stat-card rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-black text-brand-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}