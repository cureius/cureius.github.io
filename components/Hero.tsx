"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile, stats } from "@/lib/data";

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setTxt(word.slice(0, txt.length + 1));
          if (txt.length + 1 === word.length) setTimeout(() => setDel(true), 1100);
        } else {
          setTxt(word.slice(0, txt.length - 1));
          if (txt.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 28 : 70,
    );
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return txt;
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / 1800);
      setN(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const d = setTimeout(() => (raf = requestAnimationFrame(step)), 1800);
    return () => {
      clearTimeout(d);
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rx = useTransform(sy, [-1, 1], [8, -8]);
  const ry = useTransform(sx, [-1, 1], [-10, 10]);
  const ox = useTransform(sx, [-1, 1], [-30, 30]);
  const oy = useTransform(sy, [-1, 1], [-30, 30]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32"
      onPointerMove={(e) => {
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <motion.div
        style={{ x: ox, y: oy }}
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,255,0.35),rgba(0,240,255,0.12)_45%,transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-panel/70 px-4 py-1.5 font-mono text-xs text-dim backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-lime [animation:pulse-ring_1.8s_ease-out_infinite]" />
              <span className="relative h-2 w-2 rounded-full bg-lime" />
            </span>
            open to relocation · visa-sponsored roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.95] tracking-tighter"
          >
            <span className="glitch" data-text="Souraj">
              Souraj
            </span>
            <br />
            <span className="text-grad">Pal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 font-mono text-lg text-dim sm:text-xl"
          >
            {"> "}
            <span className="text-cyan">{role}</span>
            <span className="caret" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[#b9c3e6]"
          >
            I build AI-native products and agentic systems on top of rock-solid
            backends, from open-banking rails serving{" "}
            <b className="text-white">120 lenders</b> to LLM tool-calling and MCP
            servers that turn a week of integration into{" "}
            <b className="text-white">4 hours</b>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan to-violet px-7 py-3.5 font-semibold text-black shadow-[0_0_40px_rgba(0,240,255,0.35)] transition hover:shadow-[0_0_60px_rgba(139,92,255,0.7)]"
            >
              <span className="relative z-10">Explore my work →</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-line bg-panel/60 px-7 py-3.5 font-mono text-sm backdrop-blur transition hover:border-cyan hover:text-cyan"
            >
              github.com/{profile.handle}
            </a>
          </motion.div>
        </div>

        {/* holo core */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="relative mx-auto aspect-square w-full max-w-[420px]"
        >
          <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-cyan/40" />
          <div className="absolute inset-6 animate-[spin_22s_linear_infinite_reverse] rounded-full border border-violet/50" />
          <div className="absolute inset-12 animate-[spin_16s_linear_infinite] rounded-full border border-dotted border-pink/60" />
          <div className="absolute inset-[72px] flex items-center justify-center rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.25),rgba(139,92,255,0.15)_60%,transparent)] shadow-[0_0_80px_rgba(0,240,255,0.35)_inset,0_0_80px_rgba(139,92,255,0.4)]">
            <div className="text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan">
                core
              </div>
              <div className="text-grad text-5xl font-bold">AI</div>
              <div className="font-mono text-[10px] tracking-widest text-dim">
                × ENGINEERING
              </div>
            </div>
          </div>
          {[
            ["MCP", "top-2 left-1/2"],
            ["Agents", "top-1/2 -right-2"],
            ["Kafka", "bottom-2 left-1/3"],
            ["LLM", "top-1/3 -left-3"],
          ].map(([t, pos], i) => (
            <motion.span
              key={t}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${pos} rounded-md border border-line bg-panel/90 px-2.5 py-1 font-mono text-[11px] text-cyan backdrop-blur`}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-line px-4 py-2">
            <div className="text-3xl font-bold text-white">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-dim">
              {s.label}
              {s.note && <span className="text-cyan"> · {s.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
