import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ImpactCard } from "@/components/ui/ImpactCard";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StoryCard } from "@/components/ui/StoryCard";
import { plannedScale, storyPlaceholders } from "@/content/impact";
import { homePage } from "@/content/pages";

export default function HomePage() {
  return (
    <>
      <HeroSection {...homePage.hero} note="Proof stays visible and review-safe until verified." />
      <TrustStrip stats={homePage.stats} />
      <ImageTextSection
        eyebrow="Problem"
        title="The gap is not technology. The gap is capability."
        description="AI access alone does not create confidence, judgment, or the ability to build. Wasabi starts with practical creation."
        points={[
          "Participants learn through real outputs, not abstract AI hype.",
          "Programs are structured for students, schools, communities, institutions, and young builders.",
          "Every unsupported claim remains a placeholder until it is verified.",
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Programs"
            title="Build-first AI programs for different communities"
            description="The first website version shows program breadth while keeping partner, metric, and status claims in review."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {homePage.programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-forest py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Impact"
            title="Proof should be honest."
            description="Verified metrics, projected scale, and human stories need different labels."
            dark
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
          <SectionHeader
            eyebrow="Human proof"
            title="[Placeholder: approved student or community story]"
            description="Stories remain placeholders until consent, source, and image rights are confirmed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {storyPlaceholders.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
