import type { Metadata } from "next";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { aboutPage } from "@/content/pages";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection {...aboutPage.hero} />
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <QuoteBlock quote="People become capable by creating." attribution="Wasabi brand principle" />
          <div>
            <SectionHeader
              eyebrow="The Wasabi Moment"
              title="A shift in what someone believes they can do"
              description="When a participant creates a real output for the first time, the shift is not only technical. It changes what they believe they can do."
            />
          </div>
        </div>
      </section>
      <ImageTextSection
        eyebrow="Bharat context"
        title="A future built from real Bharat"
        description="Villages, tier-2 cities, classrooms, SHG ecosystems, and young builders are not waiting for a distant AI future. They need confidence, exposure, and practical tools now."
        image={{
          src: "/assets/generated/bharat-classroom-learner.png",
          alt: "A student working on a laptop at a wooden desk in a sunlit classroom",
          caption: "Real Bharat, mid-build.",
          note: "Illustrative visual — not program photography",
        }}
      />
      <Skiper19 />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Principles" title="How the brand should show up" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.principles.map((principle) => (
              <article key={principle.title} className="rounded-lg border border-line bg-white/50 p-6 shadow-sm transition-colors hover:border-wasabi/50">
                <h2 className="font-display text-3xl font-semibold text-forest">{principle.title}</h2>
                <p className="mt-4 leading-7 text-ink/80">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-line bg-white/50 p-8 shadow-sm">
            <SectionHeader
              eyebrow="Team"
              title="Builders, educators, and advisors behind Wasabi"
              description="Wasabi is led by practitioners across AI, education, and community programs, with advisors guiding responsible rollout. Full bios and photos are published as each collaborator's participation is confirmed."
            />
          </div>
        </div>
      </section>
      <ContactCTA title="Explore how Wasabi turns AI exposure into capability." />
    </>
  );
}
