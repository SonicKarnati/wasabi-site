import { statusLabel } from "@/lib/utils";
import type { VerificationStatus } from "@/content/types";

type VerificationBadgeProps = {
  status: VerificationStatus;
};

export function VerificationBadge({ status }: VerificationBadgeProps) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-line bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-forest">
      {statusLabel(status)}
    </span>
  );
}
