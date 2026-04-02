export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 sm:px-8">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-dim px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            <span className="text-xs text-text-secondary">Available for opportunities</span>
          </div>

          <h1 className="mt-6 text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight text-text-primary">
            Raffi<br />Taslakian
          </h1>

          <p className="mt-5 text-xl sm:text-2xl">
            <span className="text-accent">Full-Stack Engineer</span>{' '}
            <span className="text-text-muted">·</span>{' '}
            <span className="text-text-secondary">RFID & IoT Systems</span>
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            I build real-time, production-grade systems that connect physical
            operations with modern software — from RFID hardware on the factory
            floor to live dashboards in the cloud.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#project"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-accent-border hover:text-text-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-blue/10 blur-sm" />
            <img
              src="/profile.jpg"
              alt="Raffi Taslakian"
              className="relative h-72 w-60 rounded-2xl border border-border object-cover sm:h-[420px] sm:w-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
