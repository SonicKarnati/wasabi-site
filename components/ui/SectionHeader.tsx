import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.14em]", dark ? "text-cream" : "text-wasabi")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("font-display text-4xl font-semibold leading-tight md:text-5xl", dark ? "text-white" : "text-forest")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 md:text-lg", dark ? "text-cream/85" : "text-ink/80")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
