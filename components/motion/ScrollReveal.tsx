"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { useScrollReveal } from "@/lib/animations";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
  id?: string;
};

export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  delay,
  y,
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { delay, y });

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
