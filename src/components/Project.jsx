import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const screenshots = [
  { src: '/screenshots/login.png', title: 'Authentication', desc: 'Secure login with email/password or Google SSO. Role-based access determines what each user sees after sign-in.' },
  { src: '/screenshots/dashboard.png', title: 'Multi-Location Dashboard', desc: 'Live overview across 4 facilities: Downtown, Beverly Wilshire, HQ, and Las Vegas. Department counts, active orders, and total items at a glance.' },
  { src: '/screenshots/orders.png', title: 'Order Management', desc: '415+ orders tracked end to end. Status, store location, product type, priority, pricing, and due dates. Filterable and searchable.' },
  { src: '/screenshots/rfid-mapping.png', title: 'RFID Reader Mapping', desc: 'Visual wiring of Zebra FX9600 antennas to physical departments. Color-coded connections show tag assignment zones, hold stations, and gate areas.' },
  { src: '/screenshots/orders-gallery.png', title: 'Product Gallery', desc: 'High-resolution images for every order. Managers and salespeople can view pieces with status badges and pricing without visiting the floor.' },
  { src: '/screenshots/approval-queue.png', title: 'Approval Queue', desc: 'Submitted orders land here for manager review. Approve, reject, or request changes with product images and submitter info.' },
  { src: '/screenshots/design-studio.png', title: 'AI Design Studio', desc: 'AI-powered jewelry design tool. Describe a piece, set style parameters, and generate design concepts with a reference gallery.' },
  { src: '/screenshots/diagnostics.png', title: 'System Diagnostics', desc: 'Real-time health of every service: API, Redis cache, MQTT broker, WebSocket connections, and ECS container status.' },
]

const archSteps = [
  { name: 'Zebra FX9600', desc: 'RFID Scan', color: 'text-green' },
  { name: 'AWS IoT Core', desc: 'MQTT', color: 'text-cyan' },
  { name: 'Node.js', desc: 'Process', color: 'text-accent' },
  { name: 'PostgreSQL', desc: 'Store', color: 'text-cyan' },
  { name: 'Redis', desc: 'Cache', color: 'text-green' },
  { name: 'Socket.IO', desc: 'Push', color: 'text-accent' },
  { name: 'React', desc: 'Display', color: 'text-cyan' },
]

function Gallery() {
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

export default function Project() {
  return (
    <section id="project" className="px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* --- CONTEXT --- */}
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted text-center">Featured Project</p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            RFID-Powered Manufacturing Platform
          </h2>
          <p className="mt-2 text-center text-accent">Jason of Beverly Hills · Luxury Jewelry Manufacturing</p>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-text-secondary">
            Jason of Beverly Hills crafts custom luxury jewelry. Championship rings,
            celebrity commissions, pieces worth tens of thousands of dollars. Every
            item passes through multiple production departments by hand. Losing track
            of a single piece isn't just an error. It's a financial disaster.
          </p>
        </FadeIn>

        {/* --- PROBLEM / SOLUTION --- */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">The Problem</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">Everything was tracked on paper.</p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  No one knew where a piece was without physically searching
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  Items got lost between departments regularly
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  Salespeople called the floor to check order status
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  Zero data on bottlenecks, throughput, or delays
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">What I Built</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">I built the entire operations platform. Designed, developed, and deployed solo.</p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  Automatic RFID tracking. Every order's location updated in real time
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  6 role-based portals. Each team gets exactly the tools they need
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  Jeweler time tracking, scheduling, estimated delivery predictions
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  AI design studio, approval workflows, analytics dashboards
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* --- RESULTS --- */}
        <FadeIn>
          <div className="mt-10 rounded-xl border border-green/15 bg-green/[0.03] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green/60">Results</p>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <span className="text-3xl font-bold text-text-primary sm:text-4xl">30%</span>
                <p className="mt-1 text-sm text-text-secondary">labor efficiency increase</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary sm:text-4xl">90%</span>
                <p className="mt-1 text-sm text-text-secondary">fewer tracking errors</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary sm:text-4xl">1000s</span>
                <p className="mt-1 text-sm text-text-secondary">RFID events processed daily</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary sm:text-4xl">6</span>
                <p className="mt-1 text-sm text-text-secondary">user roles with tailored views</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* --- PLATFORM FEATURES --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">
              Not Just Tracking. A Full Operations Platform.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary">
              What started as an RFID tracking tool evolved into the system that runs
              the entire production floor. Every role has their own view. Every workflow is automated.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Live RFID Tracking', desc: 'Every tagged order tracked automatically as it moves between departments. No scanning, no manual input.' },
            { title: 'Work Timers', desc: 'Tracks each jeweler\'s time per order at every station. See who\'s fast, who\'s stuck, and where bottlenecks form.' },
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
          ].map(({ title, desc }, i) => (
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
            <Gallery />
          </div>
        </FadeIn>

        {/* --- HOW IT WORKS --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">How It Works</p>
            <p className="mt-4 mx-auto max-w-2xl text-center text-sm text-text-secondary">
              An RFID tag is attached to every order. As it moves between departments,
              Zebra FX9600 readers detect it automatically. Each reader reports signal
              strength (RSSI) per antenna, and the system uses that to determine exact
              location, not just whether an item was seen, but which station it's
              closest to. Events queue through SQS for reliable async processing,
              stream via MQTT to the backend, update PostgreSQL, and push live
              changes to every connected dashboard through WebSockets. Infrastructure
              is managed with Terraform, auth runs on AWS Cognito with MFA, and Redis
              cache invalidation stays synced across ECS containers.
            </p>
            <div className="mt-8 flex justify-center overflow-x-auto pb-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-max">
                {archSteps.map((step, i) => (
                  <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                    <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-accent/30">
                      <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>{step.name}</div>
                      <div className="mt-0.5 font-mono text-[10px] text-text-muted sm:text-xs">{step.desc}</div>
                    </div>
                    {i < archSteps.length - 1 && (
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
            {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.IO', 'MQTT', 'AWS ECS', 'AWS IoT Core', 'SQS', 'Cognito', 'Terraform', 'Docker', 'Zebra FX9600', 'RSSI'].map((t) => (
              <span key={t} className="rounded-md border border-border bg-bg-card px-3 py-1 text-xs text-text-muted">{t}</span>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
