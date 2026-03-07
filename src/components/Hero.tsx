"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-14 grid-bg">
      {/* Corner annotation */}
      <div className="absolute top-20 right-6 lg:right-12 font-mono text-[11px] text-muted-light hidden sm:block">
        v1.1 — 2026
      </div>

      {/* Grid accent line - left */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-12 w-px bg-border-strong/40" />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28 w-full">
        <div className="max-w-3xl pl-0 lg:pl-6">
          {/* Status tag */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="tag tag-active">
              <span className="status-dot live" />
              accepting clients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-foreground"
          >
            Transform your enterprise
            <br />
            for the <span className="hand-note">AI Era</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted"
          >
            Hyperactive is an AI agency that helps enterprises identify
            high-impact AI opportunities, implement real workflows, and upskill
            their teams.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-[13px] font-medium text-white transition-all duration-150 hover:bg-primary-light"
            >
              Work with us
              <svg
                className="ml-2 h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-6 py-3 text-[13px] font-medium text-foreground transition-all duration-150 hover:bg-surface-alt hover:border-border-strong"
            >
              See our work
            </a>
          </motion.div>
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="mt-20 lg:mt-28 border-t border-border pt-8 lg:pl-6"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Strategic Thinkers",
                description:
                  "We don\u2019t just implement \u2014 we diagnose. Every engagement starts with understanding your business, your constraints, and where AI can create the most leverage.",
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
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.6 + i * 0.08 }}
                className="group rounded-lg border border-border bg-surface p-5 transition-all duration-200 hover:border-border-strong hover:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-muted font-mono text-[10px] font-semibold text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
