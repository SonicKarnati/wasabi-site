import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { programs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Programs",
};

export default function ProgramsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Programs / Work"
        title="AI programs built around real outputs"
        description="Wasabi designs programs where participants do not just learn about AI. They build with it."
        primaryCta={{ label: "Discuss a program", href: "/contact", variant: "primary" }}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Program categories"
            title="Different audiences, one build-first model"
            description="Each card shows audience, structure, outputs, source, and proof status so reviewers can decide what is public-ready."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Review rule"
            title="Partner-sensitive claims stay placeholders."
            description="Adda247, Manus, public-sector references, student stories, and impact claims require permission or source verification before final publication."
            dark
          />
        </div>
      </section>
      <ContactCTA title="Want to bring a build-first AI program to your audience?" />
    </>
  );
}
