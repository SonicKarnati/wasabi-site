export type VerificationStatus =
  | "verified"
  | "needs verification"
  | "projected"
  | "target"
  | "placeholder"
  | "approved"
  | "do not publish";

export type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type Stat = {
  value: string;
  label: string;
  status: VerificationStatus;
  note?: string;
};

export type Program = {
  id: string;
  title: string;
  audience: string;
  format: string;
  outputs: string[];
  status: VerificationStatus;
  source: string;
  cta?: CTA;
};

export type ImpactItem = {
  title: string;
  description: string;
  status: VerificationStatus;
  metric?: string;
};

export type Story = {
  title: string;
  summary: string;
  status: VerificationStatus;
};

export type FAQ = {
  question: string;
  answer: string;
  status: VerificationStatus;
};
