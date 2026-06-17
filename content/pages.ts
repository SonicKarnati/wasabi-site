import { proofStats } from "./impact";
import { programs } from "./programs";

export const homePage = {
  hero: {
    eyebrow: "Wasabi AI",
    title: "Building Human Capability In The Age Of AI",
    description:
      "Wasabi helps people in Bharat become capable builders by creating real things with AI.",
    primaryCta: { label: "Partner with Wasabi", href: "/contact", variant: "primary" as const },
    secondaryCta: { label: "Explore programs", href: "/programs", variant: "secondary" as const },
  },
  stats: proofStats,
  programs: programs.slice(0, 4),
};

export const aboutPage = {
  hero: {
    eyebrow: "About Wasabi",
    title: "AI is not the hero. Human capability is.",
    description:
      "Wasabi exists to help people realize how capable they truly are in the age of AI.",
    primaryCta: { label: "See the work", href: "/programs", variant: "primary" as const },
    secondaryCta: { label: "Contact", href: "/contact", variant: "secondary" as const },
  },
  principles: [
    {
      title: "Build-first",
      description: "Not passive learning. Real creation.",
    },
    {
      title: "Human-first",
      description: "AI supports capability; people remain the center.",
    },
    {
      title: "Bharat-native",
      description: "Regional context, practical devices, real lives.",
    },
    {
      title: "Honest proof",
      description: "No inflated claims. Verify before publishing.",
    },
  ],
};
