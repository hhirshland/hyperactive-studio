"use client";

import AnimatedSection from "./AnimatedSection";

const clients = [
  { name: "Resolute Ventures", type: "Venture Fund" },
  { name: "Selby Lane", type: "Venture Fund" },
  { name: "Coursecast", type: "Golf Startup" },
];

export default function Clients() {
  return (
    <section className="py-16 lg:py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px flex-1 bg-border" />
            <span className="annotation whitespace-nowrap">trusted by</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-20">
          {clients.map((client, i) => (
            <AnimatedSection key={client.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1 group cursor-default">
                <span className="text-lg font-semibold tracking-tight text-muted-light transition-colors duration-150 group-hover:text-foreground">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-light/60">
                  {client.type}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
