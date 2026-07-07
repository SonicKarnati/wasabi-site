import type { CTA } from "@/content/types";
import { CTAButton } from "@/components/ui/CTAButton";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  note?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  note,
}: HeroSectionProps) {
  return (
    <section className="page-hero">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-8">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-wasabi">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] text-forest sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? <CTAButton {...primaryCta} /> : null}
            {secondaryCta ? <CTAButton {...secondaryCta} /> : null}
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white/55 p-6 shadow-sm">
          <p className="font-display text-3xl italic leading-snug text-wasabi">
            People become capable by creating.
          </p>
          <p className="mt-5 leading-7 text-ink/75">
            Wasabi turns AI exposure into real, finished work — projects, portfolios, and first
            solutions people can point to and build on.
          </p>
          {note ? <p className="mt-5 text-sm font-bold text-forest">{note}</p> : null}
        </div>
      </div>
    </section>
  );
}
