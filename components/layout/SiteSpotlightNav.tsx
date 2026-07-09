"use client";

import { usePathname } from "next/navigation";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import { navigationItems } from "@/content/navigation";

export function SiteSpotlightNav() {
  const pathname = usePathname();
  const items = navigationItems.slice(1);
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => pathname === item.href || pathname.startsWith(`${item.href}/`)),
  );

  return <SpotlightNavbar items={items} defaultActiveIndex={activeIndex} className="hidden pt-0 md:flex" />;
}
