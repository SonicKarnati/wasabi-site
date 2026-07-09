"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface KineticTextLoaderProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export function KineticTextLoader({ className, text = "Building", ...props }: KineticTextLoaderProps) {
  const letters = text.split("");

  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden", className)} {...props}>
      <style>{`
        @keyframes ktl-dotMove {
          0%, 100% { transform: translate(-0.15em, -0.2em) scale(1); }
          50% { transform: translate(0.15em, 0.12em) scale(1.35); }
        }
        @keyframes ktl-letterStretch {
          0%, 100% { transform: scaleY(0.72); }
          30% { transform: scaleY(1.18); }
          56% { transform: scaleY(0.92); }
        }
      `}</style>
      <p
        className="relative m-0 whitespace-nowrap font-display text-5xl font-semibold leading-none text-cream md:text-7xl"
        aria-label={text}
      >
        {letters.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="relative inline-block"
            style={{ animation: index % 3 === 1 ? "ktl-letterStretch 1800ms ease-in-out infinite" : undefined }}
          >
            {char}
            {index === Math.floor(letters.length / 2) ? (
              <span
                className="absolute right-[-0.18em] top-[-0.06em] h-2 w-2 rounded-full bg-terracotta"
                style={{ animation: "ktl-dotMove 1800ms ease-in-out infinite" }}
              />
            ) : null}
          </span>
        ))}
      </p>
    </div>
  );
}

export default KineticTextLoader;
