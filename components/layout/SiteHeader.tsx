import Image from "next/image";
import Link from "next/link";
import { navigationItems, primaryNavCta } from "@/content/navigation";
import { CTAButton } from "@/components/ui/CTAButton";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Wasabi AI home">
          <Image
            src="/assets/wasabi-logo-light.jpeg"
            alt="Wasabi AI"
            width={178}
            height={60}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigationItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-forest hover:text-wasabi">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CTAButton {...primaryNavCta} />
        </div>
        <MobileNav items={navigationItems} cta={primaryNavCta} />
      </div>
    </header>
  );
}
