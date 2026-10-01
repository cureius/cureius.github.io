"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  ["agents", "Agents"],
  ["stack", "Stack"],
  ["work", "Work"],
  ["path", "Path"],
  ["contact", "Contact"],
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: w }}
        className="h-[2px] origin-left bg-gradient-to-r from-cyan via-violet to-pink"
      />
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-line bg-void/60 px-5 py-2.5 backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm tracking-widest text-cyan">
          {"<"}
          {profile.handle}
          {" />"}
        </a>
        <ul className="hidden gap-7 font-mono text-xs uppercase tracking-widest text-dim md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="transition hover:text-cyan">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-cyan px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(0,240,255,0.5)] transition hover:shadow-[0_0_34px_rgba(0,240,255,0.9)]"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
