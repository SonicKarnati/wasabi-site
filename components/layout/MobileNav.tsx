"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type MobileNavProps = {
  items: Array<{ label: string; href: string }>;
};

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
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
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="grid size-11 place-items-center rounded-md border border-line text-forest transition-colors hover:border-wasabi hover:text-wasabi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        <span className="relative block size-6">
          <Menu
            aria-hidden="true"
            size={24}
            className={`absolute inset-0 transition-all duration-200 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          />
          <X
            aria-hidden="true"
            size={24}
            className={`absolute inset-0 transition-all duration-200 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </span>
      </button>
      <div
        ref={panelRef}
        id={panelId}
        className={`absolute left-4 right-4 top-20 z-20 rounded-lg border border-line bg-cream p-4 shadow-lg transition-opacity duration-150 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        inert={!isOpen ? true : undefined}
      >
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-bold text-forest transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
