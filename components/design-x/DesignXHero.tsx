import { ArrowDown, Sparkles } from "lucide-react";

import { MagneticButton } from "./MagneticButton";
import { ScrollReveal } from "./ScrollReveal";
import { VideoPanel } from "./VideoPanel";

const heroStill = "/assets/design-x/higgsfield/stills/hero-classroom-still.jpeg";

export function DesignXHero() {
  return (
    <section className="design-x-hero" aria-labelledby="design-x-hero-title">
      <div className="design-x-orb design-x-orb-one" aria-hidden="true" />
      <div className="design-x-orb design-x-orb-two" aria-hidden="true" />
      <div className="design-x-hero-grid">
        <div className="design-x-hero-copy">
          <ScrollReveal>
            <p className="design-x-kicker">
              <Sparkles size={16} aria-hidden="true" />
              Phase Design-X Prototype
            </p>
          </ScrollReveal>
          <h1 className="design-x-headline" id="design-x-hero-title">
            <span>Future-ready skills.</span>
            <span>Real projects.</span>
            <span>India&apos;s next builders.</span>
          </h1>
          <ScrollReveal delay="one">
            <p className="design-x-lede">
              Wasabi helps people in Bharat become capable builders by creating real things with
              AI. This experimental page turns that mission into a cinematic, scroll-driven demo
              reel while keeping proof labels honest.
            </p>
          </ScrollReveal>
          <ScrollReveal className="design-x-cta-row" delay="two">
            <MagneticButton href="/contact">Start a partnership conversation</MagneticButton>
            <MagneticButton href="/programs" variant="ghost">
              Explore the work
            </MagneticButton>
          </ScrollReveal>
          <ScrollReveal className="design-x-proof-chips" delay="three">
            <span>Build-first</span>
            <span>Human-centered</span>
            <span>Proof-labeled</span>
          </ScrollReveal>
        </div>
        <div className="design-x-hero-visual">
          <VideoPanel
            alt="Generated cinematic classroom scene with Indian students and a facilitator collaborating around a laptop"
            imageSrc={heroStill}
            label="Higgsfield generated still"
            priority
            title="Classroom-to-prototype moment"
          />
          <div className="design-x-signal-card design-x-signal-one">
            <span>01</span>
            Raw potential
          </div>
          <div className="design-x-signal-card design-x-signal-two">
            <span>02</span>
            Hands-on creation
          </div>
        </div>
      </div>
      <a className="design-x-scroll-cue" href="#design-x-problem" aria-label="Scroll to story">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
