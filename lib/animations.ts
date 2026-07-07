"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options?: { delay?: number; y?: number },
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: options?.y ?? 32,
        duration: 0.7,
        ease: "power2.out",
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [ref, options?.delay, options?.y]);
}

export function useHeaderScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.classList.toggle("header-scrolled", window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

export function useShakeAnimation(
  ref: RefObject<HTMLElement | null>,
  trigger: boolean,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !trigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: 8,
          duration: 0.08,
          ease: "power1.inOut",
          repeat: 3,
          yoyo: true,
          clearProps: "x",
        },
      );
    }, el);

    return () => ctx.revert();
  }, [ref, trigger]);
}

export function useCardHover(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          y: -6,
          boxShadow: "0 24px 60px rgba(17, 36, 31, 0.14)",
          borderColor: "rgba(45, 106, 79, 0.58)",
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          y: 0,
          boxShadow: "0 18px 44px rgba(17, 36, 31, 0.06)",
          borderColor: "rgba(45, 106, 79, 0.22)",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    }, el);

    return () => ctx.revert();
  }, [ref]);
}

export function useWizardStepAnimation(
  containerRef: RefObject<HTMLElement | null>,
  stepKey: string,
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        opacity: 0,
        y: 16,
        duration: 0.42,
        ease: "power2.out",
        stagger: 0.06,
      });
    }, el);

    return () => ctx.revert();
  }, [containerRef, stepKey]);
}
