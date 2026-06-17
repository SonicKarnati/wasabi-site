import type { ImpactItem, Stat, Story } from "./types";

export const proofStats: Stat[] = [
  {
    value: "[Placeholder]",
    label: "verified students trained",
    status: "placeholder",
    note: "Needs verified source record.",
  },
  {
    value: "[Placeholder]",
    label: "verified projects built",
    status: "placeholder",
    note: "Needs verified source record.",
  },
  {
    value: "[Placeholder]",
    label: "verified schools / institutions reached",
    status: "placeholder",
    note: "Needs verified source record.",
  },
  {
    value: "[Placeholder]",
    label: "approved partner proof",
    status: "placeholder",
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
    title: "[Placeholder: other planned scale]",
    description: "[Placeholder: planned initiative]",
    status: "placeholder",
  },
];

export const storyPlaceholders: Story[] = [
  {
    title: "[Placeholder: approved student story]",
    summary: "Student story pending consent, source review, and image rights.",
    status: "placeholder",
  },
  {
    title: "[Placeholder: approved SHG/community story]",
    summary: "Community story pending pilot documentation and consent.",
    status: "placeholder",
  },
  {
    title: "[Placeholder: approved school or district story]",
    summary: "Institutional story pending approval.",
    status: "placeholder",
  },
];
