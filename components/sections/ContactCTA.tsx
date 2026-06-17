import { CTAButton } from "@/components/ui/CTAButton";

type ContactCTAProps = {
  title?: string;
  description?: string;
};

export function ContactCTA({
  title = "Bring build-first AI capability to your community or institution.",
  description = "Tell us what you are trying to build, and keep unverified proof as placeholders until review.",
}: ContactCTAProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-forest p-8 text-cream md:p-12">
          <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl leading-7 text-cream/85">{description}</p>
          <div className="mt-8">
            <CTAButton label="Contact Wasabi" href="/contact" variant="primary" className="border-white bg-white text-forest hover:bg-cream" />
          </div>
        </div>
      </div>
    </section>
  );
}
