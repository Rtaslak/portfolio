const archSteps = [
  { name: 'RFID Reader', desc: 'Zebra FX9600' },
  { name: 'MQTT Broker', desc: 'Event Stream' },
  { name: 'Node.js API', desc: 'Processing' },
  { name: 'WebSocket', desc: 'Live Push' },
  { name: 'React UI', desc: 'Dashboard' },
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Featured</span>{' '}
        <span className="text-accent">Project</span>
      </h2>

      <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-bg-card p-8 sm:p-12">
        <h3 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          RFID-Based Real-Time Order Tracking
        </h3>
        <p className="mt-2 text-sm text-accent">
          Jason of Beverly Hills — Production System
        </p>
        <p className="mt-6 leading-relaxed text-text-secondary">
          A production system used in manufacturing to track orders in real time
          using RFID hardware. Scan events are captured at physical checkpoints,
          streamed through an MQTT broker, processed by a Node.js backend, and
          pushed to a React dashboard via WebSockets. The system replaced manual
          paper-based tracking, giving floor managers live visibility into order
          status, bottlenecks, and throughput.
        </p>

        {/* Metrics */}
        <div className="mt-10 flex gap-16">
          <div>
            <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              30%
            </span>
            <p className="mt-1 text-sm text-text-muted">Increase in labor efficiency</p>
          </div>
          <div>
            <span className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              90%
            </span>
            <p className="mt-1 text-sm text-text-muted">Reduction in tracking errors</p>
          </div>
        </div>

        {/* Architecture */}
        <div className="mt-12 border-t border-border pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
            System Architecture
          </p>
          <div className="mt-6 overflow-x-auto pb-2">
            <div className="flex items-center gap-3 min-w-max">
              {archSteps.map((step, i) => (
                <div key={step.name} className="flex items-center gap-3">
                  <div className="rounded-lg border border-border bg-bg-elevated px-6 py-4 text-center">
                    <div className="font-mono text-sm font-medium text-text-primary">
                      {step.name}
                    </div>
                    <div className="mt-1 font-mono text-xs text-text-muted">
                      {step.desc}
                    </div>
                  </div>
                  {i < archSteps.length - 1 && (
                    <span className="font-mono text-lg text-accent/40">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="mt-8 flex flex-wrap gap-2">
          {['React', 'Node.js', 'PostgreSQL', 'MQTT', 'WebSockets', 'AWS', 'Zebra FX9600'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/25 px-3 py-1 text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
