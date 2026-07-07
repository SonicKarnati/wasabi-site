import Link from "next/link";
import { cx } from "@/lib/utils";
import type { CTA } from "@/content/types";

type CTAButtonProps = CTA & {
  className?: string;
  onClick?: () => void;
};

export function CTAButton({ label, href, variant = "primary", className, onClick }: CTAButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cx(
        "inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta",
        variant === "primary" &&
          "shine-button border-wasabi bg-wasabi !text-white shadow-sm hover:-translate-y-0.5 hover:border-forest hover:bg-[#245a42] hover:!text-white hover:shadow-md",
        variant === "secondary" &&
          "border-wasabi bg-transparent text-wasabi hover:bg-white/70",
        variant === "text" &&
          "border-transparent px-0 text-wasabi underline-offset-4 hover:underline",
        className,
      )}
    >
      {label}
    </Link>
  );
}
