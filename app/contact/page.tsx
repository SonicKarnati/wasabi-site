import { Globe2, Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { InquiryWizard } from "@/components/sections/InquiryWizard";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import SocialFlipButton from "@/components/ui/social-flip-button";
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
      <section id="inquiry-form" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <InquiryWizard />
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-wasabi">Direct paths</p>
            <p className="mt-2 max-w-xl leading-7 text-ink/80">
              Use the flip controls for official email, domain, and the guided inquiry flow.
            </p>
          </div>
          <SocialFlipButton
            items={[
              {
                letter: "E",
                icon: <Mail size={18} />,
                label: "Email",
                href: `mailto:${siteInfo.officialContact.email}`,
              },
              {
                letter: "W",
                icon: <Globe2 size={18} />,
                label: "Website",
                href: `https://${siteInfo.officialContact.domain}`,
              },
              {
                letter: "Q",
                icon: <MessageCircle size={18} />,
                label: "Inquiry",
                href: "#inquiry-form",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Review-safe answers" />
          <div className="mt-8">
            <FaqAccordion
              title=""
              items={faqs.map((faq) => ({
                question: faq.question,
                answer: (
                  <>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-wasabi">
                      {faq.status}
                    </span>
                    {faq.answer}
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </section>
    </>
  );
}
