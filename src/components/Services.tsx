"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    id: "01",
    title: "Product Strategy",
    description: "Ruthless prioritization. Find the highest-leverage path from idea to shipped product.",
    status: "live" as const,
  },
  {
    id: "02",
    title: "Web Development",
    description: "Modern, performant websites and web apps. Built with the latest frameworks.",
    status: "live" as const,
  },
  {
    id: "03",
    title: "Mobile App development",
    description: "Native and cross-platform mobile apps that users actually love to open.",
    status: "live" as const,
  },
  {
    id: "04",
    title: "AI Agents & Workflows",
    description: "Practical AI implementation—agents, automations, and workflows that create real value.",
    status: "live" as const,
  },
  {
    id: "05",
    title: "Product Analytics",
    description: "Instrument, measure, and understand what users actually do. Then decide better.",
    status: "live" as const,
  },
  {
    id: "06",
    title: "Growth & Experimentation",
    description: "A/B testing, experimentation frameworks, and growth strategy grounded in data.",
    status: "live" as const,
  },
  {
    id: "07",
    title: "Design",
    description: "End-to-end product design—research, UX, UI, and systems.",
    status: "pending" as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="annotation">Services</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What we do
              </h2>
            </div>
            <span className="tag">
              <span className="status-dot live" />
              {services.filter((s) => s.status === "live").length} active
            </span>
          </div>
        </AnimatedSection>

        {/* Service list — modular rows with IDs */}
        <div className="mt-12 grid gap-0 border-t border-border">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border py-5 sm:items-center sm:gap-6 transition-colors duration-150 hover:bg-surface-alt/60 px-1 sm:px-2">
                {/* ID */}
                <span className="font-mono text-xs text-muted-light tabular-nums pt-0.5 sm:pt-0">
                  {service.id}
                </span>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <h3 className="text-[15px] font-semibold text-foreground min-w-[160px]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mt-1 sm:mt-0">
                    {service.description}
                  </p>
                </div>

                {/* Status */}
                <span
                  className={`tag ${
                    service.status === "live" ? "tag-active" : "tag-warning"
                  }`}
                >
                  <span
                    className={`status-dot ${service.status}`}
                  />
                  {service.status === "live" ? "live" : "coming soon"}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
