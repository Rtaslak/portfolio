# Xinai Portfolio Case Study — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Xinai (autonomous AI pentest agent) as a second portfolio case study by refactoring the hardcoded single project into a data-driven, reusable multi-project structure.

**Architecture:** Extract content into `src/data/projects.js`; convert `Project.jsx` into a reusable `ProjectCase.jsx` driven by a `project` prop; `App.jsx` maps over the projects array. RFID renders pixel-identical; Xinai renders below it. Plus an authored HTML pentest report artifact for jasonofbh.net.

**Tech Stack:** Vite + React 19 + React Router 7 + Tailwind 4 + Framer Motion. No test runner — verification via `npm run build`, `npm run lint`, and visual check in `npm run dev`.

**Spec:** `docs/superpowers/specs/2026-06-08-xinai-portfolio-case-study-design.md`

---

## Project Shape (reference)

Every object in `projects.js` follows this shape. Fields map 1:1 to a section in `ProjectCase.jsx`:

```js
{
  id: string,                 // section id (also React key)
  label: string,              // eyebrow, e.g. "Featured Project"
  title: string,
  company: string,            // accent subtitle line
  description: string,        // centered intro paragraph
  problem:  { heading: string, statement: string, bullets: string[] },
  solution: { heading: string, statement: string, bullets: string[] },
  results:  { label: string, metrics: { value: string, description: string }[] },
  featuresHeading: string,    // centered heading above feature cards
  featuresSubtext: string,    // centered subtext above feature cards
  features: { title: string, desc: string }[],
  screenshots: { src: string, title: string, desc: string }[],
  howItWorksText: string,     // paragraph above the arch flow
  archSteps: { name: string, desc: string, color: string }[],  // color ∈ text-cyan|text-accent|text-green
  techStack: string[],
  reportUrl?: string,         // optional "View sample report" link
}
```

---

## Task 1: Create the projects data file

**Files:**
- Create: `src/data/projects.js`

- [ ] **Step 1: Create `src/data/projects.js` with both project objects**

The RFID object is transcribed verbatim from the current `Project.jsx` (must render identically). The Xinai object is new content from the spec.

```js
export const projects = [
  {
    id: 'project',
    label: 'Featured Project',
    title: 'RFID-Powered Manufacturing Platform',
    company: 'Jason of Beverly Hills · Luxury Jewelry Manufacturing',
    description:
      "Jason of Beverly Hills crafts custom luxury jewelry. Championship rings, celebrity commissions, pieces worth tens of thousands of dollars. Every item passes through multiple production departments by hand. Losing track of a single piece isn't just an error. It's a financial disaster.",
    problem: {
      heading: 'The Problem',
      statement: 'Everything was tracked on paper.',
      bullets: [
        'No one knew where a piece was without physically searching',
        'Items got lost between departments regularly',
        'Salespeople called the floor to check order status',
        'Zero data on bottlenecks, throughput, or delays',
      ],
    },
    solution: {
      heading: 'What I Built',
      statement: 'I built the entire operations platform. Designed, developed, and deployed solo.',
      bullets: [
        "Automatic RFID tracking. Every order's location updated in real time",
        '6 role-based portals. Each team gets exactly the tools they need',
        'Jeweler time tracking, scheduling, estimated delivery predictions',
        'AI design studio, approval workflows, analytics dashboards',
      ],
    },
    results: {
      label: 'Results',
      metrics: [
        { value: '30%', description: 'more orders completed per shift' },
        { value: '90%', description: 'fewer lost or misplaced items' },
        { value: '<1s', description: 'real-time location updates' },
        { value: '0', description: 'manual tracking required' },
      ],
    },
    featuresHeading: 'Not Just Tracking. A Full Operations Platform.',
    featuresSubtext:
      'What started as an RFID tracking tool evolved into the system that runs the entire production floor. Every role has their own view. Every workflow is automated.',
    features: [
      { title: 'Live RFID Tracking', desc: 'Every tagged order tracked automatically as it moves between departments. No scanning, no manual input.' },
      { title: 'Full Location History', desc: "Complete timeline of every order's journey. Every department, station, and timestamp recorded. Full chain of custody for high-value pieces." },
      { title: 'Work Timers', desc: "Tracks each jeweler's time per order at every station. See who's fast, who's stuck, and where bottlenecks form." },
      { title: 'Estimated Finish Time', desc: 'Predicts completion based on historical stage durations and current workload. Late orders flagged automatically.' },
      { title: 'SMS & Email Alerts', desc: 'Automated notifications for order updates, delays, and status changes. Configurable per role with alert preferences.' },
      { title: 'Salesperson Portal', desc: 'Submit orders with images and specs, track status in real time. No floor visits, no phone calls.' },
      { title: 'Manager Command Center', desc: 'Active orders, jeweler assignments, throughput metrics, on-time delivery rates, and capacity planning.' },
      { title: 'Jeweler Scheduling', desc: 'Pre-assign orders to jewelers. Managers set the queue, jewelers see their workload on screen and TV displays.' },
      { title: 'Production Floor TV', desc: 'Live TV displays mounted on the floor showing current orders, department queues, and jeweler assignments.' },
      { title: 'Approval Queue', desc: 'Orders go through manager review before production. Approve, reject, or request changes with full context.' },
      { title: 'Workflow Analytics', desc: 'Throughput analysis, department comparisons, on-time delivery tracking, and root cause analysis for delays.' },
      { title: 'Offsite Tracking', desc: 'Track orders sent to external vendors. Full chain of custody from leaving the facility to return.' },
      { title: 'AI Design Studio', desc: 'AI-powered design generation from text prompts. Style parameters, reference gallery, and design iteration.' },
      { title: 'Designer Workspace', desc: 'Dedicated view for designers to manage iterations, upload concepts, and collaborate on active orders.' },
      { title: 'Hardware Monitoring', desc: 'Real-time health of RFID readers, MQTT connections, WebSocket status, Redis cache, and ECS containers.' },
      { title: 'Security & Audit Logs', desc: 'Full audit trail of user actions, login history, and security events. Role-based access control with MFA.' },
    ],
    screenshots: [
      { src: '/screenshots/login.png', title: 'Authentication', desc: 'Secure login with email/password or Google SSO. Role-based access determines what each user sees after sign-in.' },
      { src: '/screenshots/dashboard.png', title: 'Multi-Location Dashboard', desc: 'Live overview across 4 facilities: Downtown, Beverly Wilshire, HQ, and Las Vegas. Department counts, active orders, and total items at a glance.' },
      { src: '/screenshots/orders.png', title: 'Order Management', desc: '415+ orders tracked end to end. Status, store location, product type, priority, pricing, and due dates. Filterable and searchable.' },
      { src: '/screenshots/rfid-mapping.png', title: 'RFID Reader Mapping', desc: 'Visual wiring of Zebra FX9600 antennas to physical departments. Color-coded connections show tag assignment zones, hold stations, and gate areas.' },
      { src: '/screenshots/orders-gallery.png', title: 'Product Gallery', desc: 'High-resolution images for every order. Managers and salespeople can view pieces with status badges and pricing without visiting the floor.' },
      { src: '/screenshots/approval-queue.png', title: 'Approval Queue', desc: 'Submitted orders land here for manager review. Approve, reject, or request changes with product images and submitter info.' },
      { src: '/screenshots/design-studio.png', title: 'AI Design Studio', desc: 'AI-powered jewelry design tool. Describe a piece, set style parameters, and generate design concepts with a reference gallery.' },
      { src: '/screenshots/diagnostics.png', title: 'System Diagnostics', desc: 'Real-time health of every service: API, Redis cache, MQTT broker, WebSocket connections, and ECS container status.' },
    ],
    howItWorksText:
      "An RFID tag is attached to every order. As it moves between departments, Zebra FX9600 readers detect it automatically. Each reader reports signal strength (RSSI) per antenna, and the system uses that to determine exact location, not just whether an item was seen, but which station it's closest to. Events queue through SQS for reliable async processing, stream via MQTT to the backend, update PostgreSQL, and push live changes to every connected dashboard through WebSockets. Infrastructure is managed with Terraform, auth runs on AWS Cognito with MFA, and Redis cache invalidation stays synced across ECS containers.",
    archSteps: [
      { name: 'Zebra FX9600', desc: 'RFID Scan', color: 'text-green' },
      { name: 'AWS IoT Core', desc: 'MQTT', color: 'text-cyan' },
      { name: 'Node.js', desc: 'Process', color: 'text-accent' },
      { name: 'PostgreSQL', desc: 'Store', color: 'text-cyan' },
      { name: 'Redis', desc: 'Cache', color: 'text-green' },
      { name: 'Socket.IO', desc: 'Push', color: 'text-accent' },
      { name: 'React', desc: 'Display', color: 'text-cyan' },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.IO', 'MQTT', 'AWS ECS', 'AWS IoT Core', 'SQS', 'Cognito', 'Terraform', 'Docker', 'Zebra FX9600', 'RSSI'],
  },

  {
    id: 'xinai',
    label: 'Featured Project',
    title: 'Xinai — Autonomous AI Pentest Agent',
    company: 'Personal R&D · Autonomous Security Agent · TypeScript + Claude Agent SDK',
    description:
      "Xinai is an autonomous penetration-testing agent I designed and built solo — a terminal-native AI operator that can be pointed at a target and independently run a disciplined, multi-phase security assessment. It runs on the Claude Agent SDK with Claude Opus 4.8 doing the reasoning, orchestrating real security tooling through typed MCP wrappers while staying inside hard safety rails. The hard part wasn't calling tools — it was building an autonomous agent that stays in scope, audits everything it does, and reasons like a methodical operator instead of a chatbot.",
    problem: {
      heading: 'The Problem',
      statement: 'Security testing is manual, slow, and hard to automate safely.',
      bullets: [
        'A thorough assessment is hours of repetitive recon, enumeration, and tool-wrangling by hand',
        'LLM agents are powerful but dangerous — they wander out of scope and leave no audit trail',
        'Most AI security tools are thin chat wrappers, not disciplined operators that follow a methodology',
        'The real question: could an agent run a real assessment autonomously without going rogue?',
      ],
    },
    solution: {
      heading: 'What I Built',
      statement: 'An autonomous AI operator with real safety rails. Designed, built, and deployed solo.',
      bullets: [
        'Multi-agent system on the Claude Agent SDK — Opus 4.8 reasoning across specialized recon, web, internal, and loot lanes',
        '19+ real security tools wrapped as typed MCP tools with schema-validated, structured I/O',
        'Hard scope enforcement — out-of-scope targets are blocked before a subprocess ever spawns',
        'Append-only audit log with automatic credential redaction, and CVSS-scored HTML reporting',
      ],
    },
    results: {
      label: 'Results',
      metrics: [
        { value: '19+', description: 'security tools orchestrated as typed MCP wrappers' },
        { value: '4', description: 'specialized agent lanes (recon · web · internal · loot)' },
        { value: '5-phase', description: 'autonomous methodology, recon to report' },
        { value: '100%', description: 'of tool calls scope-checked and audit-logged' },
      ],
    },
    featuresHeading: 'Not Just a Chatbot. A Disciplined Autonomous Operator.',
    featuresSubtext:
      'Xinai blends a conversational AI peer with a methodical security operator — wrapping real tools in typed interfaces, enforcing scope before anything runs, and auditing every action it takes.',
    features: [
      { title: 'Conversational + Operator Duality', desc: 'Talk to it like a knowledgeable peer, or point it at a target and let it run. Same agent, two modes.' },
      { title: '5-Phase Methodology', desc: 'Recon, Discovery, Vuln Testing, Exploitation, Report. Passive-first, interruptible, disciplined.' },
      { title: 'Scope Enforcement (Pre-Spawn)', desc: 'Every target is matched against an allowlist before any subprocess runs. Out-of-scope is hard-blocked, not just logged.' },
      { title: 'Append-Only Audit Log', desc: 'Every tool call recorded with target, exit code, duration, and a hash of its output. Nothing happens off the record.' },
      { title: 'Credential Redaction', desc: 'Secrets are pattern-matched and replaced with salted hashes before they ever touch the database.' },
      { title: 'Multi-Agent Expert Lanes', desc: 'Specialized recon, web, internal/AD, and loot agents fan out in parallel, then consolidate.' },
      { title: 'Typed MCP Tool Registry', desc: '19+ security tools wrapped with Zod-validated I/O, a concurrency semaphore, and per-tool timeouts.' },
      { title: 'Kill-Chain Playbooks', desc: 'Resumable state machines for WordPress, Drupal, Joomla, and Magento assessments.' },
      { title: 'Attack-Path Analysis', desc: 'Ingests Active Directory graph data and finds the shortest path from an owned host to Domain Admin.' },
      { title: 'Evidence & Proof Tracking', desc: 'Findings tie to CVSS scores, CWE/OWASP/MITRE tags, and verified proof-of-exploit artifacts.' },
      { title: 'Professional Report Generation', desc: 'Self-contained HTML reports: cover page, scope, findings, severity charts, attack paths, remediation.' },
      { title: 'Stealth & Evasion Modes', desc: 'Stealth, aggressive, and whisper postures tune scan timing and noise to stay under detection thresholds.' },
    ],
    screenshots: [
      { src: '/screenshots/xinai/boot.png', title: 'Boot & Initialization', desc: 'Xinai loads its SQLite store, engagement state, MCP tool registry, and the Claude Agent SDK — then signals ready.' },
      { src: '/screenshots/xinai/engagement.png', title: 'Live Engagement', desc: 'Pointed at a target, Xinai lays out its 5-phase plan and autonomously kicks off passive recon — certificate-transparency logs, subdomain enumeration, and tech fingerprinting in parallel.' },
      { src: '/screenshots/xinai/dashboard.png', title: 'Operator Dashboard', desc: 'The Ink terminal UI: live target and scope status, an activity waveform, and a running loot tally of credentials, owned hosts, and findings.' },
      { src: '/screenshots/xinai/report-cover.png', title: 'Assessment Report', desc: "Xinai's generated HTML report: cover page, scope and rules of engagement, executive summary, and document control." },
      { src: '/screenshots/xinai/report-findings.png', title: 'Findings & Severity', desc: 'CVSS-scored findings with reproduction, impact, and remediation, plus a severity-distribution chart — all found and remediated on my own property.' },
    ],
    howItWorksText:
      'You point Xinai at a target and state intent in the terminal UI. Claude Opus 4.8 does the reasoning, planning a phased assessment and choosing tools from a typed MCP registry. Before any tool runs, the target is matched against the engagement scope — out-of-scope targets are blocked before a subprocess ever spawns. In-scope calls dispatch real Kali tooling through a concurrency-limited registry, every invocation is written to an append-only SQLite audit log (with credentials redacted), and confirmed findings are scored and compiled into a self-contained HTML report.',
    archSteps: [
      { name: 'Operator (TUI)', desc: 'Target + Intent', color: 'text-cyan' },
      { name: 'Claude Opus 4.8', desc: 'Reasoning', color: 'text-accent' },
      { name: 'Agent SDK', desc: 'Orchestrate', color: 'text-green' },
      { name: 'MCP Registry', desc: 'Dispatch', color: 'text-cyan' },
      { name: 'Kali Tools', desc: 'Execute', color: 'text-accent' },
      { name: 'SQLite', desc: 'Audit + Findings', color: 'text-green' },
      { name: 'HTML Report', desc: 'Deliver', color: 'text-cyan' },
    ],
    techStack: ['TypeScript', 'React', 'Ink', 'Node.js', 'Claude Agent SDK', 'Claude Opus 4.8', 'MCP', 'SQLite', 'Zod', 'Turborepo', 'Vitest', 'Biome', 'nmap', 'sqlmap', 'BloodHound', 'Metasploit'],
    reportUrl: '/reports/xinai-sample-report.html',
  },
]
```

- [ ] **Step 2: Verify the file parses**

Run: `node --input-type=module -e "import('./src/data/projects.js').then(m => console.log(m.projects.length))"`
Expected: prints `2`

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add projects data file for multi-project portfolio"
```

---

## Task 2: Create the reusable ProjectCase component

**Files:**
- Create: `src/components/ProjectCase.jsx`

This is `Project.jsx` converted to read from a `project` prop. `Gallery`/`ThumbButton` now take a `screenshots` prop instead of the module const. A "View sample report" link renders only when `project.reportUrl` is set. The features section header/subtext, problem/solution headings + bullets, results metrics, how-it-works text, arch steps, and tech stack all read from the prop.

- [ ] **Step 1: Write `src/components/ProjectCase.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

function Gallery({ screenshots }) {
  const [active, setActive] = useState(0)
  const [imgError, setImgError] = useState(false)
  const current = screenshots[active]

  useEffect(() => setImgError(false), [active])

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl border border-border bg-bg-elevated">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="aspect-[16/9] flex items-center justify-center"
          >
            {!imgError ? (
              <img src={current.src} alt={current.title} className="h-full w-full object-cover object-top" onError={() => setImgError(true)} />
            ) : (
              <div className="flex items-center justify-center h-full w-full text-text-muted text-sm">{current.title}</div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/90 to-transparent px-6 pb-5 pt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-text-primary">{current.title}</h4>
              <p className="mt-1 text-[13px] text-text-secondary max-w-lg">{current.desc}</p>
            </div>
            <span className="text-xs text-text-muted shrink-0">{active + 1}/{screenshots.length}</span>
          </div>
        </div>

        <button onClick={() => setActive(active > 0 ? active - 1 : screenshots.length - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-bg/60 text-text-muted backdrop-blur-sm transition-colors hover:text-text-primary" aria-label="Previous">‹</button>
        <button onClick={() => setActive(active < screenshots.length - 1 ? active + 1 : 0)} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-bg/60 text-text-muted backdrop-blur-sm transition-colors hover:text-text-primary" aria-label="Next">›</button>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
        {screenshots.map(({ src, title }, i) => (
          <ThumbButton key={src} src={src} title={title} index={i} active={active} onSelect={setActive} />
        ))}
      </div>
    </div>
  )
}

function ThumbButton({ src, title, index, active, onSelect }) {
  const [error, setError] = useState(false)
  return (
    <button
      onClick={() => onSelect(index)}
      className={`shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${index === active ? 'border-accent ring-1 ring-accent/30' : 'border-border opacity-50 hover:opacity-80'}`}
    >
      <div className="h-14 w-24 sm:h-16 sm:w-28 bg-bg-elevated flex items-center justify-center">
        {!error ? (
          <img src={src} alt={title} className="h-full w-full object-cover object-top" onError={() => setError(true)} />
        ) : (
          <span className="text-[10px] text-text-muted">{index + 1}</span>
        )}
      </div>
    </button>
  )
}

export default function ProjectCase({ project }) {
  const { problem, solution, results } = project

  return (
    <section id={project.id} className="px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* --- CONTEXT --- */}
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted text-center">{project.label}</p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            {project.title}
          </h2>
          <p className="mt-2 text-center text-accent">{project.company}</p>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </FadeIn>

        {/* --- PROBLEM / SOLUTION --- */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">{problem.heading}</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">{problem.statement}</p>
              <ul className="mt-4 space-y-2.5">
                {problem.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">{solution.heading}</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">{solution.statement}</p>
              <ul className="mt-4 space-y-2.5">
                {solution.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* --- RESULTS --- */}
        <FadeIn>
          <div className="mt-10 rounded-xl border border-green/15 bg-green/[0.03] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green/60">{results.label}</p>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {results.metrics.map((m) => (
                <div key={m.description}>
                  <span className="text-3xl font-bold text-text-primary sm:text-4xl">{m.value}</span>
                  <p className="mt-1 text-sm text-text-secondary">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* --- FEATURES --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">
              {project.featuresHeading}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary">
              {project.featuresSubtext}
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map(({ title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.03}>
              <div className="rounded-xl border border-border bg-bg-card p-5 h-full transition-all duration-200 hover:border-accent/20">
                <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* --- SCREENSHOTS --- */}
        <FadeIn>
          <div className="mt-16">
            <Gallery screenshots={project.screenshots} />
            {project.reportUrl && (
              <div className="mt-4 text-center">
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary"
                >
                  View sample report →
                </a>
              </div>
            )}
          </div>
        </FadeIn>

        {/* --- HOW IT WORKS --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">How It Works</p>
            <p className="mt-4 mx-auto max-w-2xl text-center text-sm text-text-secondary">
              {project.howItWorksText}
            </p>
            <div className="mt-8 flex justify-center overflow-x-auto pb-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-max">
                {project.archSteps.map((step, i) => (
                  <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                    <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-accent/30">
                      <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>{step.name}</div>
                      <div className="mt-0.5 font-mono text-[10px] text-text-muted sm:text-xs">{step.desc}</div>
                    </div>
                    {i < project.archSteps.length - 1 && (
                      <span className="font-mono text-sm text-text-muted/30 sm:text-base">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* --- TECH --- */}
        <FadeIn>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="rounded-md border border-border bg-bg-card px-3 py-1 text-xs text-text-muted">{t}</span>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectCase.jsx
git commit -m "feat: add reusable ProjectCase component"
```

---

## Task 3: Wire App.jsx to render both projects; remove old Project.jsx

**Files:**
- Modify: `src/App.jsx`
- Delete: `src/components/Project.jsx`

- [ ] **Step 1: Replace the Project import/usage in `src/App.jsx`**

Replace the entire file with:

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCase from './components/ProjectCase'
import Contact from './components/Contact'
import { projects } from './data/projects'

function Divider() {
  return <div className="section-divider mx-auto max-w-5xl" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {projects.map((project) => (
          <div key={project.id}>
            <Divider />
            <ProjectCase project={project} />
          </div>
        ))}
        <Divider />
        <Contact />
      </main>
      <footer className="border-t border-border/30 px-6 py-8">
        <p className="text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Raffi Taslakian
        </p>
      </footer>
    </>
  )
}
```

- [ ] **Step 2: Delete the old component**

```bash
git rm src/components/Project.jsx
```

- [ ] **Step 3: Confirm no other file imports Project.jsx**

Run: `grep -rn "components/Project'" src || echo "no stale imports"`
Expected: `no stale imports`

- [ ] **Step 4: Confirm the navbar anchor still resolves**

Run: `grep -rn "#project" src`
Expected: if the Navbar links to `#project`, it still matches the RFID project's `id: 'project'`. If a different anchor is used, no action needed. (Do not change `projects[0].id` — it is intentionally `'project'` to preserve this anchor.)

- [ ] **Step 5: Build and lint**

Run: `npm run build && npm run lint`
Expected: build succeeds, no lint errors.

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx
git commit -m "refactor: render projects from data via ProjectCase, drop hardcoded Project"
```

---

## Task 4: Add Xinai TUI screenshots

**Files:**
- Create: `public/screenshots/xinai/boot.png` (from `Pictures/Xina1.png`)
- Create: `public/screenshots/xinai/engagement.png` (from `Pictures/Xina2.png`)
- Create: `public/screenshots/xinai/dashboard.png` (from `Pictures/Xina3.png`)

- [ ] **Step 1: Copy and rename the screenshots**

```bash
mkdir -p public/screenshots/xinai
cp Pictures/Xina1.png public/screenshots/xinai/boot.png
cp Pictures/Xina2.png public/screenshots/xinai/engagement.png
cp Pictures/Xina3.png public/screenshots/xinai/dashboard.png
```

- [ ] **Step 2: Verify all three exist**

Run: `ls public/screenshots/xinai/`
Expected: `boot.png  dashboard.png  engagement.png`

- [ ] **Step 3: Commit**

```bash
git add public/screenshots/xinai/boot.png public/screenshots/xinai/engagement.png public/screenshots/xinai/dashboard.png
git commit -m "feat: add Xinai TUI screenshots"
```

---

## Task 5: Author the sample HTML pentest report

**Files:**
- Create: `public/reports/xinai-sample-report.html`

A self-contained (inline CSS, no external assets) dark-themed HTML report matching Xinai's Phase-5 format. Target `www.jasonofbh.net` (WordPress), author's own property, findings **found & remediated**, severity proportionate to recon/discovery stage. Optionally read `XINAI/.../apps/xinai/src/report/*` first to match styling.

- [ ] **Step 1: Create the report HTML**

Build a single HTML file with these sections in order, using the portfolio's color palette (bg `#09090b`, card `#111113`, border `#27272a`, text `#fafafa`/`#a1a1aa`, accent `#3b82f6`, cyan `#22d3ee`, green `#34d399`, plus severity colors: critical `#ef4444`, high `#f97316`, medium `#eab308`, low `#3b82f6`, info `#a1a1aa`):

1. **Cover page** — "Security Assessment Report", target `www.jasonofbh.net`, "Conducted by Xinai — Autonomous AI Pentest Agent", assessor "Raffi Taslakian", engagement type "Web Application — Black Box (Authorized, Self-Owned Property)", date 2026, document ID, confidentiality marking.
2. **Document control** — version table (v1.0, 2026, "Found & remediated"), classification "Confidential — Author's Own Property".
3. **Scope & Rules of Engagement** — in-scope `www.jasonofbh.net`, `dev.jasonofbh.net`; posture stealth; note that the target is the author's own production property and all findings were remediated.
4. **Executive summary** — 1 paragraph: an authorized assessment of the author's own WordPress site surfaced five information-disclosure / hardening issues, all since remediated. Include a severity count line (Medium ×2, Low ×2, Info ×1).
5. **Severity distribution chart** — inline SVG horizontal bars for Critical 0, High 0, Medium 2, Low 2, Info 1.
6. **Methodology** — the 5 phases (Recon, Discovery, Vuln Testing, Exploitation, Report) with one line each.
7. **Findings** — one card per finding below, each with: ID, title, severity badge, CVSS v3.1 vector + score, Status: Remediated, Description, Reproduction, Impact, Remediation.

   - **XINAI-001 — WordPress REST API User Enumeration** — Medium — CVSS `AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N` (5.3). Description: `/wp-json/wp/v2/users` exposed author accounts and slugs. Reproduction: `GET https://www.jasonofbh.net/wp-json/wp/v2/users`. Impact: valid usernames aid credential-stuffing/brute force. Remediation: restrict REST users endpoint to authenticated requests; remove author archives.
   - **XINAI-002 — Permissive CORS Configuration** — Medium — CVSS `AV:N/AC:L/PR:N/UI:R/S:U/C:L/I:L/A:N` (5.4). Description: API reflected arbitrary `Origin` with `Access-Control-Allow-Credentials: true`. Reproduction: send `Origin: https://evil.example` and observe it reflected. Impact: cross-origin read of authenticated responses. Remediation: enforce an allowlist of trusted origins; never reflect arbitrary origins with credentials.
   - **XINAI-003 — Exposed Development Subdomain** — Low — CVSS `AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N` (5.3). Description: `dev.jasonofbh.net` was publicly reachable and indexable, surfaced via certificate-transparency logs. Reproduction: query crt.sh for `%.jasonofbh.net`; browse to the dev host. Impact: pre-production code/config exposure. Remediation: IP-allowlist or HTTP-auth the dev environment; exclude from public DNS/CT where feasible.
   - **XINAI-004 — XML-RPC Interface Enabled** — Low — CVSS `AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L` (5.3). Description: `xmlrpc.php` enabled, allowing `system.multicall` amplification. Reproduction: `POST /xmlrpc.php` with `system.listMethods`. Impact: brute-force amplification and DoS vector. Remediation: disable XML-RPC if unused, or filter methods and rate-limit.
   - **XINAI-005 — Web Technology & Version Disclosure** — Info — CVSS `AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N` (0.0 / informational). Description: response headers and `/readme.html` disclosed WordPress and plugin versions. Reproduction: inspect `Server`/`X-Powered-By` headers and `/readme.html`. Impact: eases targeted exploit selection. Remediation: suppress version headers, remove `readme.html`, generic error pages.

8. **Recommendations** — bulleted, prioritized: lock down REST/XML-RPC, fix CORS allowlist, gate the dev subdomain, suppress version disclosure, add WAF rules + rate limiting.
9. **Appendix** — note: "Generated by Xinai. This report documents an authorized assessment of the author's own production property; all findings were remediated prior to publication."

- [ ] **Step 2: Verify it opens as valid standalone HTML**

Run: `npx serve public -l 5055 &` then `curl -sS -o /dev/null -w "%{http_code}\n" http://localhost:5055/reports/xinai-sample-report.html` (expected `200`), then stop the server. (Or open the file directly in a browser and confirm it renders.)

- [ ] **Step 3: Commit**

```bash
git add public/reports/xinai-sample-report.html
git commit -m "feat: add Xinai sample assessment report (jasonofbh.net, remediated)"
```

---

## Task 6: Capture report screenshots for the gallery

**Files:**
- Create: `public/screenshots/xinai/report-cover.png`
- Create: `public/screenshots/xinai/report-findings.png`

Use the Playwright MCP browser to screenshot the rendered report (served by `npm run dev` or `npx serve public`).

- [ ] **Step 1: Serve the report**

Run: `npm run dev` (note the local URL, typically `http://localhost:5173`). The report is at `<url>/reports/xinai-sample-report.html`.

- [ ] **Step 2: Screenshot the cover/top**

Navigate the Playwright browser to `<url>/reports/xinai-sample-report.html`, set viewport ~1280×900, screenshot the top of the page (cover + document control) → save as `public/screenshots/xinai/report-cover.png`.

- [ ] **Step 3: Screenshot the findings/severity area**

Scroll to the severity chart + first findings, screenshot → save as `public/screenshots/xinai/report-findings.png`.

- [ ] **Step 4: Verify both exist and are non-empty**

Run: `ls -la public/screenshots/xinai/report-*.png`
Expected: two files, each > 10 KB.

- [ ] **Step 5: Commit**

```bash
git add public/screenshots/xinai/report-cover.png public/screenshots/xinai/report-findings.png
git commit -m "feat: add Xinai report screenshots to gallery"
```

---

## Task 7: Final verification

- [ ] **Step 1: Build + lint clean**

Run: `npm run build && npm run lint`
Expected: success, no errors.

- [ ] **Step 2: Visual check in dev**

Run: `npm run dev`, open the local URL, and confirm:
- RFID case study looks identical to before (header, problem/solution, 4 metrics, 16 feature cards, 8-shot gallery, How It Works flow, tech tags).
- Xinai case study renders below it: title/subtitle, problem/solution, 4 metrics, 12 feature cards, 5-shot gallery (3 TUI + 2 report), "View sample report →" link opens the HTML in a new tab, How It Works flow with 7 arch steps, tech tags.
- No broken images (no placeholder fallbacks), no console errors.

- [ ] **Step 3: Final commit (if any stray changes)**

```bash
git add -A
git commit -m "chore: finalize Xinai case study" || echo "nothing to commit"
```

---

## Self-Review Notes

- **Spec coverage:** §1 refactor → Tasks 1–3. §2 Xinai content → Task 1 (xinai object). §3 screenshots → Task 4 (+ report shots Task 6). §4 report → Tasks 5–6. §5 verification → Task 7. All covered.
- **RFID fidelity:** Task 1 transcribes existing strings verbatim and `projects[0].id` stays `'project'` to preserve the navbar anchor; ProjectCase reproduces the exact markup, so RFID renders identically.
- **No new test framework:** project has none; verification is build/lint/visual, consistent with the codebase.
