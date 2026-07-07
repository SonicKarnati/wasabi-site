import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ImpactCard } from "@/components/ui/ImpactCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryCard } from "@/components/ui/StoryCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { outputExamples, plannedScale, proofStats, storyPlaceholders } from "@/content/impact";

export const metadata: Metadata = {
  title: "Impact",
};

export default function ImpactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Impact"
        title="Impact means capability people can show."
        description="Wasabi's impact should be measured in confidence, real outputs, and verified outcomes."
        primaryCta={{ label: "Request impact details", href: "/contact", variant: "primary" }}
        secondaryCta={{ label: "Partner on a pilot", href: "/contact", variant: "secondary" }}
      />
      <ScrollReveal as="div" y={24}>
        <TrustStrip stats={proofStats} />
      </ScrollReveal>
      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Outputs" title="What participants build" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {outputExamples.map((item) => (
              <ImpactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Planned scale"
            title="Projected and planned initiatives"
            description="Projected metrics are labeled as projected, target, or placeholder, never achieved."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {plannedScale.map((item) => (
              <ImpactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Stories that need approval" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {storyPlaceholders.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal as="div" y={24}>
        <ContactCTA title="Want the evidence behind a program?" />
      </ScrollReveal>
    </>
  );
}
