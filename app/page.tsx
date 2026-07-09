import {
  Building2,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { NetworkHero } from "@/components/sections/NetworkHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { AgentBentoGrid } from "@/components/ui/agent-bento-grid";
import { KineticTextLoader } from "@/components/ui/kinetic-text-loader";
import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import { TestimonialsCard } from "@/components/ui/testimonials-card";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { homePage } from "@/content/pages";
import { programs } from "@/content/programs";

const storyBeats = [
  {
    kicker: "Access",
    title: "AI tools are arriving faster than confidence.",
    body: "Wasabi's planning source keeps the thesis practical: access is not the same thing as capability.",
  },
  {
    kicker: "Practice",
    title: "Capability appears when people build real outputs.",
    body: "Programs are framed around projects, workflows, portfolios, pitches, product stories, and first solutions.",
  },
  {
    kicker: "Proof",
    title: "Credibility improves when proof labels stay visible.",
    body: "Wasabi keeps projected, placeholder, and needs-verification states explicit instead of dressing them up as final claims.",
  },
];

const programIcons = [School, Building2, UsersRound, ShieldCheck, Rocket, Sparkles];

const sourceVisuals = [
  {
    id: "ai-learner",
    src: "/assets/extracted/wasabi-ai-learner-cover.png",
    image: "/assets/extracted/wasabi-ai-learner-cover.png",
    title: "AI Learner",
    description: "Prototype visual, not final approved photography.",
  },
  {
    id: "builder-events",
    src: "/assets/extracted/wasabi-startup-event-cover.png",
    image: "/assets/extracted/wasabi-startup-event-cover.png",
    title: "Builder events",
    description: "Contains partner-style marks; needs review before final use.",
  },
  {
    id: "bharat-builds",
    src: "/assets/extracted/wasabi-bharat-builds-cover.png",
    image: "/assets/extracted/wasabi-bharat-builds-cover.png",
    title: "Hackathon movement",
    description: "Strong visual; partner/reference permission risk.",
  },
  {
    id: "shg-ecosystem",
    src: "/assets/extracted/wasabi-shg-empowerment-cover.png",
    image: "/assets/extracted/wasabi-shg-empowerment-cover.png",
    title: "SHG ecosystem",
    description: "Grounded source texture; text-heavy.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="demo-hero overflow-hidden">
        <PerspectiveGrid
          aria-hidden="true"
          gridSize={18}
          fadeRadius={72}
          className="pointer-events-none absolute inset-0 bg-cream/30 opacity-35"
        />
        <div className="demo-glow demo-glow-one" aria-hidden="true" />
        <div className="demo-glow demo-glow-two" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <p className="demo-reveal text-xs font-bold uppercase tracking-[0.28em] text-wasabi">{homePage.hero.eyebrow}</p>
            <h1 className="demo-headline mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.98] text-forest sm:text-6xl lg:text-7xl">
              <span>Building </span>
              <span>Human Capability </span>
              <span>In The Age Of AI</span>
            </h1>
            <p className="demo-reveal demo-delay-1 mt-8 max-w-2xl text-lg leading-8 text-ink/80">
              {homePage.hero.description}
            </p>
            <div className="demo-reveal demo-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton {...homePage.hero.primaryCta} />
              <CTAButton {...homePage.hero.secondaryCta} />
            </div>
            <div className="demo-reveal demo-delay-3 mt-8 flex flex-wrap gap-2.5">
              {["Build-first", "Human-centered", "Proof-labeled"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-wasabi/25 bg-white/55 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-forest shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:pl-4">
            <NetworkHero />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="demo-sticky-copy">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Why it matters</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
                The gap is not technology. The gap is capability.
              </h2>
            </div>
            <div className="grid gap-5">
              {storyBeats.map((beat, index) => (
                <article key={beat.title} className={`demo-story-card demo-reveal-card demo-delay-${index + 1}`}>
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-wasabi text-white">{index + 1}</span>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-wasabi">{beat.kicker}</p>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest">{beat.title}</h3>
                  <p className="mt-3 leading-7 text-ink/80">{beat.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="demo-dark-band overflow-hidden bg-forest py-16 text-cream md:py-24">
        <div className="demo-band-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/75">Capability system</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                The operating model is visible before the promise.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-cream/80">
              The grid keeps the site expressive without turning projected work into proof.
            </p>
          </div>
          <AgentBentoGrid />
        </div>
      </section>

      <section className="demo-dark-band overflow-hidden bg-forest py-16 text-cream md:py-24">
        <div className="demo-band-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/75">What Wasabi does</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Programs become stages for confidence.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-cream/80">
              Every card keeps its source and verification status visible — expressive presentation, conservative claims.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = programIcons[index % programIcons.length];
              return (
                <article key={program.id} className="demo-program-card">
                  <div className="flex items-center justify-between gap-4">
                    <span className="demo-icon-bubble">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <VerificationBadge status={program.status} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-white">{program.title}</h3>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-cream/75">{program.audience}</p>
                  <p className="mt-3 leading-7 text-cream/80">{program.format}</p>
                  <p className="mt-5 break-all text-xs leading-5 text-cream/60">Source: {program.source}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Source visual rail</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
              Source materials create texture, not final proof.
            </h2>
            <p className="mt-5 leading-7 text-ink/80">
              These source visuals give the programs real texture. They remain provisional until image rights, partner marks, and claim status are reviewed.
            </p>
          </div>

          <TestimonialsCard
            items={sourceVisuals}
            width={860}
            className="mt-12 justify-start p-0"
            showCounter
            showNavigation
          />
        </div>
      </section>

      <section className="demo-final-cta overflow-hidden bg-forest px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Sparkles aria-hidden="true" className="mx-auto text-cream" size={34} />
          <div className="mt-6">
            <KineticTextLoader text="Building" />
          </div>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Make AI feel like something people can build with.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            Every interaction is built to make capability feel within reach — clear, human, and
            honest about what has been proven and what is still to come.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton label="Start a conversation" href="/contact#inquiry-form" variant="primary" />
            <CTAButton label="See program structure" href="/programs" variant="secondary" className="border-cream text-cream hover:bg-white/10" />
          </div>
        </div>
      </section>
    </>
  );
}
