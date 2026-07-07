import type { FAQ } from "./types";

export const inquiryTypes = [
  {
    title: "Government / Public Sector",
    description: "Pilot or district/community AI capability program.",
  },
  {
    title: "Schools / Parents",
    description: "AI Learner, school programs, and student builder programs.",
  },
  {
    title: "Institutional Partnership",
    description: "Co-branded program, platform partnership, foundation, or ecosystem collaboration.",
  },
  {
    title: "Startup / Hackathon",
    description: "Builder event, startup program, challenge, or workshop.",
  },
  {
    title: "Media / Sponsor",
    description: "Press, storytelling, or sponsorship of a build-first program, event, or championship.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Do students need to know coding before joining?",
    answer: "No. Source materials describe beginner-friendly programs where students build with AI.",
    status: "needs verification",
  },
  {
    question: "Can Wasabi support regional-language community programs?",
    answer:
      "Yes, SHG and public-sector source materials describe voice-first, regional-language delivery models.",
    status: "needs verification",
  },
  {
    question: "Are the impact numbers final?",
    answer:
      "No. Metrics remain placeholders until Wasabi verifies source records and approves public use.",
    status: "placeholder",
  },
];
