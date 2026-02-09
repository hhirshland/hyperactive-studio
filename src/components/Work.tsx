"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "First to Worst",
    type: "Mobile App",
    tags: ["iOS", "Product Design", "Launch"],
    description: "A sports app experience — designed, built, and shipped from concept to App Store.",
    iteration: "v2.1",
    status: "shipped",
  },
  {
    title: "40 Ball",
    type: "Mobile App",
    tags: ["iOS", "Game Design", "Growth"],
    description: "A mobile game with engaging mechanics and a polished user experience.",
    iteration: "v1.4",
    status: "shipped",
  },
  {
    title: "Grove",
    type: "Web Platform",
    tags: ["Next.js", "Full-Stack", "Analytics"],
    description: "A modern web platform built for scale with thoughtful UX decisions throughout.",
    iteration: "v3.0",
    status: "shipped",
  },
  {
    title: "The Arcade",
    type: "Web Platform",
    tags: ["React", "Interactive", "Experimentation"],
    description: "An interactive digital experience pushing the boundaries of web technology.",
    iteration: "v1.0",
    status: "shipped",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 lg:py-32 bg-surface-alt grid-bg-dense border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="annotation">Case Studies</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Shipped, not shelved
              </h2>
              <p className="mt-3 text-base text-muted max-w-md">
                A selection of products we&apos;ve taken from concept to live.
              </p>
            </div>
            <span className="annotation-accent">
              {projects.length} projects
            </span>
          </div>
        </AnimatedSection>

        {/* Project cards — modular blocks */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="group relative rounded-lg border border-border bg-surface overflow-hidden transition-all duration-200 hover:border-border-strong hover:shadow-md"
              >
                {/* Top bar — mimics a tool/window header */}
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-surface-alt/50">
                  <div className="flex items-center gap-2">
                    <span className="status-dot live" />
                    <span className="font-mono text-[11px] text-muted">{project.type}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-light">{project.iteration}</span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[3px] border border-border bg-surface-alt px-2 py-0.5 font-mono text-[10px] text-muted-light uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom annotation */}
                <div className="flex items-center justify-between border-t border-border px-4 py-2 bg-surface-alt/30">
                  <span className="annotation">status: {project.status}</span>
                  <svg
                    className="h-3.5 w-3.5 text-muted-light transition-colors group-hover:text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
