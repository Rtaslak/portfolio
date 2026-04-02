const archSteps = [
  { name: 'Zebra FX9600', desc: 'RFID Scan', color: 'text-green' },
  { name: 'AWS IoT Core', desc: 'MQTT Stream', color: 'text-blue' },
  { name: 'Node.js', desc: 'Event Processing', color: 'text-accent' },
  { name: 'PostgreSQL', desc: 'Data Layer', color: 'text-blue' },
  { name: 'Redis', desc: 'Cache & Pub/Sub', color: 'text-green' },
  { name: 'Socket.IO', desc: 'Real-Time Push', color: 'text-accent' },
  { name: 'React', desc: 'Live Dashboard', color: 'text-blue' },
]

const screenshots = [
  {
    src: '/screenshots/dashboard.png',
    title: 'Production Dashboard',
    desc: 'Real-time overview of all production departments, active orders, tracking stats, system health, and live RFID activity.',
  },
  {
    src: '/screenshots/orders.png',
    title: 'Order Management',
    desc: 'Full order lifecycle management with status tracking, priority levels, image galleries, comments, and detailed item specifications.',
  },
  {
    src: '/screenshots/rfid-mapping.png',
    title: 'RFID Hardware Mapping',
    desc: 'Visual configuration interface for mapping Zebra FX9600 readers and antennas to physical production stations and departments.',
  },
  {
    src: '/screenshots/tracking.png',
    title: 'Live Department Tracking',
    desc: 'Real-time item location across production departments with work timers, stage history, and automated status transitions.',
  },
]

const capabilities = [
  {
    icon: '📡',
    title: 'RFID Hardware Integration',
    desc: 'Zebra FX9600 fixed readers with multi-antenna configurations mapped to physical production stations. Real-time tag capture with configurable read intervals and signal filtering.',
  },
  {
    icon: '⚡',
    title: 'Event-Driven Pipeline',
    desc: 'MQTT event streaming via AWS IoT Core processes tag reads in sub-second latency. Events flow through a Node.js processing engine that handles deduplication, location resolution, and state transitions.',
  },
  {
    icon: '🔄',
    title: 'Real-Time WebSocket Layer',
    desc: 'Socket.IO delivers instant updates to all connected clients. Redis Pub/Sub ensures consistency across ECS container instances. No polling — pure push architecture.',
  },
  {
    icon: '👥',
    title: 'Multi-Role Dashboard System',
    desc: '6 distinct user roles — Admin, Manager, Operator, Salesperson, Jeweler, Designer — each with tailored views, permissions, and workflows built in React/TypeScript.',
  },
  {
    icon: '📊',
    title: 'Production Analytics',
    desc: 'Workflow analytics, capacity planning, on-time delivery tracking, department performance metrics, and root cause analysis dashboards for production managers.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    desc: 'AWS ECS (multi-container), RDS PostgreSQL, ElastiCache Redis, S3 image storage, IoT Core, with Docker containers and CI/CD deployment pipelines.',
  },
]

const techStack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Socket.IO Client'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Sequelize ORM', 'Socket.IO', 'MQTT.js'] },
  { category: 'Data', items: ['PostgreSQL', 'Redis', 'AWS IoT Core', 'JSONB'] },
  { category: 'Infrastructure', items: ['AWS ECS', 'RDS', 'ElastiCache', 'S3', 'Docker', 'CI/CD'] },
  { category: 'Hardware', items: ['Zebra FX9600', 'RFID Antennas', 'EPC Gen2 Tags'] },
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
                RFID-Based Real-Time<br />Production Tracking
              </h3>
              <p className="mt-2 text-accent">Jason of Beverly Hills — Luxury Jewelry Manufacturing</p>
              <p className="mt-5 max-w-xl leading-relaxed text-text-secondary">
                A full-stack production tracking platform that replaced manual
                paper-based workflows with real-time RFID tracking across
                an entire manufacturing facility. The system processes thousands
                of tag events daily, giving production teams, managers, salespeople,
                and designers live visibility into every order's journey.
              </p>
            </div>

            {/* Metrics */}
            <div className="flex gap-10 lg:flex-col lg:gap-8 lg:text-right">
              <div>
                <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">30%</span>
                <p className="mt-1 text-sm text-text-muted">Labor efficiency<br />increase</p>
              </div>
              <div>
                <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">90%</span>
                <p className="mt-1 text-sm text-text-muted">Tracking error<br />reduction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
            Application
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                  <div className="hidden items-center justify-center h-full w-full text-text-muted text-sm">
                    {title}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-text-primary">{title}</h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Built */}
        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
            What I Built
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon, title, desc }) => (
              <div key={title} className="glow-card rounded-xl border border-border bg-bg-card p-6">
                <span className="text-2xl">{icon}</span>
                <h4 className="mt-3 text-sm font-semibold text-text-primary">{title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
            System Architecture
          </p>
          <div className="mt-8 flex justify-center overflow-x-auto pb-4">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {archSteps.map((step, i) => (
                <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                  <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-6 sm:py-4">
                    <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>
                      {step.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-text-muted sm:text-xs">
                      {step.desc}
                    </div>
                  </div>
                  {i < archSteps.length - 1 && (
                    <span className="font-mono text-sm text-text-muted/40 sm:text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Tech Stack */}
        <div className="mt-16">
          <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-text-muted">
            Tech Stack
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs font-medium text-text-secondary">{category}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-accent-border px-3 py-1 text-xs text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
