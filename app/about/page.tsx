import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";

export const metadata: Metadata = {
  title: "About",
};

const philosophy = [
  {
    number: "01",
    title: "Mindset Matters More Than Technology",
    description:
      "The tools change every six months. Curiosity, confidence, and the drive to experiment are permanent advantages. We build the human, not just the skill set.",
  },
  {
    number: "02",
    title: "AI Is a Capability Multiplier",
    description:
      "AI does not replace human thinking. It amplifies it. Students who learn to harness that amplification operate in a different category entirely.",
  },
  {
    number: "03",
    title: "Creation Is the New Literacy",
    description:
      "Reading and writing defined the last era. Building defines this one. Every Wasabi student leaves as a creator with a portfolio, a project, and proof.",
  },
];

const values = [
  {
    icon: "⚡",
    title: "Innovation",
    description:
      "We stay at the cutting edge of AI technology, ensuring students learn relevant and powerful tools, not yesterday's curriculum.",
  },
  {
    icon: "🔓",
    title: "Empowerment",
    description:
      "We believe every student has the potential to create. Our mission is to help unlock that potential regardless of school, city, or background.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    description:
      "We set high standards and provide the support needed to meet them. Excellence is the baseline we hold ourselves and our students to.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Learning happens together. We build networks of creators, mentors, and innovators who support and push each other further.",
  },
];

const team = [
  {
    initials: "AD",
    name: "Abhra Dubey",
    role: "Tech & Product Development",
    description:
      "National and international champion in AI and coding. Passionate about making AI accessible to every student and believes the best way to learn AI is to build with it.",
  },
  {
    initials: "YM",
    name: "Yashashvi Mukesh",
    role: "Strategy & Pedagogy Leader",
    description:
      "10 years of experience in impact strategy, youth skilling, and social entrepreneurship. Believes deeply in learning through building and that mindset is the ultimate competitive advantage.",
  },
  {
    initials: "HS",
    name: "Hritik Sharma",
    role: "People & Partnerships Leader",
    description:
      "Focused on youth partnerships and community engagement. Dedicated to connecting students with opportunities in the AI ecosystem and building the Wasabi community across India.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About Wasabi AI"
        title="We are building the AI-ready generation."
        description="We believe every student in India has the potential to understand, use, and build with AI. Wasabi exists to make that possible — one cohort at a time."
        primaryCta={{ label: "Explore Programs", href: "/programs", variant: "primary" }}
        secondaryCta={{ label: "Back to Home", href: "/", variant: "secondary" }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <QuoteBlock quote="Empowered by Mindset. Powered by AI." attribution="Wasabi vision" />
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Purpose-built for young India."
              description="Wasabi exists to make powerful AI tools, knowledge, and opportunities accessible to every student regardless of background — turning curiosity into capability."
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
          <SectionHeader eyebrow="How we think" title="The Wasabi Philosophy." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {philosophy.map((item) => (
              <article key={item.number} className="rounded-lg border border-line bg-white/50 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-wasabi">{item.number} ·</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-forest">{item.title}</h2>
                <p className="mt-4 leading-7 text-ink/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/75">Think. Create. Evolve.</p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-white md:text-7xl">
            What drives us.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-cream/80">
            Four principles shape every program, every session, every student interaction at Wasabi.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-cream/15 bg-cream/8 p-6">
                <span className="text-3xl" aria-hidden="true">{value.icon}</span>
                <h3 className="mt-5 font-display text-3xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 leading-7 text-cream/78">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The people behind Wasabi"
            title="Meet the Team."
            description="Three builders on a mission to make AI education real, hands-on, and accessible for every young person in India."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-lg border border-line bg-white/50 p-6 shadow-sm">
                <span className="grid size-14 place-items-center rounded-full bg-forest text-sm font-black text-cream">
                  {member.initials}
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold text-forest">{member.name}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-wasabi">{member.role}</p>
                <p className="mt-4 leading-7 text-ink/80">{member.description}</p>
                <Link href="/#contact" className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-wasabi underline-offset-4 hover:underline">
                  Connect with Wasabi
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-line bg-white/50 p-8 shadow-sm">
            <SectionHeader
              eyebrow="The company"
              title="Wasabi AI Innovation Private Limited"
              description="A technology and education company registered under the Ministry of Corporate Affairs, Government of India, in 2025. The company builds programs and platforms that prepare the next generation for the age of artificial intelligence."
            />
            <p className="mt-6 inline-flex rounded-full border border-line bg-cream/70 px-4 py-2 text-sm font-bold text-forest">
              ✓ MCA Registered · Government of India · 2025
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton label="Explore Programs" href="/programs" variant="primary" />
              <CTAButton label="Back to Home" href="/" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA title="Ready to join the movement?" />
    </>
  );
}
