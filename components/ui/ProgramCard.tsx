import type { Program } from "@/content/types";
import { CTAButton } from "./CTAButton";
import { VerificationBadge } from "./VerificationBadge";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-line bg-white/45 p-6 transition hover:border-wasabi">
      <div className="grid min-w-0 gap-3">
        <h3 className="min-w-0 break-words font-display text-3xl font-semibold leading-tight text-forest">
          {program.title}
        </h3>
        <VerificationBadge status={program.status} />
      </div>
      <p className="mt-4 break-words text-sm font-bold uppercase tracking-[0.08em] text-wasabi">{program.audience}</p>
      <p className="mt-3 break-words leading-7 text-ink/80">{program.format}</p>
      <ul className="mt-5 space-y-2 text-sm leading-6 text-ink/80">
        {program.outputs.map((output) => (
          <li key={output} className="border-l-2 border-wasabi/30 pl-3">
            {output}
          </li>
        ))}
      </ul>
      <p className="mt-5 break-all text-xs leading-5 text-muted">Source: {program.source}</p>
      {program.cta ? <CTAButton {...program.cta} className="mt-6 self-start" /> : null}
    </article>
  );
}
