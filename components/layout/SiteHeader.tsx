import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { SiteSpotlightNav } from "./SiteSpotlightNav";
import { navigationItems } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
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
        <SiteSpotlightNav />
        <MobileNav items={navigationItems} />
      </div>
    </header>
  );
}
