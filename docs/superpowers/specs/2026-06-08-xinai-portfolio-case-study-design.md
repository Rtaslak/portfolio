# Design: Add Xinai as a Second Portfolio Case Study

**Date:** 2026-06-08
**Author:** Raffi (with Claude)
**Status:** Approved design — pending spec review before implementation plan

## Goal

Add **Xinai** — an autonomous AI penetration-testing agent — as a second, full case study on the portfolio (`/Users/raffitaslakian/Desktop/Portfolio`), alongside the existing RFID manufacturing platform. In the process, refactor the currently-hardcoded single project into a reusable, data-driven multi-project structure so future projects are one object away.

## Framing Decision

**Engineering-first.** The story is "I designed and built a sophisticated autonomous multi-agent AI system." Security is the *domain*, not the headline. This maximizes transferable-skill signal for general SWE roles and avoids the "hacking tool" misread, while staying honest that the domain is authorized security testing on the author's own property.

## Non-Goals

- No per-project routes/URLs yet. Both projects stay on the single long-scroll home page (Hero → RFID → Xinai → Contact). Per-project routing is a future enhancement, enabled by the refactor but not built now.
- No changes to the visual design, copy, or behavior of the existing RFID case study. It must render pixel-identical after the refactor.
- Not running a live pentest. The report artifact is authored to match Xinai's real Phase-5 format, grounded in the recon visible in the screenshots.

---

## 1. Architecture — Data-Driven Multi-Project Refactor

Today everything lives hardcoded in `src/components/Project.jsx` (single project). Refactor into:

- **`src/data/projects.js`** — exports an array of project objects. `projects[0]` = RFID platform (existing content moved verbatim), `projects[1]` = Xinai.
- **`src/components/ProjectCase.jsx`** — the current `Project.jsx` layout converted into a reusable component taking a single `project` prop. All existing Tailwind classes, Framer Motion animations, `FadeIn` usage, section structure, and the interactive screenshot gallery preserved exactly.
- **`src/App.jsx`** — maps over `projects`, rendering a `<ProjectCase>` per project with the existing `section-divider` between them.
- **`src/components/Project.jsx`** — deleted once `ProjectCase.jsx` + `App.jsx` replace it (or kept as a thin re-export; prefer deletion for cleanliness).

**Acceptance:** RFID section looks and behaves identically to before; Xinai renders below it; adding a 3rd project is appending one object to `projects.js`.

### Project object shape (per existing structure)

```js
{
  id: "xinai",
  label: "Featured Project",
  title: "...",
  company: "...",            // subtitle line
  description: "...",         // intro paragraph
  problem:  { title, subtitle, bullets: [] },
  solution: { title, subtitle, bullets: [] },
  results:  { label, metrics: [{ value, description }] },
  features: [{ title, desc }],          // feature cards
  screenshots: [{ src, title, desc }],  // interactive gallery
  archSteps: [{ name, desc, color }],   // "How It Works" flow
  techStack: ["..."],                   // tag list
  reportUrl: "/reports/xinai-sample-report.html" | undefined, // optional "view report" link
}
```

The RFID object is the existing content transcribed into this shape unchanged.

---

## 2. Xinai Case-Study Content (engineering-first)

**Header**
- `label`: "Featured Project"
- `title`: "Xinai — Autonomous AI Pentest Agent"
- `company`: "Personal R&D · Autonomous Security Agent · TypeScript + Claude Agent SDK"
- `description`: "Xinai is an autonomous penetration-testing agent I designed and built solo — a terminal-native AI operator that can be pointed at a target and independently run a disciplined, multi-phase security assessment. It runs on the Claude Agent SDK with Claude Opus 4.8 doing the reasoning, orchestrating real security tooling through typed MCP wrappers while staying inside hard safety rails. The hard part wasn't calling tools — it was building an autonomous agent that stays in scope, audits everything it does, and reasons like a methodical operator instead of a chatbot."

**The Problem**
- `subtitle`: "Security testing is manual, slow, and hard to automate safely."
- bullets:
  - "A thorough assessment is hours of repetitive recon, enumeration, and tool-wrangling by hand"
  - "LLM agents are powerful but dangerous — they wander out of scope and leave no audit trail"
  - "Most AI security tools are thin chat wrappers, not disciplined operators that follow a methodology"
  - "The real question: could an agent run a real assessment autonomously without going rogue?"

**What I Built**
- `subtitle`: "An autonomous AI operator with real safety rails. Designed, built, and deployed solo."
- bullets:
  - "Multi-agent system on the Claude Agent SDK — Opus 4.8 reasoning across specialized recon, web, internal, and loot lanes"
  - "19+ real security tools wrapped as typed MCP tools with schema-validated, structured I/O"
  - "Hard scope enforcement — out-of-scope targets are blocked before a subprocess ever spawns"
  - "Append-only audit log with automatic credential redaction, and CVSS-scored HTML reporting"

**Results** (`label`: "Results") — engineering-scale metrics, all honest:
- `19+` — security tools orchestrated as typed MCP wrappers
- `4` — specialized agent lanes (recon · web · internal · loot)
- `5-phase` — autonomous methodology, recon → report
- `100%` — of tool calls scope-checked and audit-logged

> Alternate honest metrics available if preferred: `14-table` audited schema · `200+` tests · `~400` commits.

**Feature cards** (~12, `{title, desc}`):
1. Conversational + Operator Duality — "Talk to it like a knowledgeable peer, or point it at a target and let it run. Same agent, two modes."
2. 5-Phase Methodology — "Recon → Discovery → Vuln Testing → Exploitation → Report. Passive-first, interruptible, disciplined."
3. Scope Enforcement (Pre-Spawn) — "Every target is matched against an allowlist before any subprocess runs. Out-of-scope is hard-blocked, not just logged."
4. Append-Only Audit Log — "Every tool call recorded with target, exit code, duration, and a hash of its output. Nothing happens off the record."
5. Credential Redaction — "Secrets are pattern-matched and replaced with salted hashes before they ever touch the database."
6. Multi-Agent Expert Lanes — "Specialized recon, web, internal/AD, and loot agents fan out in parallel, then consolidate."
7. Typed MCP Tool Registry — "19+ security tools wrapped with Zod-validated I/O, a concurrency semaphore, and per-tool timeouts."
8. Kill-Chain Playbooks — "Resumable state machines for WordPress, Drupal, Joomla, and Magento assessments."
9. Attack-Path Analysis — "Ingests Active Directory graph data and finds the shortest path from an owned host to Domain Admin."
10. Evidence & Proof Tracking — "Findings tie to CVSS scores, CWE/OWASP/MITRE tags, and verified proof-of-exploit artifacts."
11. Professional Report Generation — "Self-contained HTML reports: cover page, scope, findings, severity charts, attack paths, remediation."
12. Stealth & Evasion Modes — "Stealth, aggressive, and whisper postures tune scan timing and noise to stay under detection thresholds."

**How It Works** (`archSteps`, component → role, color ∈ {text-cyan, text-accent, text-green}):
1. Operator (TUI) — Target + Intent — text-cyan
2. Claude Opus 4.8 — Reasoning — text-accent
3. Agent SDK — Orchestrate — text-green
4. MCP Tool Registry — Dispatch — text-cyan
5. Kali Tools — Execute — text-accent
6. SQLite — Audit + Findings — text-green
7. HTML Report — Deliver — text-cyan

**Tech stack tags:**
`TypeScript`, `React`, `Ink`, `Node.js`, `Claude Agent SDK`, `Claude Opus 4.8`, `MCP`, `SQLite`, `Zod`, `Turborepo`, `Vitest`, `Biome`, `nmap`, `sqlmap`, `BloodHound`, `Metasploit`

---

## 3. Screenshots / Gallery

Source: `Portfolio/Pictures/Xina1.png`, `Xina2.png`, `Xina3.png` (real captures). Copy + rename into `public/screenshots/xinai/`:

| Source | Dest | title | desc |
|---|---|---|---|
| Xina1.png | `boot.png` | "Boot & Initialization" | "Xinai loads its SQLite store, engagement state, MCP tool registry, and the Claude Agent SDK — then signals ready." |
| Xina2.png | `engagement.png` | "Live Engagement" | "Pointed at a target, Xinai lays out its 5-phase plan and autonomously kicks off passive recon — certificate-transparency logs, subdomain enumeration, and tech fingerprinting in parallel." |
| Xina3.png | `dashboard.png` | "Operator Dashboard" | "The Ink terminal UI: live target and scope status, an activity waveform, and a running loot tally of credentials, owned hosts, and findings." |

Plus 1–2 **report screenshots** (see §4) appended to the same gallery.

These render through the existing interactive screenshot gallery component (no new gallery code).

---

## 4. Report Artifact

**File:** `public/reports/xinai-sample-report.html` — a self-contained HTML report (inline CSS, no external assets) authored to match Xinai's real Phase-5 report format and dark aesthetic. Implementation may read `XINAI/.../src/report/*` to match styling.

**Target:** `www.jasonofbh.net` (WordPress) — the author's own property; framed as an authorized assessment. Findings labeled **found & remediated**.

**Honesty constraints:**
- Findings are grounded in the recon actually shown in Xina2/Xina4: WordPress detected, REST API at `/wp-json`, CORS behavior, `dev.jasonofbh.net` subdomain, WAF/tech detection.
- Severity stays proportionate to a recon/discovery-stage assessment (information-disclosure / hardening class). No fabricated confirmed critical RCE, since exploitation was not run.
- A note on the report marks it as a representative assessment of the author's own site, remediated.

**Findings (all status: Remediated):**
1. WordPress REST API User Enumeration (`/wp-json/wp/v2/users`) — Medium
2. Permissive CORS Configuration — Medium
3. Exposed Development Subdomain (`dev.jasonofbh.net`) — Low/Medium
4. XML-RPC Interface Enabled (`xmlrpc.php`) — Low
5. Web Technology / Version Disclosure — Low/Info

Each finding: CVSS v3.1 vector + score, description, reproduction, impact, remediation, status.

**Report sections:** cover page · document control · scope & rules of engagement · executive summary · methodology · findings by severity · severity-distribution chart (inline SVG) · recommendations · appendix.

**Surfacing in the portfolio:**
- Screenshot the rendered report (cover page + a findings page, ~2 shots) into `public/screenshots/xinai/report-cover.png` and `report-findings.png`; append to the Xinai gallery.
- Add a "View sample report →" link in the Xinai case study pointing at `/reports/xinai-sample-report.html` (opens in new tab). Wired via the optional `reportUrl` field.

---

## 5. Testing / Verification

- `npm run build` succeeds; `npm run dev` renders the home page with both case studies.
- RFID section is visually unchanged (compare against current screenshots/behavior).
- Xinai section renders all sub-sections; gallery is interactive; all images load (no 404s).
- `/reports/xinai-sample-report.html` opens standalone and renders correctly; "View sample report" link works.
- No console errors; lint/format clean per existing config.

## 6. Future Enhancements (out of scope now)

- Per-project routes (`/projects/:id`) and a projects index page (the data layer now supports this).
- Additional Xinai visuals (exploitation/report shots) if the author later chooses to publish them.
