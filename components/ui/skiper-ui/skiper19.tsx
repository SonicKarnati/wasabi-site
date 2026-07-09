"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Skiper19Props = {
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: string[];
};

const defaultSteps = ["Access", "Practice", "Output", "Proof"];

export function Skiper19({
  className,
  eyebrow = "Capability path",
  title = "Confidence is built one visible output at a time.",
  description = "A scroll-drawn path turns the Wasabi model into motion: exposure becomes practice, practice becomes work someone can show, and proof remains labeled.",
  steps = defaultSteps,
}: Skiper19Props) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.82], [0, 1]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      <div className="absolute inset-0 -z-10 bg-cream/70" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 leading-7 text-ink/80">{description}</p>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-line bg-white/55 p-6 shadow-sm">
          <svg
            viewBox="0 0 720 420"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="A scroll-drawn path connecting Wasabi capability stages"
          >
            <path
              d="M72 308 C 166 110, 264 96, 354 214 S 546 358, 648 118"
              fill="none"
              stroke="rgb(45 106 79 / 0.16)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <motion.path
              d="M72 308 C 166 110, 264 96, 354 214 S 546 358, 648 118"
              fill="none"
              stroke="#e5784a"
              strokeWidth="10"
              strokeLinecap="round"
              style={reducedMotion ? undefined : { pathLength }}
            />
          </svg>

          <div className="relative grid min-h-[368px] grid-cols-2 gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className={cn(
                  "flex h-32 flex-col justify-between rounded-lg border border-line bg-cream/85 p-4 shadow-sm",
                  index % 2 === 0 ? "self-end" : "self-start",
                )}
              >
                <span className="grid size-9 place-items-center rounded-full bg-wasabi text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-display text-2xl font-semibold leading-tight text-forest">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skiper19;
