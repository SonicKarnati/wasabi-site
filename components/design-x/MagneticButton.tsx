"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useCallback, useRef } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = useCallback((event: React.PointerEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate3d(${x * 0.1}px, ${y * 0.16}px, 0)`;
  }, []);

  const handleLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return (
    <Link
      ref={ref}
      className={`design-x-magnetic design-x-magnetic-${variant} ${className}`}
      href={href}
      onPointerLeave={handleLeave}
      onPointerMove={handleMove}
      {...props}
    >
      <span>{children}</span>
    </Link>
  );
}
