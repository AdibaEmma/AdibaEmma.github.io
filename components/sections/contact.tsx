"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

type Status = { type: "success" | "error" | null; message: string };

export function ContactSection() {
  const [data, setData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: null, message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      setStatus({ type: "success", message: "Sent. I&rsquo;ll reply within 48 hours." });
      setData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Something failed. Try again or email me directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="hero-glow" aria-hidden />

      <div className="container-edit relative">
        <div className="flex items-baseline justify-between mb-12">
          <p className="section-tag">(Inbox ／ 05)</p>
          <p className="eyebrow hidden md:block">— Slot open · Q3</p>
        </div>

        <Reveal>
          <h1 className="display-xl font-display leading-[0.9]">
            Send a
            <br />
            <span className="italic accent-text">brief.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 max-w-xl font-display text-xl md:text-2xl text-[var(--foreground)]/80 leading-snug">
            Open to engineering work, build collabs, ML experiments, and venture
            conversations. <span className="italic accent-text">One inbox.</span>
          </p>
        </Reveal>

        {/* Lead-qualifier: what I'm good for / not */}
        <Reveal delay={0.15} className="mt-16 grid md:grid-cols-2 gap-px bg-[var(--rule)] border border-hairline rounded-md overflow-hidden">
          <div className="bg-[var(--background)] p-6 md:p-8">
            <p className="eyebrow mb-4">
              <span className="text-[var(--accent)]">✓</span> What I&rsquo;m good for
            </p>
            <ul className="space-y-2 font-display text-xl md:text-2xl leading-snug">
              <li>· Backend architecture &amp; distributed systems</li>
              <li>· Greenfield products from zero → live</li>
              <li>· Fintech, payments, KYC &amp; trading systems</li>
              <li>· Rescuing scope-creep codebases</li>
              <li>· Embedded engineering for small teams</li>
            </ul>
          </div>
          <div className="bg-[var(--background)] p-6 md:p-8">
            <p className="eyebrow mb-4">
              <span className="text-[var(--ink-muted)]">×</span> What I&rsquo;m not
            </p>
            <ul className="space-y-2 font-display text-xl md:text-2xl leading-snug text-[var(--ink-secondary)]">
              <li>· A logo / brand designer</li>
              <li>· A part-time contractor &lt; 4 weeks</li>
              <li>· A Wordpress / Shopify dev</li>
              <li>· Available for crypto-only projects</li>
              <li>· Booked through end of Q2 — replies slow</li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          {/* Sidebar info */}
          <div className="lg:col-span-4 space-y-10">
            <Reveal>
              <p className="eyebrow mb-3">(Direct line)</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-edit font-display text-2xl md:text-3xl break-all"
              >
                {siteConfig.email}
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">(Phone)</p>
              <ul className="space-y-1 label-mono">
                {siteConfig.phone.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p}`} className="link-edit">
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="eyebrow mb-3">(Location)</p>
              <p className="font-display text-xl">{siteConfig.location}</p>
              <p className="label-mono text-[var(--muted-foreground)] mt-1">
                Time zone: GMT+0
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="eyebrow mb-3">(Elsewhere)</p>
              <ul className="space-y-1 label-mono uppercase">
                <li>
                  <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="link-edit">
                    ↗ GitHub
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="link-edit">
                    ↗ LinkedIn
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="link-edit">
                    ↗ Twitter
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-8">
            <form onSubmit={submit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <Field
                  label="01 — Name"
                  name="name"
                  value={data.name}
                  onChange={handle}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="02 — Email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handle}
                  placeholder="hello@domain.com"
                  required
                />
              </div>
              <Field
                label="03 — Subject"
                name="subject"
                value={data.subject}
                onChange={handle}
                placeholder="What&rsquo;s this about"
                required
              />
              <Field
                label="04 — Brief"
                name="message"
                value={data.message}
                onChange={handle}
                placeholder="Tell me about the work"
                required
                textarea
              />

              {status.type && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    status.type === "success"
                      ? "label-mono accent-text"
                      : "label-mono text-red-500"
                  }
                >
                  {status.message}
                </motion.p>
              )}

              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <p className="label-mono text-[var(--muted-foreground)]">
                  ※ I respond within 48 hours
                </p>
                <Magnetic strength={0.25}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-magnetic btn-magnetic--primary disabled:opacity-50"
                  >
                    <span>{submitting ? "Transmitting…" : "Transmit"}</span>
                    <span aria-hidden>{submitting ? "⟳" : "→"}</span>
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block group">
      <span className="eyebrow block mb-3">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={6}
          className="w-full bg-transparent border-b border-hairline pb-3 text-xl md:text-2xl font-display focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted-foreground)]/50 resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-transparent border-b border-hairline pb-3 text-xl md:text-2xl font-display focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted-foreground)]/50"
        />
      )}
    </label>
  );
}
