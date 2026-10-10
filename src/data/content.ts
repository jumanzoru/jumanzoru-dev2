export type Entry = {
  date: string;
  title: string;
  subtitle?: string;
  role: string;
  body: string;
  href?: string;
};

export type Section = {
  name: string;
  items: Entry[];
};

export const TABS = ["work", "projects", "writing", "personal"] as const;
export type Tab = (typeof TABS)[number];

export const CONTENT: Record<Tab, Section[]> = {
  work: [
    {
      name: "experience",
      items: [
        {
          date: "Sep 2026 – Present",
          title: "San Diego Supercomputer Center",
          role: "Software Engineer Intern",
          body: "Continuing to build software for research workflows on academic supercomputing infrastructure.",
        },
        {
          date: "Jun 2026 – Aug 2026",
          title: "San Diego Supercomputer Center",
          role: "Software Engineer Intern",
          body: "Built a research platform for PDF ingestion, paper comparison, evidence-backed synthesis, and source-grounded Q&A.",
        },
        {
          date: "Mar 2026 – Sep 2026",
          title: "Google",
          role: "Software Engineering Fellow (V-SWEP)",
          body: "Developed a stronger algorithm foundation through technical mentorship and a 600-plus problem practice track.",
        },
        {
          date: "Nov 2025 – Feb 2026",
          title: "NextHelper",
          role: "Software Engineer Intern",
          body: "Shipped React and TypeScript features across service requests, provider matching, and customer workflows.",
        },
        {
          date: "Jun 2025 – Aug 2025",
          title: "Rosas Demolition & Son",
          role: "Software Engineer Intern",
          body: "Built an operations platform for intake, pricing, quoting, scheduling, and job tracking.",
        },
      ],
    },
    {
      name: "research",
      items: [
        {
          date: "Sep 2025 – Dec 2025",
          title: "University of California, San Diego",
          role: "Research Assistant — Machine Learning Interpretability",
          body: "Studied explanation methods across models and inputs, then evaluated grounding in RAG systems through attribution, similarity, and NLI signals.",
        },
      ],
    },
  ],
  projects: [
    {
      name: "built",
      items: [
        {
          date: "",
          title: "Big Strategy Labs",
          subtitle: "– Startup Incubator Platform",
          role: "React, TypeScript, Next.js, Prisma",
          body: "Helped standardize a Next.js platform with reusable React workflows, typed APIs, and persistent data models.",
          href: "#",
        },
        {
          date: "",
          title: "Pulsyon",
          subtitle: "– Backend Observability Platform",
          role: "TypeScript, Node.js, Redis Streams, PostgreSQL, Docker, GCP",
          body: "Built multi-tenant telemetry ingestion with Redis Streams, retries, batched writes, caching, and authenticated APIs.",
          href: "#",
        },
        {
          date: "",
          title: "CodeRewind",
          subtitle: "– Open-Source CPython IDLE Extension",
          role: "Python, Tkinter, CPython, JSON",
          body: "Created nonblocking editor-event replay with variable speed, timeline seeking, viewport restoration, and migrations.",
          href: "#",
        },
      ],
    },
  ],
  writing: [
    {
      name: "posts",
      items: [],
    },
  ],
  personal: [
    {
      name: "outside of work",
      items: [
        {
          date: "ongoing",
          title: "Anime",
          role: "Currently watching",
          body: "Currently making my way through Steel Ball Run, the latest part of JoJo's Bizarre Adventure.",
        },
      ],
    },
  ],
};

