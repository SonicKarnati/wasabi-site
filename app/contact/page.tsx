import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { InquiryWizard } from "@/components/sections/InquiryWizard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { inquiryTypes, faqs } from "@/content/contact";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

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
      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Inquiry paths" title="Choose the best starting point" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {inquiryTypes.map((type) => (
              <a
                key={type.title}
                href="#inquiry-form"
                className="group block rounded-lg border border-line bg-white/45 p-6 transition-all duration-150 hover:border-wasabi hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                <h2 className="font-display text-3xl font-semibold text-forest group-hover:text-wasabi transition-colors">{type.title}</h2>
                <p className="mt-4 leading-7 text-ink/80">{type.description}</p>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <section id="inquiry-form" className="scroll-mt-24 flex min-h-screen items-center py-16 md:py-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <InquiryWizard />
        </div>
      </section>
      <ScrollReveal as="section" className="py-16" y={24}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Questions" title="Review-safe answers" />
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
