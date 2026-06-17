"use client";

import type { ReactNode } from "react";
import { useCallback } from "react";

type MouseGradientSectionProps = {
  children: ReactNode;
  className?: string;
};

export function MouseGradientSection({ children, className }: MouseGradientSectionProps) {
  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <section className={className} onPointerMove={handlePointerMove}>
      {children}
    </section>
  );
}
