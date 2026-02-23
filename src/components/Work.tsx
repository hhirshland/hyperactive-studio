"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Grove Insights",
    logo: "/logos/grove-insights.svg",
    type: "Web Platform",
    tags: ["Next.js", "Full-Stack", "Analytics"],
    description: "AI moderated user interviews to help uncover customer painpoints and opportunities.",
    iteration: "v3.0",
    status: "shipped",
    link: "https://groveinsights.ai",
  },
  {
    title: "Thrive Habits",
    logo: "/logos/thrive-habits.png",
    type: "Mobile App",
    tags: ["iOS", "Habit Tracking", "Wellness"],
    description: "A habit-building app designed to help users create and maintain positive daily routines.",
    iteration: "v1.0",
    status: "shipped",
  },
  {
    title: "40 Ball",
    logo: "/logos/40-ball.png",
    type: "Mobile App",
    tags: ["iOS", "Game Design", "Growth"],
    description: "A mobile app to host 40 ball golf competitions with your friends.",
    iteration: "v1.4",
    status: "shipped",
  },
  {
    title: "First to Worst",
    logo: "/logos/first-to-worst.png",
    type: "Mobile App",
    tags: ["iOS", "Product Design", "Launch"],
    description: "A mobile app version of the First to Worst board game.",
    iteration: "v2.1",
    status: "shipped",
  },
  {
    title: "The Arcade",
    logo: "/logos/the-arcade.png",
    type: "Web Platform",
    tags: ["React", "Interactive", "Experimentation"],
    description: "An interactive digital experience pushing the boundaries of web technology.",
    iteration: "v1.0",
    status: "shipped",
  },
  {
    title: "Resolute Winterfest",
    logo: "/logos/resolute-winterfest.png",
    type: "Event Website",
    tags: ["Next.js", "Event Planning", "Design"],
    description: "A trip coordination site for Resolute Ventures' annual ski retreat at Alta & Snowbird.",
    iteration: "v1.0",
    status: "shipped",
    link: "https://camp-resolute-winter-2026.vercel.app/",
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
                What we&apos;ve shipped
              </h2>
              <p className="mt-3 text-base text-muted max-w-md">
                A selection of products we&apos;ve taken from concept to launch.
              </p>
            </div>
            <span className="annotation-accent">
              {projects.length} projects
            </span>
          </div>
        </AnimatedSection>

        {/* Project cards — modular blocks */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => {
            const card = (
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="group relative flex h-full flex-col rounded-lg border border-border bg-surface overflow-hidden transition-all duration-200 hover:border-border-strong hover:shadow-md"
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
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
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
            );

            return (
              <AnimatedSection key={project.title} delay={i * 0.08} className="h-full">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
                    {card}
                  </a>
                ) : (
                  <div className="h-full">{card}</div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
