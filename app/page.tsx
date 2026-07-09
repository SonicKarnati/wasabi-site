import Link from "next/link";
import {
  Building2,
  FileCheck2,
  Globe2,
  Mail,
  MessageCircle,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { InquiryWizard } from "@/components/sections/InquiryWizard";
import { NetworkHero } from "@/components/sections/NetworkHero";
import { AgentBentoGrid } from "@/components/ui/agent-bento-grid";
import { CTAButton } from "@/components/ui/CTAButton";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { KineticTextLoader } from "@/components/ui/kinetic-text-loader";
import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { TestimonialsCard } from "@/components/ui/testimonials-card";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { inquiryTypes, faqs } from "@/content/contact";
import { plannedScale, proofStats } from "@/content/impact";
import { homePage } from "@/content/pages";
import { programs } from "@/content/programs";
import { siteInfo } from "@/content/site";

const storyBeats = [
  {
    kicker: "Access",
    title: "AI tools are arriving faster than confidence.",
    body: "Access is not the same thing as capability.",
  },
  {
    kicker: "Practice",
    title: "Capability appears when people build real outputs.",
    body: "Projects, workflows, portfolios, pitches, and first solutions.",
  },
  {
    kicker: "Proof",
    title: "Credibility improves when proof labels stay visible.",
    body: "Projected, placeholder, and needs-verification states stay explicit.",
  },
];

const programIcons = [School, Building2, UsersRound, ShieldCheck, Rocket, Sparkles];

const sourceVisuals = [
  {
    id: "ai-learner",
    image: "/assets/extracted/wasabi-ai-learner-cover.png",
    title: "AI Learner",
    description: "Prototype visual, not final approved photography.",
  },
  {
    id: "builder-events",
    image: "/assets/extracted/wasabi-startup-event-cover.png",
    title: "Builder events",
    description: "Contains partner-style marks; needs review before final use.",
  },
  {
    id: "bharat-builds",
    image: "/assets/extracted/wasabi-bharat-builds-cover.png",
    title: "Hackathon movement",
    description: "Strong visual; partner/reference permission risk.",
  },
  {
    id: "shg-ecosystem",
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

      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="demo-sticky-copy">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Why it matters</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
                The gap is not technology. The gap is capability.
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton label="Partner with Wasabi" href="/#contact" variant="primary" />
                <CTAButton label="Explore programs" href="/programs" variant="secondary" />
              </div>
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
      </ScrollReveal>

      <ScrollReveal as="section" className="demo-dark-band overflow-hidden bg-forest py-16 text-cream md:py-24" y={24}>
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
      </ScrollReveal>

      <ScrollReveal as="section" className="demo-dark-band overflow-hidden bg-forest py-16 text-cream md:py-24" y={24}>
        <div className="demo-band-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/75">What Wasabi does</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                Programs become stages for confidence.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton label="See all programs" href="/programs" variant="primary" />
              <CTAButton label="Partner with Wasabi" href="/#contact" variant="secondary" className="border-cream text-cream hover:bg-white/10" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = programIcons[index % programIcons.length];
              return (
                <Link
                  key={program.id}
                  href="/programs#program-categories"
                  className="demo-program-card block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="demo-icon-bubble">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <VerificationBadge status={program.status} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold leading-tight text-white">{program.title}</h3>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-cream/75">{program.audience}</p>
                  <p className="mt-3 leading-7 text-cream/80">{program.format}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-cream">
                    View program
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="overflow-hidden py-16 md:py-24" y={24}>
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
          <TestimonialsCard items={sourceVisuals} width={860} className="mt-12 justify-start p-0" />
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Credibility</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
                Proof can move. It still cannot pretend.
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton label="Request the evidence" href="/#contact" variant="primary" />
                <CTAButton label="See the impact" href="/programs#impact" variant="secondary" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {proofStats.map((stat) => (
                <article key={stat.label} className="demo-proof-card">
                  <div className="demo-proof-top">
                    <span className="demo-proof-icon">
                      <FileCheck2 aria-hidden="true" size={21} />
                    </span>
                    <VerificationBadge status={stat.status} />
                  </div>
                  <p className="mt-5 font-display text-3xl font-bold leading-tight text-wasabi">{stat.value}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-forest/70">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{stat.note}</p>
                </article>
              ))}
              {plannedScale.map((item) => (
                <article key={item.title} className="demo-proof-card sm:col-span-2">
                  <div className="demo-proof-top">
                    <span className="demo-proof-icon">
                      <ShieldCheck aria-hidden="true" size={21} />
                    </span>
                    <VerificationBadge status={item.status} />
                  </div>
                  <h3 className="mt-7 font-display text-3xl font-semibold text-forest">{item.title}</h3>
                  {item.metric ? <p className="mt-4 text-lg font-bold leading-7 text-wasabi">{item.metric}</p> : null}
                  <p className="mt-4 leading-7 text-ink/80">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className="demo-final-cta overflow-hidden bg-forest px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8"
        y={24}
        delay={0.1}
      >
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Sparkles aria-hidden="true" className="mx-auto text-cream" size={34} />
          <div className="mt-6">
            <KineticTextLoader text="Building" />
          </div>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-7xl">
            Make AI feel like something people can build with.
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton label="Start a conversation" href="#contact" variant="primary" />
            <CTAButton label="See program structure" href="/programs" variant="secondary" className="border-cream text-cream hover:bg-white/10" />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" id="contact" className="scroll-mt-24 py-16 md:py-24" y={24}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Partner with Wasabi</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest md:text-6xl">
                Tell us what you want to build.
              </h2>
            </div>
            <SocialFlipButton
              items={[
                { letter: "E", icon: <Mail size={18} />, label: "Email", href: `mailto:${siteInfo.officialContact.email}` },
                { letter: "W", icon: <Globe2 size={18} />, label: "Website", href: `https://${siteInfo.officialContact.domain}` },
                { letter: "Q", icon: <MessageCircle size={18} />, label: "Inquiry", href: "#contact-wizard" },
              ]}
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {inquiryTypes.map((type) => (
              <a
                key={type.title}
                href="#contact-wizard"
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-white/55 px-4 py-2 text-sm font-bold text-forest transition hover:border-wasabi hover:text-wasabi focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                {type.title}
              </a>
            ))}
          </div>

          <div id="contact-wizard" className="mt-10 scroll-mt-24">
            <InquiryWizard />
          </div>

          <div className="mt-16 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-wasabi">Quick answers</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest md:text-4xl">
              Review-safe answers
            </h3>
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
        </div>
      </ScrollReveal>
    </>
  );
}
