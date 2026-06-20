import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: "one" | "two" | "three";
};

export function ScrollReveal({ children, className = "", delay }: ScrollRevealProps) {
  return (
    <div className={`design-x-reveal ${delay ? `design-x-delay-${delay}` : ""} ${className}`}>
      {children}
    </div>
  );
}
