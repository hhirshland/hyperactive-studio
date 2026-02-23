"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground grid-bg relative overflow-hidden">
      {/* Override grid color for dark background */}
      <style jsx>{`
        section { --grid-line: rgba(255, 255, 255, 0.04); }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy */}
          <div>
            <AnimatedSection>
              <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                Contact
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s build
                <br />
                something great
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/50 max-w-sm">
                Have an idea? Modernizing a product? Exploring what AI can do
                for your business? Let&apos;s talk.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="mailto:hhirshland@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white group"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition-colors group-hover:border-white/20">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  hhirshland@gmail.com
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm">
                {/* Form header bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <span className="status-dot live" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-white/30">
                    new_project.init
                  </span>
                </div>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] mb-4">
                      <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-white">Message sent!</p>
                    <p className="mt-1 text-xs text-white/40">
                      We&apos;ll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-5 text-xs text-white/30 underline underline-offset-2 transition-colors hover:text-white/60"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Smith"
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.05em] text-white/25 mb-1.5 block">
                        Project details
                      </label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your idea..."
                        rows={4}
                        className="w-full resize-none rounded-md border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors focus:border-white/20 focus:outline-none focus:ring-0"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-400">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="mt-1 rounded-md bg-white px-6 py-2.5 text-[13px] font-semibold text-foreground transition-all duration-150 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Sending..." : "Send message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
