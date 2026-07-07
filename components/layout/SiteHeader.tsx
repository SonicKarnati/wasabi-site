"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { MobileNav } from "./MobileNav";
import { useHeaderScroll } from "@/lib/animations";

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);
  useHeaderScroll(ref);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Wasabi AI home">
          <Image
            src="/assets/wasabi-logo-light-transparent.png"
            alt="Wasabi AI"
            width={178}
            height={60}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigationItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-forest transition-colors hover:text-wasabi focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav items={navigationItems} />
      </div>
    </header>
  );
}
