import Link from "next/link";
import type { CTA } from "@/content/types";
import { CTAButton } from "@/components/ui/CTAButton";

type MobileNavProps = {
  items: Array<{ label: string; href: string }>;
  cta: CTA;
};

export function MobileNav({ items, cta }: MobileNavProps) {
  return (
    <details className="group md:hidden">
      <summary className="list-none rounded-md border border-line px-3 py-2 text-sm font-bold text-forest marker:hidden">
        Menu
      </summary>
      <div className="absolute left-4 right-4 top-20 z-20 hidden rounded-lg border border-line bg-cream p-4 shadow-sm group-open:block">
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 text-sm font-bold text-forest hover:bg-white">
              {item.label}
            </Link>
          ))}
          <CTAButton {...cta} className="mt-2 w-full" />
        </nav>
      </div>
    </details>
  );
}
