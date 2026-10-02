"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { traceSteps } from "@/lib/data";
import Reveal, { SectionHead } from "./Reveal";

const color: Record<string, string> = {
  goal: "text-white",
  plan: "text-violet",
  tool: "text-cyan",
  obs: "text-dim",
  eval: "text-pink",
  done: "text-lime",
};
const label: Record<string, string> = {
  goal: "GOAL",
  plan: "PLAN",
  tool: "TOOL",
  obs: "OBS ",
  eval: "EVAL",
  done: "DONE",
};

export default function AgentTrace() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const iv = setInterval(() => setN((x) => Math.min(x + 1, traceSteps.length)), 900);
    return () => clearInterval(iv);
  }, [inView, run]);

  return (
    <section id="agents" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          index="02 / ai & agents"
          title="Then I put AI on top of it."
          sub="Agents are only as good as the systems under them. I design the loop (planner, tools, observations, critic) and ground it in real backends. Here's an illustrative replay of an agent run."
        />
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div ref={ref} className="brackets spot rounded-2xl">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3 font-mono text-xs text-dim">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                <span className="ml-3">agent.trace — run #{run + 1}</span>
                <button
                  onClick={() => {
                    setN(0);
                    setRun((r) => r + 1);
                  }}
                  className="ml-auto rounded border border-line px-2 py-0.5 hover:border-cyan hover:text-cyan"
                >
                  ↻ replay
                </button>
              </div>
              <div className="min-h-[340px] space-y-3 p-6 font-mono text-[13px] leading-relaxed">
                <AnimatePresence>
                  {traceSteps.slice(0, n).map((s, i) => (
                    <motion.div
                      key={`${run}-${i}`}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-4"
                    >
                      <span className={`w-10 shrink-0 font-bold ${color[s.kind]}`}>
                        {label[s.kind]}
                      </span>
                      <span className={color[s.kind]}>{s.text}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {n < traceSteps.length && inView && (
                  <div className="caret text-dim">thinking</div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="space-y-4">
            {[
              ["Tool design", "Narrow, typed tools the model can't misuse. MCP servers that cut a client's integration from 1 week to 4 hours."],
              ["Grounding", "Answers cite the evidence they came from. No evidence, no answer."],
              ["Evals & critics", "Self-checks and test sets, so 'it seems to work' becomes a number."],
              ["Production reality", "Kafka-backed, multi-tenant, observable. Agents live inside real systems, not slide decks."],
            ].map(([t, d]) => (
              <div key={t} className="spot rounded-xl p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-cyan">
                  {t}
                </div>
                <p className="mt-2 text-sm text-[#b9c3e6]">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
