import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { inquiryTypes, faqs } from "@/content/contact";
import { siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Bring build-first AI capability to your community, school, or institution."
        description="Tell us what you are trying to build, and we will route the conversation."
        primaryCta={{ label: "Send inquiry", href: "#inquiry-form", variant: "primary" }}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Inquiry paths" title="Choose the best starting point" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {inquiryTypes.map((type) => (
              <article key={type.title} className="rounded-lg border border-line bg-white/45 p-6">
                <h2 className="font-display text-3xl font-semibold text-forest">{type.title}</h2>
                <p className="mt-4 leading-7 text-ink/80">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="inquiry-form" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Official contact"
              title="Contact details pending confirmation"
              description="The final website should use one official domain, email, phone, and routing flow."
            />
            <dl className="mt-8 space-y-4 text-sm leading-6 text-ink/80">
              <div>
                <dt className="font-bold text-forest">Email</dt>
                <dd>{siteInfo.officialContact.email}</dd>
              </div>
              <div>
                <dt className="font-bold text-forest">Phone</dt>
                <dd>{siteInfo.officialContact.phone}</dd>
              </div>
              <div>
                <dt className="font-bold text-forest">Website</dt>
                <dd>{siteInfo.officialContact.domain}</dd>
              </div>
            </dl>
          </div>
          <form className="rounded-lg border border-line bg-white/45 p-6" aria-label="Contact inquiry form" aria-describedby="form-review-note">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-forest">
                Name
                <input className="rounded-md border border-line bg-white px-4 py-3 text-ink" name="name" type="text" autoComplete="name" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-forest">
                Organization / School / Department
                <input className="rounded-md border border-line bg-white px-4 py-3 text-ink" name="organization" type="text" autoComplete="organization" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-forest">
                Email
                <input className="rounded-md border border-line bg-white px-4 py-3 text-ink" name="email" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm font-bold text-forest">
                Inquiry type
                <select className="rounded-md border border-line bg-white px-4 py-3 text-ink" name="inquiryType" required>
                  {inquiryTypes.map((type) => (
                    <option key={type.title}>{type.title}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-forest">
                What are you trying to bring Wasabi into?
                <textarea className="min-h-32 rounded-md border border-line bg-white px-4 py-3 text-ink" name="message" required />
              </label>
              <label className="flex gap-3 text-sm leading-6 text-ink/80">
                <input className="mt-1 size-4" type="checkbox" name="acknowledgement" required />
                <span>I understand this is an inquiry, not an enrollment or partnership confirmation.</span>
              </label>
              <button className="min-h-11 rounded-md border border-wasabi bg-wasabi px-5 py-3 text-sm font-bold !text-white shadow-sm transition hover:-translate-y-0.5 hover:border-forest hover:bg-[#245a42] hover:!text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta" type="button">
                Submit inquiry placeholder
              </button>
              <p id="form-review-note" className="text-sm leading-6 text-muted">[Placeholder: response timeline and privacy/consent note]</p>
            </div>
          </form>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Review-safe answers" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
