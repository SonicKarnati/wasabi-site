import type { Stat } from "@/content/types";
import { StatBlock } from "@/components/ui/StatBlock";

type TrustStripProps = {
  stats: Stat[];
};

export function TrustStrip({ stats }: TrustStripProps) {
  return (
    <section aria-labelledby="trust-heading" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-wasabi">Proof status</p>
            <h2 id="trust-heading" className="mt-2 font-display text-4xl font-semibold text-forest">
              Credibility without overclaiming
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            These proof slots stay visible as placeholders until Wasabi approves the underlying evidence.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
