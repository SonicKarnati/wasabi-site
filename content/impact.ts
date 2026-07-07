import type { ImpactItem, Stat, Story } from "./types";

export const proofStats: Stat[] = [
  {
    value: "Verified students trained",
    label: "Pending verification",
    status: "needs verification",
    note: "Needs verified source record.",
  },
  {
    value: "Verified projects built",
    label: "Pending verification",
    status: "needs verification",
    note: "Needs verified source record.",
  },
  {
    value: "Verified schools / institutions reached",
    label: "Pending verification",
    status: "needs verification",
    note: "Needs verified source record.",
  },
  {
    value: "Approved partner proof",
    label: "Awaiting approval",
    status: "needs verification",
    note: "Needs partner permission.",
  },
];

export const outputExamples: ImpactItem[] = [
  {
    title: "Student projects",
    description: "Websites, apps, research assistants, creative projects, and workflows.",
    status: "needs verification",
  },
  {
    title: "SHG enterprise assets",
    description:
      "Product stories, WhatsApp catalogs, promotional messages, pricing sheets, and growth plans.",
    status: "needs verification",
  },
  {
    title: "Public-sector POC outputs",
    description: "First solutions, workflows, portfolio proof, or accessibility-support use cases.",
    status: "needs verification",
  },
  {
    title: "Startup and hackathon outputs",
    description: "MVPs, pitches, workflows, prototypes, and launch roadmaps.",
    status: "needs verification",
  },
];

export const plannedScale: ImpactItem[] = [
  {
    title: "Kanpur AI School Championship 2026",
    metric:
      "600 targeted schools, 1200+ expected student builders, 50+ targeted ecosystem partners, 1800+ projected attendees.",
    description: "Source labels these as targeted, expected, or projected.",
    status: "projected",
  },
  {
    title: "AI Empowerment for SHG Ecosystems",
    metric:
      "Phased Track A / Track B workshops with voice-first, regional-language delivery across SHG communities.",
    description: "Reach and enterprise outcomes remain projected until pilot data is verified.",
    status: "projected",
  },
];

export const storyPlaceholders: Story[] = [
  {
    title: "A Kanpur government-school student builds a first working project",
    summary: "Student story pending consent, source review, and image rights.",
    status: "needs verification",
  },
  {
    title: "An SHG entrepreneur builds a WhatsApp catalog for her enterprise",
    summary: "Community story pending pilot documentation and consent.",
    status: "needs verification",
  },
  {
    title: "A school joins the Kanpur AI School Championship",
    summary: "Institutional story pending approval.",
    status: "needs verification",
  },
];
