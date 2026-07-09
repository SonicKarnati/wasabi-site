import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ImageTextSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  points?: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
    note?: string;
  };
};

export function ImageTextSection({
  eyebrow,
  title,
  description,
  points = [],
  image,
}: ImageTextSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-line bg-white/50 p-4 shadow-sm">
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-forest/85 via-forest/40 to-transparent p-7 pt-16 text-cream">
                <p className="font-display text-3xl italic leading-snug text-cream">{image.caption}</p>
                {image.note ? (
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-cream/70">
                    {image.note}
                  </p>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="flex aspect-[4/3] flex-col justify-end rounded-md bg-gradient-to-br from-forest via-wasabi to-forest p-7 text-cream">
              <p className="font-display text-3xl italic leading-snug text-cream">Real Bharat, mid-build.</p>
              <p className="mt-3 text-sm leading-6 text-cream/85">
                Classrooms, SHG enterprises, and young builders creating first working solutions.
              </p>
            </div>
          )}
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
