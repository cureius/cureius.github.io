"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, type Track } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotX = useTransform(sy, [-0.5, 0.5], [9, -9]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9]);

  return (
    <Reveal delay={(i % 2) * 0.1}>
      <motion.a
        ref={ref}
        href={p.href}
        target={p.href ? "_blank" : undefined}
        rel="noreferrer"
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
        onPointerMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          x.set(px - 0.5);
          y.set(py - 0.5);
          ref.current!.style.setProperty("--mx", `${px * 100}%`);
          ref.current!.style.setProperty("--my", `${py * 100}%`);
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="spot group block h-full rounded-2xl p-7"
      >
        <div
          className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
          style={{ background: p.hue }}
        />
        <div className="relative">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
            <span style={{ color: p.hue }}>{p.tag}</span>
            {p.href && (
              <span className="text-dim transition group-hover:translate-x-1 group-hover:text-white">
                ↗
              </span>
            )}
          </div>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {p.name}
          </h3>
          <p className="mt-3 max-w-xl text-[#b9c3e6]">{p.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-void/50 px-3 py-1 font-mono text-[11px] text-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

const filters: { id: Track | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "systems", label: "Systems & backend" },
  { id: "ai", label: "AI" },
  { id: "mobile", label: "Mobile" },
];

export default function Projects() {
  const [f, setF] = useState<Track | "all">("all");
  const list = projects.filter((p) => f === "all" || p.tracks.includes(f));
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          index="04 / work"
          title="Things I've built."
          sub="Multi-tenant SaaS, workflow tooling, native mobile and AI apps. Filter by discipline."
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((x) => (
            <button
              key={x.id}
              onClick={() => setF(x.id)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
                f === x.id
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-line text-dim hover:text-white"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2" style={{ perspective: 1200 }}>
          {list.map((p, i) => (
            <Card key={p.id + f} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
