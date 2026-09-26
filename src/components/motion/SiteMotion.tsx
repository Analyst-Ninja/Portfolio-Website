"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK, MOTION_REDUCED } from "@/lib/gsap";

/**
 * Page-wide GSAP choreography driven by data attributes, so section
 * components can stay server components:
 *   [data-split]       headline split into words, masked rise on load
 *   [data-reveal]      fade + rise when scrolled into view (batched)
 *   [data-draw-line]   vertical line that scales with scroll (scrub)
 *   [data-marquee]     infinite horizontal loop of its first child
 *   [data-type-lines]  children appear one by one like terminal output
 *   [data-count]       number counts up from 0 to its value on enter
 *   [data-bar]         accent bar grows from the left on enter
 * Mount once per page, after the content.
 */
export default function SiteMotion() {
  useGSAP(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const splits: SplitText[] = [];

      document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        const split = SplitText.create(el, { type: "words", mask: "words" });
        splits.push(split);
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(split.words, {
          yPercent: 110,
          duration: 1,
          ease: "expo.out",
          stagger: 0.06,
          delay: 0.1,
        });
      });

      gsap.set("[data-reveal]", { autoAlpha: 0, y: 36 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }),
      });
      root.classList.remove("js-motion");

      document.querySelectorAll<HTMLElement>("[data-draw-line]").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: { trigger: line.parentElement, start: "top 70%", end: "bottom 60%", scrub: true },
          }
        );
      });

      document.querySelectorAll<HTMLElement>("[data-marquee]").forEach((track) => {
        const reverse = track.dataset.marquee === "reverse";
        gsap.fromTo(
          track,
          { xPercent: reverse ? -50 : 0 },
          { xPercent: reverse ? 0 : -50, duration: 40, ease: "none", repeat: -1 }
        );
      });

      document.querySelectorAll<HTMLElement>("[data-type-lines]").forEach((block) => {
        gsap.from(block.children, {
          autoAlpha: 0,
          x: -8,
          duration: 0.35,
          stagger: 0.35,
          ease: "power2.out",
          scrollTrigger: { trigger: block, start: "top 80%", once: true },
        });
      });

      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { v: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.v));
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.2, delay: i * 0.1, ease: "expo.out", scrollTrigger: { trigger: bar, start: "top 90%", once: true } }
        );
      });

      return () => {
        splits.forEach((s) => s.revert());
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = el.dataset.count ?? "";
        });
      };
    });

    mm.add(MOTION_REDUCED, () => {
      root.classList.remove("js-motion");
      gsap.set("[data-reveal], [data-split]", { autoAlpha: 1, y: 0 });
    });
  });

  return null;
}
