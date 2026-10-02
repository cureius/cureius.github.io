"use client";
import { motion } from "framer-motion";
import { stackMap } from "@/lib/data";
import { SectionHead } from "./Reveal";

const ringStyle = [
  { r: 80, c: "#b6ff3b", d: 40 },
  { r: 150, c: "#8b5cff", d: 55 },
  { r: 230, c: "#00f0ff", d: 75 },
  { r: 310, c: "#5aa0ff", d: 95 },
  { r: 385, c: "#ff2fd0", d: 115 },
];
const ringName = [
  "Engineering core",
  "Languages",
  "Frameworks & apps",
  "Infra & data",
  "AI layer",
];

export default function StackMap() {
  return (
    <section id="stack" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          index="03 / range"
          title="The whole stack. Core to cloud to AI."
          sub="Electronics & Communication by training, product engineer by practice. Solid engineering fundamentals at the centre, with AI as one layer on top. I'm curious about every layer, from the schema to the model call to the Kubernetes pod."
        />

        {/* orbital (desktop) */}
        <div className="relative mx-auto hidden h-[800px] w-full max-w-[800px] md:block">
          {stackMap.map((ring, ri) => {
            const { r, c, d } = ringStyle[ri];
            return (
              <div key={ri}>
                <div
                  className="absolute left-1/2 top-1/2 rounded-full border border-dashed"
                  style={{
                    width: r * 2,
                    height: r * 2,
                    marginLeft: -r,
                    marginTop: -r,
                    borderColor: c + "44",
                  }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2"
                  style={{ width: 0, height: 0 }}
                  animate={{ rotate: ri % 2 ? -360 : 360 }}
                  transition={{ duration: d, repeat: Infinity, ease: "linear" }}
                >
                  {ring.items.map((it, i) => {
                    const a = (i / ring.items.length) * Math.PI * 2;
                    return (
                      <motion.span
                        key={it}
                        className="absolute whitespace-nowrap rounded-md border bg-panel/90 px-2.5 py-1 font-mono text-[11px] backdrop-blur"
                        style={{
                          left: Math.cos(a) * r,
                          top: Math.sin(a) * r,
                          borderColor: c + "88",
                          color: c,
                          x: "-50%",
                          y: "-50%",
                          boxShadow: `0 0 14px ${c}33`,
                        }}
                        animate={{ rotate: ri % 2 ? 360 : -360 }}
                        transition={{ duration: d, repeat: Infinity, ease: "linear" }}
                        whileHover={{ scale: 1.25 }}
                      >
                        {it}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.5),rgba(139,92,255,0.2))] font-mono text-xs font-bold tracking-widest text-white shadow-[0_0_60px_rgba(0,240,255,0.6)]">
            ME
          </div>
        </div>

        {/* flat (mobile) */}
        <div className="grid gap-4 md:hidden">
          {stackMap.map((ring, ri) => (
            <div key={ri} className="spot rounded-xl p-4">
              <div
                className="mb-3 font-mono text-xs uppercase tracking-widest"
                style={{ color: ringStyle[ri].c }}
              >
                {ringName[ri]}
              </div>
              <div className="flex flex-wrap gap-2">
                {ring.items.map((it) => (
                  <span
                    key={it}
                    className="rounded border px-2 py-1 font-mono text-xs"
                    style={{
                      borderColor: ringStyle[ri].c + "66",
                      color: ringStyle[ri].c,
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden justify-center gap-6 font-mono text-xs md:flex">
          {ringName.map((n, i) => (
            <span key={n} style={{ color: ringStyle[i].c }}>
              ● {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
