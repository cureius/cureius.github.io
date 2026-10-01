"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="relative px-6 pb-16 pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            {"// 05 / contact"}
          </div>
          <h2 className="mt-4 text-5xl font-bold tracking-tighter sm:text-7xl">
            Let&apos;s build something <span className="text-grad">unreasonable.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-dim">
            Open to senior backend, full-stack and AI/agent engineering roles,
            including relocation and visa sponsorship.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl bg-gradient-to-r from-cyan to-violet px-8 py-4 font-semibold text-black shadow-[0_0_50px_rgba(0,240,255,0.4)]"
            >
              Say hello →
            </a>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(profile.email);
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
              }}
              className="rounded-xl border border-line bg-panel/60 px-6 py-4 font-mono text-sm hover:border-cyan hover:text-cyan"
            >
              {copied ? "✔ copied" : profile.email}
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-6 font-mono text-xs uppercase tracking-widest text-dim">
            <a className="hover:text-cyan" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-cyan" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Reveal>
        <footer className="mt-24 border-t border-line pt-6 font-mono text-[11px] text-dim">
          © {new Date().getFullYear()} {profile.name} · {profile.location} · built with Next.js, Tailwind &amp; too much caffeine
        </footer>
      </div>
    </section>
  );
}
