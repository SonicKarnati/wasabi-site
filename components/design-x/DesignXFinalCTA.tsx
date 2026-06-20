import { MagneticButton } from "./MagneticButton";

export function DesignXFinalCTA() {
  return (
    <section className="design-x-final" aria-labelledby="design-x-final-title">
      <div className="design-x-final-noise" aria-hidden="true" />
      <p className="design-x-kicker">Final invitation</p>
      <h2 id="design-x-final-title">Bring build-first AI capability to your community or institution.</h2>
      <p>
        This ending should feel cinematic but calm: an invitation to partner, support, or learn
        more without a sales-heavy finish.
      </p>
      <div className="design-x-cta-row">
        <MagneticButton href="/contact">Contact Wasabi</MagneticButton>
        <MagneticButton href="/" variant="ghost">
          Return to stable site
        </MagneticButton>
      </div>
    </section>
  );
}
