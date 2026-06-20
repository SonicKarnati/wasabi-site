"use client";

import type { ReactNode } from "react";
import { useCallback } from "react";

type MotionShellProps = {
  children: ReactNode;
};

export function MotionShell({ children }: MotionShellProps) {
  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--design-x-cursor-x", `${x}%`);
    target.style.setProperty("--design-x-cursor-y", `${y}%`);
  }, []);

  return (
    <div
      className="design-x-shell"
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
}
