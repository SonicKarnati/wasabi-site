"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { inquiryTypes } from "@/content/contact";

type ContactMethod = "email" | "phone";

type WizardData = {
  name: string;
  organization: string;
  intent: string;
  contactMethod: ContactMethod;
  contactValue: string;
  message: string;
};

const INITIAL_DATA: WizardData = {
  name: "",
  organization: "",
  intent: "",
  contactMethod: "email",
  contactValue: "",
  message: "",
};

type StepId = "name" | "organization" | "intent" | "contact" | "message";
const STEP_ORDER: StepId[] = ["name", "organization", "intent", "contact", "message"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] ?? "";
}

/**
 * A step-by-step inquiry wizard. Renders an inviting inline entry; the moment the
 * visitor starts interacting (focuses the name field or clicks "Begin"), it opens a
 * focused full-screen overlay that asks one question at a time. Front-end only —
 * submission is simulated (no network), matching the site's placeholder posture.
 */
export function InquiryWizard() {
  const [active, setActive] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<WizardData>(INITIAL_DATA);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const titleId = useId();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const beginRef = useRef<HTMLButtonElement | null>(null);

  const stepId = STEP_ORDER[stepIndex];
  const total = STEP_ORDER.length;

  const update = useCallback((patch: Partial<WizardData>) => {
    setData((d) => ({ ...d, ...patch }));
    setError(null);
  }, []);

  const open = useCallback((atStep = 0) => {
    setActive(true);
    setStepIndex(atStep);
    setSubmitted(false);
    setError(null);
  }, []);

  const close = useCallback(() => {
    setActive(false);
    // return focus to the entry trigger for keyboard users
    window.requestAnimationFrame(() => beginRef.current?.focus());
  }, []);

  const validateStep = useCallback(
    (id: StepId): string | null => {
      switch (id) {
        case "name":
          return data.name.trim().length >= 2 ? null : "Please enter your name.";
        case "organization":
          return data.organization.trim().length >= 2
            ? null
            : "Let us know where you're reaching out from.";
        case "intent":
          return data.intent ? null : "Pick the option that fits best.";
        case "contact": {
          const v = data.contactValue.trim();
          if (data.contactMethod === "email") {
            return EMAIL_RE.test(v) ? null : "Enter a valid email address.";
          }
          return v.replace(/\D/g, "").length >= 7 ? null : "Enter a valid phone number.";
        }
        case "message":
          return null; // optional
        default:
          return null;
      }
    },
    [data],
  );

  const goNext = useCallback(() => {
    const err = validateStep(stepId);
    if (err) {
      setError(err);
      return;
    }
    if (stepIndex < total - 1) {
      setStepIndex((i) => i + 1);
    } else {
      setSubmitted(true);
    }
  }, [stepId, stepIndex, total, validateStep]);

  const goBack = useCallback(() => {
    setError(null);
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  }, [stepIndex]);

  const reset = useCallback(() => {
    setData(INITIAL_DATA);
    setStepIndex(0);
    setSubmitted(false);
    setError(null);
    setActive(false);
    window.requestAnimationFrame(() => beginRef.current?.focus());
  }, []);

  // Lock body scroll + wire Escape while the overlay is open.
  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  // Move focus to the active field on open / step change.
  useEffect(() => {
    if (!active || submitted) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [active, stepIndex, submitted]);

  const prompt = useMemo(() => STEP_COPY[stepId], [stepId]);

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <>
      {/* Inline entry — expands to full screen on first interaction */}
      <div className="rounded-2xl border border-line bg-white/55 p-8 shadow-sm md:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-wasabi">Start a conversation</p>
        <h3 className="mt-3 font-display text-4xl font-semibold text-forest md:text-5xl">
          Let&rsquo;s find the right starting point.
        </h3>
        <p className="mt-4 max-w-xl leading-7 text-ink/75">
          A few quick questions — one at a time. Takes about 30 seconds, and you choose how we
          reach back out.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            aria-label="Your name"
            className="min-h-12 w-full rounded-md border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-wasabi focus:ring-2 focus:ring-wasabi/30 sm:max-w-xs"
            placeholder="Your name"
            value={data.name}
            onChange={(e) => update({ name: e.target.value })}
            onFocus={() => open(0)}
          />
          <button
            ref={beginRef}
            type="button"
            onClick={() => open(0)}
            className="shine-button inline-flex min-h-12 items-center justify-center rounded-md border border-wasabi bg-wasabi px-6 py-3 text-sm font-bold !text-white shadow-sm transition hover:-translate-y-0.5 hover:border-forest hover:bg-[#245a42] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Begin inquiry &rarr;
          </button>
        </div>
      </div>

      {/* Full-screen focused wizard */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="wizard-overlay-in fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-forest text-cream"
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60rem 40rem at 15% -10%, rgba(229,120,74,0.20), transparent 60%), radial-gradient(50rem 40rem at 110% 120%, rgba(45,106,79,0.55), transparent 55%)",
            }}
          />

          {/* top bar: progress + close */}
          <div className="relative z-10 mx-auto flex w-full max-w-2xl items-center gap-4 px-6 pt-6">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-cream/15">
              <div
                className="h-full rounded-full bg-terracotta transition-[width] duration-500 ease-out"
                style={{ width: `${(submitted ? total : stepIndex + 1) * (100 / total)}%` }}
              />
            </div>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
              {submitted ? "Done" : `Step ${stepIndex + 1} of ${total}`}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close inquiry"
              className="shrink-0 rounded-full border border-cream/25 p-2 text-cream/70 transition hover:border-cream/60 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* body */}
          <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-10">
            {submitted ? (
              <div key="success" className="wizard-step-in text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-terracotta/20 text-terracotta">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="mt-6 font-display text-4xl font-semibold md:text-5xl">
                  Thank you{firstName(data.name) ? `, ${firstName(data.name)}` : ""}.
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-7 text-cream/75">
                  Your inquiry is noted and we&rsquo;ll reach out via{" "}
                  <span className="font-semibold text-cream">{data.contactValue || data.contactMethod}</span>.
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm text-cream/45">
                  Preview only — no message was actually sent yet.
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-cream px-6 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  >
                    Done
                  </button>
                  <button
                    type="button"
                    onClick={() => open(0)}
                    className="text-sm font-semibold text-cream/70 underline-offset-4 transition hover:text-cream hover:underline"
                  >
                    Start another
                  </button>
                </div>
              </div>
            ) : (
              <div key={stepId} className="wizard-step-in">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">{prompt.eyebrow}</p>
                <h2 id={titleId} className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  {prompt.title}
                </h2>
                {prompt.hint && <p className="mt-3 max-w-lg leading-7 text-cream/65">{prompt.hint}</p>}

                <div className="mt-8">
                  {stepId === "name" && (
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      className={FIELD_CLASS}
                      placeholder="Full name"
                      autoComplete="name"
                      value={data.name}
                      onChange={(e) => update({ name: e.target.value })}
                      onKeyDown={onInputKeyDown}
                    />
                  )}

                  {stepId === "organization" && (
                    <input
                      ref={inputRef as React.RefObject<HTMLInputElement>}
                      className={FIELD_CLASS}
                      placeholder="School, department, company, or community"
                      autoComplete="organization"
                      value={data.organization}
                      onChange={(e) => update({ organization: e.target.value })}
                      onKeyDown={onInputKeyDown}
                    />
                  )}

                  {stepId === "intent" && (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {inquiryTypes.map((type) => {
                        const selected = data.intent === type.title;
                        return (
                          <button
                            key={type.title}
                            type="button"
                            onClick={() => {
                              update({ intent: type.title });
                              window.setTimeout(() => setStepIndex((i) => Math.min(i + 1, total - 1)), 160);
                            }}
                            className={`rounded-xl border p-4 text-left transition ${
                              selected
                                ? "border-terracotta bg-terracotta/15"
                                : "border-cream/20 bg-cream/[0.04] hover:border-cream/50 hover:bg-cream/[0.08]"
                            } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta`}
                          >
                            <span className="block font-display text-xl font-semibold text-cream">{type.title}</span>
                            <span className="mt-1 block text-sm leading-6 text-cream/60">{type.description}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {stepId === "contact" && (
                    <div>
                      <div className="inline-flex rounded-full border border-cream/20 bg-cream/[0.04] p-1">
                        {(["email", "phone"] as ContactMethod[]).map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => update({ contactMethod: m, contactValue: "" })}
                            className={`min-w-24 rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                              data.contactMethod === m
                                ? "bg-cream text-forest"
                                : "text-cream/70 hover:text-cream"
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                      <input
                        ref={inputRef as React.RefObject<HTMLInputElement>}
                        key={data.contactMethod}
                        className={`${FIELD_CLASS} mt-4`}
                        type={data.contactMethod === "email" ? "email" : "tel"}
                        inputMode={data.contactMethod === "email" ? "email" : "tel"}
                        autoComplete={data.contactMethod === "email" ? "email" : "tel"}
                        placeholder={data.contactMethod === "email" ? "you@organization.org" : "+91 •••••  •••••"}
                        value={data.contactValue}
                        onChange={(e) => update({ contactValue: e.target.value })}
                        onKeyDown={onInputKeyDown}
                      />
                    </div>
                  )}

                  {stepId === "message" && (
                    <textarea
                      ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                      className={`${FIELD_CLASS} min-h-32 resize-none`}
                      placeholder="Optional — a sentence on what you're hoping to build."
                      value={data.message}
                      onChange={(e) => update({ message: e.target.value })}
                    />
                  )}
                </div>

                {error && <p className="mt-3 text-sm font-semibold text-terracotta">{error}</p>}

                <div className="mt-8 flex items-center gap-4">
                  {stepIndex > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-sm font-semibold text-cream/70 underline-offset-4 transition hover:text-cream hover:underline"
                    >
                      &larr; Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={goNext}
                    className="ml-auto inline-flex min-h-12 items-center justify-center rounded-md bg-cream px-7 py-3 text-sm font-bold text-forest shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  >
                    {stepIndex === total - 1 ? "Send inquiry" : "Continue"}
                  </button>
                </div>
                <p className="mt-4 text-xs text-cream/40">Press Enter to continue · Esc to close</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const FIELD_CLASS =
  "w-full rounded-lg border border-cream/25 bg-cream/[0.06] px-5 py-4 text-lg text-cream placeholder:text-cream/35 outline-none transition focus:border-terracotta focus:bg-cream/10";

const STEP_COPY: Record<StepId, { eyebrow: string; title: string; hint?: string }> = {
  name: {
    eyebrow: "Introductions",
    title: "First, who are we speaking with?",
  },
  organization: {
    eyebrow: "Context",
    title: "Where are you reaching out from?",
    hint: "A school, government department, company, or community group — whatever fits.",
  },
  intent: {
    eyebrow: "Your goal",
    title: "What brings you to Wasabi?",
    hint: "Pick the closest match. This routes your inquiry to the right people.",
  },
  contact: {
    eyebrow: "Staying in touch",
    title: "How should we reach you?",
    hint: "Your choice — email or phone, whichever is easier.",
  },
  message: {
    eyebrow: "In your words",
    title: "Anything you'd like us to know?",
    hint: "Optional. One line about what you're hoping to build is plenty.",
  },
};
