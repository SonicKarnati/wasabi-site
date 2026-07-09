"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { useState } from "react";
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
  isHovered,
  setTooltipIndex,
  tooltipIndex,
  itemClassName,
  frontClassName,
  backClassName,
}: {
  item: SocialItem;
  index: number;
  isHovered: boolean;
  setTooltipIndex: (val: number | null) => void;
  tooltipIndex: number | null;
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
      className={cn("relative h-10 w-10 cursor-pointer", itemClassName)}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setTooltipIndex(index)}
      onMouseLeave={() => setTooltipIndex(null)}
    >
      <AnimatePresence>
        {isHovered && tooltipIndex === index && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.94, x: "-50%" }}
            animate={{ opacity: 1, y: -48, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 8, scale: 0.94, x: "-50%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 z-50 whitespace-nowrap rounded-md bg-forest px-3 py-1.5 text-xs font-bold text-cream shadow-xl"
          >
            {item.label}
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-forest" />
          </motion.span>
        )}
      </AnimatePresence>

      <motion.span
        className="relative block h-full w-full"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 15, delay: index * 0.06 }}
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
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex items-center", className)}>
      <div
        className="group relative flex items-center justify-center gap-2 rounded-lg border border-line bg-white/60 p-3 shadow-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTooltipIndex(null);
        }}
      >
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
            isHovered={isHovered}
            setTooltipIndex={setTooltipIndex}
            tooltipIndex={tooltipIndex}
            itemClassName={itemClassName}
            frontClassName={frontClassName}
            backClassName={backClassName}
          />
        ))}
      </div>
    </div>
  );
}
