import Image from "next/image";
import Link from "next/link";
import { navigationItems } from "@/content/navigation";
import { siteInfo } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/assets/wasabi-logo-dark.jpeg"
            alt="Wasabi AI"
            width={200}
            height={68}
            className="h-11 w-auto"
          />
          <p className="mt-6 max-w-md leading-7 text-cream/80">{siteInfo.description}</p>
          <p className="mt-5 text-sm leading-6 text-cream/70">{siteInfo.trustNote}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Navigate</h2>
          <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-cream/80 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h2>
          <dl className="mt-5 space-y-3 text-sm text-cream/80">
            <div>
              <dt className="font-bold text-white">Email</dt>
              <dd>{siteInfo.officialContact.email}</dd>
            </div>
            <div>
              <dt className="font-bold text-white">Domain</dt>
              <dd>{siteInfo.officialContact.domain}</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
