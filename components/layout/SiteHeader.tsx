"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { MobileNav } from "./MobileNav";
import { SiteSpotlightNav } from "./SiteSpotlightNav";

export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);

  return (
    <header
      ref={ref}
      className="pointer-events-none sticky top-0 z-30 bg-transparent px-4 py-3 sm:px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div className="pointer-events-auto hidden items-center gap-4 rounded-full border border-line bg-white/72 px-3 py-2 shadow-[0_16px_44px_rgb(17_36_31_/_0.12)] backdrop-blur-xl md:flex">
          <Link href="/" className="flex items-center gap-3 rounded-full px-2" aria-label="Wasabi AI home">
            <Image
              src="/assets/wasabi-logo-light-transparent.png"
              alt="Wasabi AI"
              width={178}
              height={60}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <SiteSpotlightNav />
        </div>
        <div className="pointer-events-auto ml-auto md:hidden">
          <Link href="/" className="sr-only" aria-label="Wasabi AI home">
            Wasabi AI
          </Link>
        </div>
        <div className="pointer-events-auto absolute right-4 top-3 sm:right-6">
          <MobileNav items={navigationItems} />
        </div>
      </div>
    </header>
  );
}
