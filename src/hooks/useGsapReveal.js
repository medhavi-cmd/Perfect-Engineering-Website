import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapReveal(options = {}) {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: options.y ?? 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.75,
          ease: options.ease ?? "power3.out",
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: element,
            start: options.start ?? "top 86%",
            once: true,
          },
        }
      );
    }, element);

    return () => context.revert();
  }, [
    options.delay,
    options.duration,
    options.ease,
    options.start,
    options.y,
  ]);

  return elementRef;
}