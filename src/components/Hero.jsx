export default function Hero() {
  return (
    <section className="px-8 pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-extralight leading-[1.05] tracking-tight text-text-primary">
            Raffi Taslakian
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            <span className="text-accent">Full-Stack</span>{' '}
            <span className="text-text-secondary">Engineer</span>
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
            Full-stack engineer focused on building real-time, production-grade
            systems that connect physical operations with modern software.
            Designed and deployed an RFID-driven tracking platform used in
            manufacturing environments, delivering live visibility and automation
            across complex workflows.
          </p>
        </div>
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Raffi Taslakian"
            className="h-72 w-60 rounded-2xl border border-border object-cover sm:h-96 sm:w-80"
          />
        </div>
      </div>
    </section>
  )
}
