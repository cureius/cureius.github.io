"use client";
import Reveal, { SectionHead } from "./Reveal";

const nodes = [
  { x: 20, y: 130, w: 110, label: "Client SDK", c: "#00f0ff" },
  { x: 170, y: 130, w: 110, label: "API gateway", c: "#00f0ff" },
  { x: 330, y: 130, w: 120, label: "Kafka topic", c: "#b6ff3b" },
  { x: 520, y: 45, w: 110, label: "Underwriting", c: "#8b5cff" },
  { x: 520, y: 135, w: 110, label: "Monitoring", c: "#8b5cff" },
  { x: 520, y: 225, w: 110, label: "Analytics", c: "#8b5cff" },
  { x: 690, y: 90, w: 110, label: "PostgreSQL", c: "#5aa0ff" },
  { x: 690, y: 205, w: 110, label: "ClickHouse", c: "#5aa0ff" },
];

const edges = [
  "M130 160 L170 160",
  "M280 160 L330 160",
  "M450 160 C485 160 485 70 520 70",
  "M450 160 L520 160",
  "M450 160 C485 160 485 250 520 250",
  "M630 70 C660 70 660 115 690 115",
  "M630 160 C660 160 660 115 690 115",
  "M630 160 C660 160 660 230 690 230",
  "M630 250 C660 250 660 230 690 230",
];

const cards = [
  [
    "Event-driven by default",
    "Kafka and queues across clouds so services scale and fail independently. Built the backbone behind a platform used by 120 lending institutions.",
  ],
  [
    "Multi-tenant SaaS",
    "Tenant isolation, billing, workflows and configuration at scale: field-service SaaS at GoDeskless, restaurant POS in FoodGrid.",
  ],
  [
    "Integrations that hold up",
    "Regulated open-banking (Account Aggregator), CargoWise freight integrations, payments. Contracts, retries, idempotency.",
  ],
  [
    "Data & delivery",
    "PostgreSQL for transactions, ClickHouse for analytics, Docker and Kubernetes to ship it, CI/CD to keep shipping.",
  ],
];

export default function Systems() {
  return (
    <section id="systems" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          index="01 / systems"
          title="Solid foundations. Built to scale."
          sub="Before any model gets involved, the system has to be right: clean contracts, durable events, sane data models, and services you can operate. This is the part I've shipped the longest."
        />

        <Reveal>
          <div className="brackets spot rounded-2xl p-4 sm:p-8">
            <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-dim">
              <span className="text-cyan">architecture.live</span>
              <span>illustrative event-driven pipeline</span>
            </div>
            <svg viewBox="0 0 820 310" className="w-full" role="img" aria-label="Event-driven architecture: client SDK to API gateway to Kafka to consumers to PostgreSQL and ClickHouse">
              {edges.map((d, i) => (
                <g key={i}>
                  <path id={`e${i}`} d={d} fill="none" stroke="rgba(120,160,255,0.28)" strokeWidth="1.4" strokeDasharray="4 4" />
                  {[0, 1].map((k) => (
                    <circle key={k} r="3.5" fill={i < 2 ? "#00f0ff" : i < 5 ? "#b6ff3b" : "#5aa0ff"}>
                      <animateMotion
                        dur={`${i < 2 ? 1.6 : 2.2}s`}
                        begin={`${(i < 2 ? 0 : i < 5 ? 1.2 : 2.4) + k * 0.9}s`}
                        repeatCount="indefinite"
                      >
                        <mpath href={`#e${i}`} />
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              ))}
              {nodes.map((n) => (
                <g key={n.label}>
                  <rect x={n.x} y={n.y} width={n.w} height="60" rx="10" fill="rgba(10,13,26,0.95)" stroke={n.c} strokeOpacity="0.7" />
                  <text x={n.x + n.w / 2} y={n.y + 35} textAnchor="middle" fontSize="13" fontFamily="var(--font-mono), monospace" fill={n.c}>
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="spot h-full rounded-xl p-5">
                <div className="font-mono text-xs uppercase tracking-widest text-lime">{t}</div>
                <p className="mt-2 text-sm text-[#b9c3e6]">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
