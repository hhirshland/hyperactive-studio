"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Strategic Thinkers",
    description:
      "We don't just implement — we diagnose. Every engagement starts with understanding your business, your constraints, and where AI can create the most leverage.",
  },
  {
    title: "Action Oriented",
    description:
      "Strategies without execution are just slide decks. We move from insight to implementation in weeks, not quarters.",
  },
  {
    title: "Results Driven",
    description:
      "Every recommendation is tied to measurable outcomes. We optimize for impact, not activity.",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="annotation">Why Hyperactive</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Work is changing.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted max-w-lg">
              Work with us to identify how your business can leverage AI to
              reinvent itself.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1} className="h-full">
              <div className="group h-full rounded-lg border border-border bg-surface p-6 transition-all duration-200 hover:border-border-strong hover:shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-muted font-mono text-xs font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
