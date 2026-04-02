import FadeIn from './FadeIn'

const highlights = [
  { value: '4+', label: 'Years Experience' },
  { value: '1000s', label: 'Daily Events' },
  { value: '50+', label: 'Components Built' },
  { value: '6', label: 'User Roles' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 sm:py-28">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          About <span className="text-accent">Me</span>
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-start">
        <FadeIn className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Raffi Taslakian"
            className="h-80 w-64 rounded-2xl border border-border object-cover sm:h-[400px] sm:w-[300px]"
          />
        </FadeIn>

        <div className="flex-1">
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl">
              I build real-time systems that connect hardware to software.
              I own projects end to end — from RFID readers and MQTT pipelines
              to React dashboards and AWS infrastructure.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 leading-relaxed text-text-secondary">
              At Jason of Beverly Hills, I built a full-stack RFID tracking
              platform for luxury jewelry manufacturing — Zebra FX9600 readers,
              real-time event processing through AWS IoT Core, and live
              multi-role dashboards used daily by the entire production team.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {highlights.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-text-primary">{value}</div>
                  <div className="mt-1 text-xs text-text-muted">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
