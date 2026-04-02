export default function About() {
  return (
    <section id="about" className="px-8 py-20 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">About</span>{' '}
        <span className="text-accent">Me</span>
      </h2>
      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start">
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Raffi Taslakian"
            className="h-80 w-64 rounded-2xl border border-border object-cover sm:h-96 sm:w-72"
          />
        </div>
        <div className="flex-1">
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            Experienced in Node.js, React, PostgreSQL, and AWS, with a strong
            focus on event-driven architecture, low-latency systems, and scalable
            backend design. Known for owning systems end to end — from hardware
            integration and data pipelines to frontend applications and
            deployment.
          </p>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            At Jason of Beverly Hills, I designed and deployed a full-stack
            RFID-based order tracking platform integrating Zebra FX9600 readers,
            processing thousands of real-time tag events daily. The system
            replaced manual paper-based tracking, giving manufacturing teams live
            visibility into order status, bottlenecks, and throughput.
          </p>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
            I care about building reliable systems that solve real problems —
            bridging the gap between hardware and software with clean
            architecture and thoughtful engineering.
          </p>
        </div>
      </div>
    </section>
  )
}
