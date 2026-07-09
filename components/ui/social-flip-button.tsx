"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SocialItem {
  letter: string;
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SocialFlipButtonProps {
  items: SocialItem[];
  className?: string;
  itemClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}

function SocialFlipNode({
  item,
  index,
  itemClassName,
  frontClassName,
  backClassName,
}: {
  item: SocialItem;
  index: number;
  itemClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}) {
  const Wrapper = (item.href ? "a" : "button") as ElementType;
  const wrapperProps = item.href
    ? { href: item.href, rel: "noopener noreferrer" }
    : { onClick: item.onClick, type: "button" };

  return (
    <Wrapper
      {...wrapperProps}
      aria-label={item.label}
      className={cn("group grid min-h-0 cursor-pointer justify-items-center gap-2", itemClassName)}
      style={{ perspective: "1000px" }}
    >
      <motion.span
        className="relative block size-11"
        animate={{ rotateY: [0, 180, 180, 360] }}
        transition={{
          duration: 4.2,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.28,
          times: [0, 0.38, 0.62, 1],
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <span
          className={cn(
            "absolute inset-0 grid place-items-center rounded-md border border-line bg-cream text-sm font-black text-forest shadow-sm",
            frontClassName,
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          {item.letter}
        </span>
        <span
          className={cn(
            "absolute inset-0 grid place-items-center rounded-md border border-terracotta bg-terracotta text-lg text-white shadow-sm",
            backClassName,
          )}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {item.icon}
        </span>
      </motion.span>
      <span className="whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.08em] text-forest/75">
        {item.label}
      </span>
    </Wrapper>
  );
}

export default function SocialFlipButton({
  items,
  className,
  itemClassName,
  frontClassName,
  backClassName,
}: SocialFlipButtonProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative flex flex-wrap items-center justify-center gap-4 rounded-lg border border-line bg-white/60 p-3 shadow-sm">
        <div className="pointer-events-none absolute -inset-px overflow-hidden rounded-lg">
          <motion.div
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-terracotta to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-wasabi to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {items.map((item, index) => (
          <SocialFlipNode
            key={`${item.label}-${index}`}
            item={item}
            index={index}
            itemClassName={itemClassName}
            frontClassName={frontClassName}
            backClassName={backClassName}
          />
        ))}
      </div>
    </div>
  );
}
