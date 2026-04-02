import FadeIn from './FadeIn'

const archSteps = [
  { name: 'Zebra FX9600', desc: 'RFID Scan', color: 'text-green' },
  { name: 'AWS IoT Core', desc: 'MQTT Stream', color: 'text-cyan' },
  { name: 'Node.js', desc: 'Processing', color: 'text-accent' },
  { name: 'PostgreSQL', desc: 'Storage', color: 'text-cyan' },
  { name: 'Redis', desc: 'Cache', color: 'text-green' },
  { name: 'Socket.IO', desc: 'Push', color: 'text-accent' },
  { name: 'React', desc: 'Dashboard', color: 'text-cyan' },
]

const screenshots = [
  { src: '/screenshots/dashboard.png', title: 'Production Dashboard', desc: 'Live overview of departments, orders, and RFID activity.' },
  { src: '/screenshots/orders.png', title: 'Order Management', desc: 'Order lifecycle with status, images, and specifications.' },
  { src: '/screenshots/rfid-mapping.png', title: 'RFID Hardware Mapping', desc: 'Map readers and antennas to production stations.' },
  { src: '/screenshots/tracking.png', title: 'Department Tracking', desc: 'Real-time item location with work timers.' },
  { src: '/screenshots/screenshot5.png', title: 'Screenshot 5', desc: 'Description here.' },
  { src: '/screenshots/screenshot6.png', title: 'Screenshot 6', desc: 'Description here.' },
  { src: '/screenshots/screenshot7.png', title: 'Screenshot 7', desc: 'Description here.' },
  { src: '/screenshots/screenshot8.png', title: 'Screenshot 8', desc: 'Description here.' },
  { src: '/screenshots/screenshot9.png', title: 'Screenshot 9', desc: 'Description here.' },
  { src: '/screenshots/screenshot10.png', title: 'Screenshot 10', desc: 'Description here.' },
]

const capabilities = [
  { icon: '📡', title: 'RFID Integration', desc: 'Zebra FX9600 readers mapped to production stations.' },
  { icon: '⚡', title: 'Event Pipeline', desc: 'MQTT via AWS IoT Core — sub-second processing.' },
  { icon: '🔄', title: 'Real-Time Updates', desc: 'Socket.IO + Redis Pub/Sub — instant push, no polling.' },
  { icon: '👥', title: '6 User Roles', desc: 'Tailored views for every team member.' },
  { icon: '📊', title: 'Analytics', desc: 'Throughput, bottlenecks, and delivery tracking.' },
  { icon: '☁️', title: 'Cloud Infra', desc: 'AWS ECS, RDS, ElastiCache, S3 — Dockerized with CI/CD.' },
]

export default function Projects() {
  return (
    <section id="project" className="px-6 py-20 sm:px-8 sm:py-28">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Featured <span className="text-accent">Project</span>
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-6xl">
        {/* Hero Card */}
        <FadeIn>
          <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="inline-flex rounded-full border border-accent/20 bg-accent/5 px-3 py-1">
                  <span className="text-xs text-accent">Production System · In Use Daily</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                  RFID Real-Time<br />Production Tracking
                </h3>
                <p className="mt-2 text-accent">Jason of Beverly Hills</p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary">
                  Replaced paper-based tracking with real-time RFID across
                  a luxury jewelry manufacturing facility. Thousands
                  of tag events processed daily.
                </p>
              </div>

              <div className="flex gap-10 lg:flex-col lg:gap-8 lg:text-right">
                <div>
                  <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">30%</span>
                  <p className="mt-1 text-sm text-text-muted">More efficient</p>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">90%</span>
                  <p className="mt-1 text-sm text-text-muted">Fewer errors</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Problem → Solution */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">Problem</p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  No visibility into order location or status
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  Items lost between departments — constant errors
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                  No data on bottlenecks or performance
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">Solution</p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  RFID tags on every order — automatic tracking
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  Live dashboard with location, status, and timers
                </li>
                <li className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                  6 role-based portals for every team
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Results */}
        <FadeIn>
          <div className="mt-10 rounded-xl border border-green/15 bg-green/[0.03] p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green/60">Results</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-4">
              <div>
                <span className="text-3xl font-bold text-text-primary">30%</span>
                <p className="mt-1 text-sm text-text-secondary">labor efficiency increase</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary">90%</span>
                <p className="mt-1 text-sm text-text-secondary">fewer tracking errors</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary">1000s</span>
                <p className="mt-1 text-sm text-text-secondary">RFID events daily</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-text-primary">6</span>
                <p className="mt-1 text-sm text-text-secondary">user roles supported</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Screenshots — full-width stacked */}
        <div className="mt-16 space-y-6">
          {screenshots.map(({ src, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-300 hover:border-border-accent/30">
                <div className="aspect-[16/9] overflow-hidden bg-bg-elevated flex items-center justify-center">
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover object-top opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden items-center justify-center h-full w-full text-text-muted text-sm">{title}</div>
                </div>
                <div className="flex items-baseline justify-between p-5">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
                    <p className="mt-1 text-[13px] text-text-muted">{desc}</p>
                  </div>
                  <span className="text-xs text-text-muted shrink-0 ml-4">{i + 1}/{screenshots.length}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-border-accent/30">
                <span className="text-xl">{icon}</span>
                <h4 className="mt-2 text-sm font-semibold text-text-primary">{title}</h4>
                <p className="mt-1 text-[13px] text-text-muted">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Architecture */}
        <FadeIn>
          <div className="mt-14 flex justify-center overflow-x-auto pb-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {archSteps.map((step, i) => (
                <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                  <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-border-accent/30">
                    <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>{step.name}</div>
                    <div className="mt-0.5 font-mono text-[10px] text-text-muted sm:text-xs">{step.desc}</div>
                  </div>
                  {i < archSteps.length - 1 && (
                    <span className="font-mono text-sm text-text-muted/30 sm:text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
