"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CTA } from "@/content/types";
import { CTAButton } from "@/components/ui/CTAButton";

type MobileNavProps = {
  items: Array<{ label: string; href: string }>;
  cta: CTA;
};

export function MobileNav({ items, cta }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = "mobile-navigation";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="min-h-11 rounded-md border border-line px-3 py-2 text-sm font-bold text-forest"
      >
        Menu
      </button>
      {isOpen ? (
        <div id={panelId} className="absolute left-4 right-4 top-20 z-20 rounded-lg border border-line bg-cream p-4 shadow-sm">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold text-forest hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <CTAButton {...cta} className="mt-2 w-full" onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      ) : null}
    </div>
  );
}
