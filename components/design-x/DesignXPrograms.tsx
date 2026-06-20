import {
  ArrowUpRight,
  Building2,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { programs } from "@/content/programs";

const icons = [School, Building2, UsersRound, ShieldCheck, Rocket, Sparkles];

export function DesignXPrograms() {
  return (
    <section className="design-x-programs" aria-labelledby="design-x-programs-title">
      <div className="design-x-section-heading">
        <p className="design-x-kicker">Animated program field</p>
        <h2 id="design-x-programs-title">Programs become stages for confidence.</h2>
        <p>
          Every card can move, glow, and tilt. The claims still stay labeled as source-supported,
          projected, or needing verification.
        </p>
      </div>
      <div className="design-x-program-grid">
        {programs.map((program, index) => {
          const Icon = icons[index] ?? Sparkles;
          const cta = program.cta ?? { label: "Discuss this program", href: "/contact" };
          return (
            <article className="design-x-program-card" key={program.id}>
              <div className="design-x-program-topline">
                <span className="design-x-icon-ring">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="design-x-status">{program.status}</span>
              </div>
              <h3>{program.title}</h3>
              <p className="design-x-program-audience">{program.audience}</p>
              <p>{program.format}</p>
              <a href={cta.href}>
                {cta.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
