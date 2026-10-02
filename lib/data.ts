export const profile = {
  name: "Souraj Pal",
  handle: "cureius",
  role: "Senior Software Engineer",
  email: "paulsouraj99@gmail.com",
  github: "https://github.com/cureius",
  linkedin: "https://linkedin.com/in/souraj-pal",
  location: "Kolkata, India",
  roles: [
    "backend & distributed systems",
    "full-stack product engineer",
    "FinTech & open-banking dev",
    "mobile builder: iOS, Android, Flutter",
    "AI-native & agentic systems",
  ],
};

export const stats = [
  { label: "Years shipping", value: 4, suffix: "+" },
  { label: "Lending institutions served", value: 120, suffix: "" },
  { label: "Integration time", value: 4, suffix: "h", note: "down from 1 week" },
  { label: "Manual effort cut", value: 80, suffix: "%" },
];

export type Track = "systems" | "ai" | "mobile";

export const projects: {
  id: string;
  name: string;
  tag: string;
  blurb: string;
  stack: string[];
  href?: string;
  hue: string;
  tracks: Track[];
}[] = [
  {
    id: "foodgrid",
    name: "FoodGrid",
    tag: "Systems · Multi-tenant SaaS",
    blurb:
      "Multi-tenant restaurant management and POS platform. Quarkus (Java) backend with JWT auth, Next.js frontend, Razorpay payments, Dockerised.",
    stack: ["Quarkus", "Java", "Next.js", "Razorpay", "Docker"],
    href: "https://github.com/cureius/FoodGrid",
    hue: "#8b5cff",
    tracks: ["systems"],
  },
  {
    id: "leo",
    name: "LEO",
    tag: "AI · Native apps",
    blurb:
      "AI-first calendar and task timeline. Native SwiftUI + SwiftData on Apple platforms, React + Tauri on web, Supabase backend, LLM tool-calling to plan your day.",
    stack: ["SwiftUI", "Tauri", "React", "Supabase", "LLM tools"],
    href: "https://github.com/cureius/LEO",
    hue: "#00f0ff",
    tracks: ["ai", "mobile"],
  },
  {
    id: "streamliner",
    name: "Streamliner",
    tag: "Systems · ERP",
    blurb:
      "Manufacturing ERP that cut manual effort by 80%. Process modelling, data integrity and workflows for a real shop floor.",
    stack: ["ERP", "Data modelling", "Workflows"],
    hue: "#b6ff3b",
    tracks: ["systems"],
  },
  {
    id: "workflow",
    name: "WorkFlowBuilder",
    tag: "Systems · Workflow engine",
    blurb:
      "Visual workflow builder: compose nodes into automations. The same pattern I shipped in production at GoDeskless.",
    stack: ["Next.js", "Prisma", "TypeScript"],
    href: "https://github.com/cureius/WorkFlowBuilder",
    hue: "#ff2fd0",
    tracks: ["systems"],
  },
  {
    id: "pocket",
    name: "Pocket",
    tag: "Android · FinTech",
    blurb:
      "Personal finance app in Kotlin with Clean Architecture and SMS-based transaction sync.",
    stack: ["Kotlin", "Compose", "Clean Arch"],
    href: "https://github.com/cureius/Pocket",
    hue: "#00f0ff",
    tracks: ["mobile"],
  },
  {
    id: "skycast",
    name: "SkyCast",
    tag: "Flutter",
    blurb: "Weather app with Bloc state management and geolocation.",
    stack: ["Flutter", "Dart", "Bloc"],
    href: "https://github.com/cureius/SkyCastApp",
    hue: "#8b5cff",
    tracks: ["mobile"],
  },
];

export const experience = [
  {
    company: "Winmore (Lanetix)",
    title: "Senior Software Engineer · Forward Deployed",
    when: "May 2026 — Now",
    where: "Remote",
    points: [
      "Embedded with freight-forwarding clients and offshore teams",
      "Led the end-to-end CargoWise integration for clients such as JAS",
    ],
  },
  {
    company: "Finfactor Technologies",
    title: "Senior Software Engineer",
    when: "Apr 2025 — May 2026",
    where: "Pune, India",
    points: [
      "Open-banking infrastructure on India's Account Aggregator framework",
      "Underwriting & monitoring platform used by 120 lending institutions",
      "Event-driven services on Kafka and Kubernetes",
      "Client SDKs + an MCP server: integration time 1 week → 4 hours",
    ],
  },
  {
    company: "GoDeskless Inc",
    title: "Associate → Senior Software Engineer",
    when: "Jan 2022 — Apr 2025",
    where: "Pune, India",
    points: [
      "Field-service SaaS: Android apps with live tracking and video calling",
      "Workflow builder and tenant billing",
      "Best Performer Award, Q3 2022 and Q4 2023",
      "Worked full time on US evening shifts while finishing a B.Tech",
    ],
  },
];

export const stackMap = [
  { ring: 0, items: ["System design", "Event-driven", "Data modelling", "API design"] },
  { ring: 1, items: ["Java", "Kotlin", "TypeScript", "Python", "Swift", "Ruby"] },
  {
    ring: 2,
    items: ["Quarkus", "Spring Boot", "Node.js", "Rails", "React", "Next.js", "Flutter", "SwiftUI"],
  },
  {
    ring: 3,
    items: ["Kafka", "PostgreSQL", "ClickHouse", "AWS", "Kubernetes", "Docker", "CI/CD"],
  },
  { ring: 4, items: ["LLM tool-calling", "MCP", "Agents", "Evals"] },
];

export const traceSteps = [
  { kind: "goal", text: "User: “Reconcile today's failed payouts and tell me why.”" },
  { kind: "plan", text: "Plan → fetch payouts, group by failure code, inspect top cause" },
  { kind: "tool", text: "call payouts.list({ status: \"failed\", day: \"today\" })" },
  { kind: "obs", text: "→ 37 rows · 3 failure codes" },
  { kind: "tool", text: "call logs.search({ code: \"BANK_TIMEOUT\" })" },
  { kind: "obs", text: "→ spike at 14:02 UTC · single upstream" },
  { kind: "eval", text: "self-check: evidence cites ≥2 sources ✔" },
  { kind: "done", text: "Answer: 31/37 failures = one upstream timeout. Retry queued." },
];
