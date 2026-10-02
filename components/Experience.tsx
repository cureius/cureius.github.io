"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const h = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="path" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHead
          index="05 / path"
          title="Where I've shipped."
        />
        <div ref={ref} className="relative pl-10 sm:pl-16">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-line sm:left-6" />
          <motion.div
            style={{ scaleY: h }}
            className="absolute bottom-0 left-3 top-0 w-px origin-top bg-gradient-to-b from-cyan via-violet to-pink shadow-[0_0_12px_var(--cyan)] sm:left-6"
          />
          <div className="space-y-12">
            {experience.map((e) => (
              <Reveal key={e.company}>
                <div className="relative">
                  <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full bg-cyan shadow-[0_0_16px_3px_var(--cyan)] sm:-left-[58px]" />
                  <div className="spot rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-2xl font-bold">{e.company}</h3>
                      <span className="font-mono text-xs text-cyan">{e.when}</span>
                    </div>
                    <div className="mt-1 text-dim">
                      {e.title} · {e.where}
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-[#b9c3e6]">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="text-violet">▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
