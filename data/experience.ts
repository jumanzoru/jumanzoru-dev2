export interface ExperienceEntry {
  company: string
  role: string
  location?: string
  start: string // YYYY-MM-DD
  end?: string // YYYY-MM-DD, omit for Present
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Google',
    role: 'Software Engineer Fellow (G-SWEP via BASTA)',
    location: 'Remote',
    start: '2026-03-01',
    highlights: [
      'Designing Pulsyon, an event-driven observability platform using Node.js, Redis Streams, and PostgreSQL to ingest and analyze synthetic service telemetry across a multi-tenant architecture.',
      'Building ingestion and analytics APIs computing latency percentiles, error rates, and uptime metrics from high-volume event streams for backend performance monitoring.',
      'Implementing secure multi-tenant access patterns with JWT authentication, RBAC, Redis caching, and token-bucket rate limiting; containerizing services and configuring CI/CD deployment to Google Cloud Run.',
    ],
  },
  {
    company: 'Big Strategy Labs (Google-executive-led startup initiative)',
    role: 'Software Engineer (via UCSD CSES)',
    location: 'San Diego, CA',
    start: '2025-11-01',
    highlights: [
      'Selected for Google-advised initiative building startup-company matching platform in React, Next.js, TypeScript, and MongoDB; architecting component library and admin workflows for multi-stakeholder ecosystem.',
      'Built reusable UI component system with TypeScript/Tailwind reducing development time ~35% across team, establishing design tokens, routing patterns, and layout conventions for scalable frontend architecture.',
      'Implementing role-based admin dashboards and application review workflows for multi-stakeholder platform.',
    ],
  },
  {
    company: 'Triton Software Engineering',
    role: 'Software Engineer',
    location: 'San Diego, CA',
    start: '2025-11-01',
    highlights: [
      'Built reusable React component systems for a MERN nonprofit platform, standardizing shared UI patterns across user-facing pages and improving consistency and maintainability.',
      'Created Contact Us workflow with frontend form submission, backend API routes, and Nodemailer integration, routing inbound inquiries to nonprofit staff.',
    ],
  },
  {
    company: 'NextHelper (real-time services marketplace startup)',
    role: 'Software Engineer Intern',
    location: 'Remote',
    start: '2025-11-01',
    end: '2026-02-01',
    highlights: [
      'Shipped 15+ production features for a 500+ user marketplace, improving request-to-service conversion and reducing friction across task flows via iterative UI enhancements.',
      'Refactored UI state management and API request handling in React/TypeScript to improve data consistency and responsiveness across core workflows.',
    ],
  },
  {
    company: 'UC San Diego CSE Department (Prof. Sanjoy Dasgupta Research Group)',
    role: 'Machine Learning Research Assistant',
    location: 'San Diego, CA',
    start: '2025-09-01',
    end: '2025-12-01',
    highlights: [
      'Built interpretability tooling (PyTorch, SHAP, counterfactuals) reducing experiment iteration cycles by ~50%.',
      'Benchmarked explanation reliability across 3+ model architectures, quantifying interpretability variance.',
      'Designed structured, reproducible pipelines enabling zero-setup replication of experiments for research peers.',
    ],
  },
  {
    company: 'Rosas Demolition & Son',
    role: 'Software Engineer',
    location: 'Remote',
    start: '2025-07-01',
    end: '2025-12-01',
    highlights: [
      'Developed React/TypeScript/Next.js website for demolition contractor; implemented contact forms and service pages generating 20+ monthly client inquiries and digitizing lead capture.',
    ],
  },
  {
    company: 'UC San Diego Muir College Council',
    role: 'Webmaster & Director',
    location: 'San Diego, CA',
    start: '2025-09-01',
    highlights: [
      'Own end-to-end MCC web platform in Next.js/React/TypeScript + Tailwind, serving 4,300+ Muir students.',
      'Implemented Google Calendar API ingestion (GCP); parsed and normalized event data into typed TS models.',
      'Improved maintainability by enforcing typed contracts, shared utilities, and consistent UI conventions.',
    ],
  },
]
