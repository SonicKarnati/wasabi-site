import { DesignXFinalCTA } from "@/components/design-x/DesignXFinalCTA";
import { DesignXHero } from "@/components/design-x/DesignXHero";
import { DesignXKineticBridge } from "@/components/design-x/DesignXKineticBridge";
import { DesignXProblem } from "@/components/design-x/DesignXProblem";
import { DesignXPrograms } from "@/components/design-x/DesignXPrograms";
import { DesignXProof } from "@/components/design-x/DesignXProof";
import { DesignXSystemMap } from "@/components/design-x/DesignXSystemMap";
import { MotionShell } from "@/components/design-x/MotionShell";

export const metadata = {
  title: "Design-X",
  description:
    "An experimental cinematic motion prototype for the Wasabi AI website, built as a design exploration.",
};

export default function DesignXPage() {
  return (
    <MotionShell>
      <DesignXHero />
      <DesignXKineticBridge />
      <DesignXProblem />
      <DesignXPrograms />
      <DesignXSystemMap />
      <DesignXProof />
      <DesignXFinalCTA />
    </MotionShell>
  );
}
