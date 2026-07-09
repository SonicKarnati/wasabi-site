"use client";

import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ParallaxImage = {
  src: string;
  alt: string;
};

type Skiper30Props = {
  className?: string;
  images?: ParallaxImage[];
};

const defaultImages: ParallaxImage[] = [
  { src: "/assets/extracted/wasabi-ai-learner-cover.png", alt: "AI Learner source brochure cover" },
  { src: "/assets/extracted/wasabi-startup-event-cover.png", alt: "Startup with AI event source cover" },
  { src: "/assets/extracted/wasabi-bharat-builds-cover.png", alt: "Bharat Builds campaign source cover" },
  { src: "/assets/extracted/wasabi-shg-empowerment-cover.png", alt: "SHG empowerment source page" },
  { src: "/assets/generated/bharat-classroom-learner.png", alt: "Illustrative learner classroom visual" },
  { src: "/assets/generated/120-SM380450.jpg", alt: "Source-inspired program visual" },
  { src: "/assets/generated/14-SS271214.jpg", alt: "Source-inspired community visual" },
  { src: "/assets/extracted/wasabi-ai-learner-cover.png", alt: "AI Learner source brochure cover repeat" },
];

export function Skiper30({ className, images = defaultImages }: Skiper30Props) {
  const gallery = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const resize = () => setHeight(window.innerHeight);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, height * 0.55]);
  const y2 = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, -height * 0.42]);
  const y3 = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, height * 0.28]);

  return (
    <div ref={gallery} className={cn("relative h-[620px] overflow-hidden rounded-lg bg-forest", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(229_120_74_/_0.24),transparent_34rem)]" />
      <div className="absolute inset-0 flex gap-4 p-4 md:gap-5 md:p-5">
        <Column images={images.slice(0, 3)} y={y} />
        <Column images={images.slice(3, 6)} y={y2} className="hidden sm:flex" />
        <Column images={images.slice(5, 8)} y={y3} />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest via-forest/75 to-transparent p-6 text-cream md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cream/75">Source material in motion</p>
        <p className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
          Real program texture, still clearly provisional.
        </p>
      </div>
    </div>
  );
}

function Column({
  images,
  y,
  className,
}: {
  images: ParallaxImage[];
  y: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div className={cn("relative -top-24 flex flex-1 flex-col gap-4 md:gap-5", className)} style={{ y }}>
      {images.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="relative aspect-[3/4] min-h-64 overflow-hidden rounded-lg border border-cream/20 bg-cream/10"
        >
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 28vw, 45vw" className="object-cover" />
        </figure>
      ))}
    </motion.div>
  );
}

export default Skiper30;
