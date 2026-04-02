const archSteps = [
  { name: 'Zebra FX9600', desc: 'RFID Scan', color: 'text-green' },
  { name: 'AWS IoT Core', desc: 'MQTT Stream', color: 'text-blue' },
  { name: 'Node.js', desc: 'Processing', color: 'text-accent' },
  { name: 'PostgreSQL', desc: 'Storage', color: 'text-blue' },
  { name: 'Redis', desc: 'Cache', color: 'text-green' },
  { name: 'Socket.IO', desc: 'Push', color: 'text-accent' },
  { name: 'React', desc: 'Dashboard', color: 'text-blue' },
]

const screenshots = [
  { src: '/screenshots/dashboard.png', title: 'Production Dashboard', desc: 'Live overview of departments, orders, tracking stats, and RFID activity.' },
  { src: '/screenshots/orders.png', title: 'Order Management', desc: 'Order lifecycle with status tracking, images, comments, and specifications.' },
  { src: '/screenshots/rfid-mapping.png', title: 'RFID Hardware Mapping', desc: 'Map readers and antennas to physical production stations.' },
  { src: '/screenshots/tracking.png', title: 'Department Tracking', desc: 'Real-time item location with work timers and stage history.' },
]

const capabilities = [
  { icon: '📡', title: 'RFID Integration', desc: 'Zebra FX9600 readers with multi-antenna configs mapped to production stations.' },
  { icon: '⚡', title: 'Event Pipeline', desc: 'MQTT via AWS IoT Core — sub-second processing with deduplication and state transitions.' },
  { icon: '🔄', title: 'Real-Time Updates', desc: 'Socket.IO + Redis Pub/Sub — instant push to all clients, no polling.' },
  { icon: '👥', title: '6 User Roles', desc: 'Admin, Manager, Operator, Salesperson, Jeweler, Designer — each with tailored views.' },
  { icon: '📊', title: 'Analytics', desc: 'Throughput, bottlenecks, capacity planning, and on-time delivery tracking.' },
  { icon: '☁️', title: 'AWS Infrastructure', desc: 'ECS, RDS, ElastiCache, S3, IoT Core — Dockerized with CI/CD.' },
]

export default function Projects() {
  return (
    <section id="project" className="px-6 py-20 sm:px-8 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Featured</span>{' '}
        <span className="text-accent">Project</span>
      </h2>

      <div className="mx-auto mt-16 max-w-6xl">
        {/* Hero Card */}
        <div className="rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="inline-flex rounded-full border border-accent-border bg-accent-dim px-3 py-1">
                <span className="text-xs text-accent">Production System · In Use Daily</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
                RFID Real-Time<br />Production Tracking
              </h3>
              <p className="mt-2 text-accent">Jason of Beverly Hills</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary">
                Replaced paper-based tracking with real-time RFID across
                an entire luxury jewelry manufacturing facility. Thousands
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

        {/* Problem → Solution */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-bg-card p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted">Problem</p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                No visibility into order location or production status
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                Items lost between departments — constant manual errors
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                No data on bottlenecks or department performance
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-bg-card p-7">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted">Solution</p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                RFID tags on every order — automatic tracking between stations
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                Live dashboard with location, status, and time per stage
              </li>
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                6 role-based portals — each team sees what they need
              </li>
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mt-10 rounded-xl border border-green/20 bg-green/[0.03] p-7">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-green/60">Results</p>
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

        {/* Screenshots */}
        <div className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {screenshots.map(({ src, title, desc }) => (
              <div key={title} className="glow-card group overflow-hidden rounded-xl border border-border bg-bg-card">
                <div className="aspect-video overflow-hidden bg-bg-elevated flex items-center justify-center">
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover object-top opacity-80 transition-opacity group-hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden items-center justify-center h-full w-full text-text-muted text-sm">{title}</div>
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
                  <p className="mt-1 text-[13px] text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon, title, desc }) => (
            <div key={title} className="glow-card rounded-xl border border-border bg-bg-card p-5">
              <span className="text-xl">{icon}</span>
              <h4 className="mt-2 text-sm font-semibold text-text-primary">{title}</h4>
              <p className="mt-1 text-[13px] text-text-muted">{desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <div className="mt-14 flex justify-center overflow-x-auto pb-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max">
            {archSteps.map((step, i) => (
              <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-5 sm:py-3.5">
                  <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>{step.name}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-text-muted sm:text-xs">{step.desc}</div>
                </div>
                {i < archSteps.length - 1 && (
                  <span className="font-mono text-sm text-text-muted/40 sm:text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
