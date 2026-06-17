import type { CTA } from "./types";

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavCta: CTA = {
  label: "Partner with Wasabi",
  href: "/contact",
  variant: "primary",
};
