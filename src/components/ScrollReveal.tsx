"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Fades/slides each panel in as its section scrolls into view, then staggers
 * its inner list/card/row items in right after. Renders nothing itself --
 * purely wires up ScrollTriggers against the panel markup already on the page.
 *
 * Triggers off the parent `.beat` section rather than the `.panel` itself:
 * panels are `position: sticky`, and ScrollTrigger's rect measurements get
 * confused by sticky elements (their bounding rect changes as they stick),
 * so a plain block-flow ancestor is the reliable thing to measure against.
 */
export function ScrollReveal() {
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;

      const sections = gsap.utils.toArray<HTMLElement>(".beat");
      sections.forEach((section) => {
        const panel = section.querySelector<HTMLElement>(".panel");
        if (!panel) return;
        const items = panel.querySelectorAll(".stack li, .card, .prog, .rate-row");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(panel, { opacity: 0, y: 28, duration: 0.7, ease: "power2.out" });

        if (items.length) {
          tl.from(
            items,
            { opacity: 0, y: 14, duration: 0.5, stagger: 0.08, ease: "power2.out" },
            "-=0.35"
          );
        }
      });
    },
    { dependencies: [reduced] }
  );

  return null;
}
