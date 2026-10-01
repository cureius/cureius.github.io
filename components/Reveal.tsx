"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
        {"// " + index}
      </div>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-2xl text-dim">{sub}</p>}
    </Reveal>
  );
}
