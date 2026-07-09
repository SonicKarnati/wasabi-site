import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramExplorer } from "@/components/sections/ProgramExplorer";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CTAButton } from "@/components/ui/CTAButton";
import { ImpactCard } from "@/components/ui/ImpactCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import { StoryCard } from "@/components/ui/StoryCard";
import { outputExamples, plannedScale, proofStats, storyPlaceholders } from "@/content/impact";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs & Impact",
};

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Programs / Work"
        title="AI programs built around real outputs"
        description="Participants don't just learn about AI — they build with it."
        primaryCta={{ label: "Partner with Wasabi", href: "/#contact", variant: "primary" }}
        secondaryCta={{ label: "See the impact", href: "#impact", variant: "secondary" }}
      />

      <section id="program-categories" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Program categories"
            title="Different audiences, one build-first model"
            description="Filter by audience. Each card shows structure, outputs, source, and proof status."
          />
          <div className="mt-10">
            <ProgramExplorer programs={programs} />
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Review rule"
            title="Partner-sensitive claims stay placeholders."
            description="Partner references, student stories, and impact claims need permission or source verification before final use."
            dark
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton label="Discuss a program" href="/#contact" variant="primary" />
            <CTAButton label="See the impact" href="#impact" variant="secondary" className="border-cream text-cream hover:bg-white/10" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="Program texture"
            title="Source materials can move without becoming final proof."
            description="The parallax rail uses source visuals as program context while the copy keeps permission, claim, and approval status explicit."
          />
          <Skiper30 />
        </div>
      </section>

      <div id="impact" className="scroll-mt-24">
        <TrustStrip stats={proofStats} />
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Outputs" title="What participants build" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {outputExamples.map((item) => (
              <ImpactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Planned scale"
            title="Projected and planned initiatives"
            description="Projected metrics are labeled projected, target, or placeholder — never achieved."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {plannedScale.map((item) => (
              <ImpactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Stories that need approval" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {storyPlaceholders.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA title="Want to bring a build-first AI program to your audience?" />
    </>
  );
}
