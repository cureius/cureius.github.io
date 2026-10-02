"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "[ ok ] mounting /dev/souraj",
  "[ ok ] loading neural field ........ 140 nodes",
  "[ ok ] starting services ........... kafka · postgres · k8s",
  "[ ok ] spawning agents ............. planner · tools · critic",
  "[ ok ] connecting MCP servers ...... 3 online",
  "[ ok ] compiling experience ........ 4+ yrs",
  "[ >> ] welcome, human.",
];

export default function Boot() {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }
    const iv = setInterval(() => setShown((s) => s + 1), 260);
    const end = setTimeout(() => {
      sessionStorage.setItem("booted", "1");
      setDone(true);
    }, lines.length * 260 + 500);
    return () => {
      clearInterval(iv);
      clearTimeout(end);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void"
          exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[min(560px,90vw)] font-mono text-xs text-cyan sm:text-sm">
            {lines.slice(0, shown).map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={l.includes(">>") ? "mt-2 text-lime" : ""}
              >
                {l}
              </motion.div>
            ))}
            <div className="caret mt-1 h-5" />
            <div className="mt-6 h-px w-full overflow-hidden bg-line">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-violet"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: lines.length * 0.26, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
