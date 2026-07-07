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
        <div className="overflow-hidden rounded-lg border border-line bg-white/50 p-4 shadow-sm">
          <div className="flex aspect-[4/3] flex-col justify-end rounded-md bg-gradient-to-br from-forest via-wasabi to-forest p-7 text-cream">
            <p className="font-display text-3xl italic leading-snug text-cream">Real Bharat, mid-build.</p>
            <p className="mt-3 text-sm leading-6 text-cream/85">
              Classrooms, SHG enterprises, and young builders creating first working solutions.
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
