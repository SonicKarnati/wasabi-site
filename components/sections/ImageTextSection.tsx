import { SectionHeader } from "@/components/ui/SectionHeader";

type ImageTextSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
};

export function ImageTextSection({ eyebrow, title, description, points = [] }: ImageTextSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="rounded-lg border border-line bg-white/40 p-6">
          <div className="aspect-[4/3] rounded-md border border-dashed border-wasabi/40 bg-cream p-6">
            <p className="font-display text-3xl italic text-wasabi">[Placeholder: rights-cleared image]</p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Use real Wasabi environments, people mid-action, or approved line/photo treatment.
            </p>
          </div>
        </div>
        <div className="self-center">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          {points.length ? (
            <ul className="mt-8 grid gap-3">
              {points.map((point) => (
                <li key={point} className="border-l-2 border-wasabi/40 pl-4 leading-7 text-ink/80">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
