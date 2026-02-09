"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const differentiators = [
  {
    id: "01",
    title: "Startup-trained",
    description: "6+ years shipping in high-pressure environments. We know what matters and what doesn't.",
  },
  {
    id: "02",
    title: "Ruthless prioritization",
    description: "Focus on leverage and driving outcomes. Unlock velocity by prioritizing what matters most.",
  },
  {
    id: "03",
    title: "AI-native",
    description: "Not experimenting with AI—operating at the edge. Woven into how we design, build, and ship.",
  },
  {
    id: "04",
    title: "End-to-end",
    description: "Strategy, design, engineering, analytics, growth. One team, zero hand-offs.",
  },
  {
    id: "05",
    title: "Fast but composed",
    description: "We move in weeks, not quarters. Speed without chaos, urgency without cutting corners.",
  },
  {
    id: "06",
    title: "Outcome-driven",
    description: "You don't get decks and wireframes. You get shipped products that work.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Left column — narrative */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="annotation">About</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Serious about outcomes.
                <br />
                <span className="text-muted">Curious about methods.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Great digital products aren&apos;t rare because they&apos;re
                impossible. They&apos;re rare because teams don&apos;t know where
                to start, what to prioritize, or how to ship fast without cutting
                quality.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Hyperactive closes that gap. We&apos;re a boutique, AI-native
                product studio that helps ambitious teams bring ideas to
                life—end to end.
              </p>

              {/* Highlighted callout */}
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className="mt-8 flex items-start gap-3 rounded-md border-l-2 border-accent bg-accent-muted px-4 py-3"
              >
                <svg
                  className="h-4 w-4 text-accent mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium text-foreground">
                  You don&apos;t just get ideas. You get shipped outcomes.
                </span>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right column — differentiator grid with IDs */}
          <div className="lg:col-span-3">
            <div className="grid gap-0 border-t border-border">
              {differentiators.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 0.06}>
                  <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-4 sm:py-5 group transition-colors duration-150 hover:bg-surface-alt/40 px-1">
                    <span className="font-mono text-xs text-muted-light tabular-nums pt-0.5">
                      {item.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
