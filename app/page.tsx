import Image from "next/image";
import {
  ArrowRight,
  Building2,
  FileCheck2,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { plannedScale, proofStats, storyPlaceholders } from "@/content/impact";
import { homePage } from "@/content/pages";
import { programs } from "@/content/programs";

const heroVisuals = [
  {
    src: "/assets/extracted/wasabi-ai-learner-cover.png",
    alt: "AI Learner source brochure cover",
    label: "Student builder source visual",
  },
  {
    src: "/assets/extracted/wasabi-bharat-builds-cover.png",
    alt: "Bharat Builds source campaign cover",
    label: "Builder campaign source visual",
  },
  {
    src: "/assets/extracted/wasabi-shg-empowerment-cover.png",
    alt: "SHG empowerment source concept page",
    label: "Community enterprise source visual",
  },
];

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
    body: "This prototype keeps projected, placeholder, and needs-verification states explicit instead of dressing them up as final claims.",
  },
];

const programIcons = [School, Building2, UsersRound, ShieldCheck, Rocket, Sparkles];

const sourceVisuals = [
  {
    src: "/assets/extracted/wasabi-ai-learner-cover.png",
    alt: "AI Learner brochure cover",
    title: "AI Learner",
    note: "Prototype visual, not final approved photography.",
  },
  {
    src: "/assets/extracted/wasabi-startup-event-cover.png",
    alt: "Startup with AI event brochure cover",
    title: "Builder events",
    note: "Contains partner-style marks; needs review before final use.",
  },
  {
    src: "/assets/extracted/wasabi-bharat-builds-cover.png",
    alt: "Bharat Builds campaign cover",
    title: "Hackathon movement",
    note: "Strong visual; partner/reference permission risk.",
  },
  {
    src: "/assets/extracted/wasabi-shg-empowerment-cover.png",
    alt: "SHG empowerment source page",
    title: "SHG ecosystem",
    note: "Grounded source texture; text-heavy.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="demo-hero overflow-hidden border-b border-line">
        <div className="demo-glow demo-glow-one" aria-hidden="true" />
        <div className="demo-glow demo-glow-two" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <p className="demo-reveal text-xs font-bold uppercase tracking-[0.28em] text-wasabi">{homePage.hero.eyebrow}</p>
            <h1 className="demo-headline mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.98] text-forest sm:text-6xl lg:text-7xl">
              <span>Building </span>
              <span>Human Capability </span>
              <span>In The Age Of AI</span>
            </h1>
            <p className="demo-reveal demo-delay-1 mt-8 max-w-2xl text-lg leading-8 text-ink/80">
              {homePage.hero.description} This experimental branch pushes the visual storytelling further while keeping proof labels honest.
            </p>
            <div className="demo-reveal demo-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton {...homePage.hero.primaryCta} />
              <CTAButton {...homePage.hero.secondaryCta} />
            </div>
            <div className="demo-reveal demo-delay-3 mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {["Build-first", "Human-centered", "Proof-labeled"].map((item) => (
                <div key={item} className="rounded-md border border-line bg-white/45 px-4 py-3 text-sm font-bold text-forest shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="demo-visual-stack" aria-label="Experimental source visual collage">
            {heroVisuals.map((visual, index) => (
              <figure key={visual.src} className={`demo-float-card demo-float-${index + 1}`}>
                <Image src={visual.src} alt={visual.alt} width={480} height={680} priority={index === 0} />
                <figcaption>{visual.label}</figcaption>
              </figure>
            ))}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/75">What Wasabi does</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Programs become stages for confidence.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-cream/80">
              Every card keeps its source and verification status visible. The motion is dramatic; the claims stay conservative.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = programIcons[index % programIcons.length];
              return (
                <article key={program.id} className="demo-program-card">
                  <div className="flex items-start justify-between gap-4">
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
              These extracted PDF visuals help the demo feel more complete. They remain temporary until image rights, partner marks, and claim status are reviewed.
            </p>
          </div>

          <div className="demo-image-rail mt-12">
            {sourceVisuals.map((visual) => (
              <figure key={visual.src} className="demo-source-card">
                <Image src={visual.src} alt={visual.alt} width={420} height={560} />
                <figcaption>
                  <strong>{visual.title}</strong>
                  <span>{visual.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Credibility</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
                Proof can move. It still cannot pretend.
              </h2>
              <p className="mt-5 leading-7 text-ink/80">
                No count-up animation is used for placeholders. The demo highlights proof status instead of manufacturing certainty.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {proofStats.map((stat) => (
                <article key={stat.label} className="demo-proof-card">
                  <FileCheck2 aria-hidden="true" className="text-wasabi" />
                  <VerificationBadge status={stat.status} />
                  <p className="mt-5 font-display text-4xl font-bold leading-none text-wasabi">{stat.value}</p>
                  <p className="mt-2 text-sm font-bold text-forest">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{stat.note}</p>
                </article>
              ))}
              {plannedScale.map((item) => (
                <article key={item.title} className="demo-proof-card sm:col-span-2">
                  <ShieldCheck aria-hidden="true" className="text-wasabi" />
                  <VerificationBadge status={item.status} />
                  <h3 className="mt-5 font-display text-3xl font-semibold text-forest">{item.title}</h3>
                  {item.metric ? <p className="mt-4 text-lg font-bold leading-7 text-wasabi">{item.metric}</p> : null}
                  <p className="mt-4 leading-7 text-ink/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="demo-final-cta overflow-hidden bg-forest px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Sparkles aria-hidden="true" className="mx-auto text-cream" size={34} />
          <h2 className="mt-6 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Make AI feel like something people can build with.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/80">
            This branch is intentionally more animated than the likely final site. Keep the moments that increase clarity and remove anything that outshines trust.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton label="Review the prototype" href="/contact" variant="primary" />
            <CTAButton label="See program structure" href="/programs" variant="secondary" className="border-cream text-cream hover:bg-white/10" />
          </div>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-sm font-bold text-cream/80">
            Experimental branch
            <ArrowRight aria-hidden="true" size={16} />
          </div>
        </div>
      </section>
    </>
  );
}
