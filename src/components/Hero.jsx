import { motion } from 'framer-motion'

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 sm:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-xs text-text-secondary">Available for opportunities</span>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="mt-6 text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight text-text-primary">
            Raffi Taslakian
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-4 text-xl sm:text-2xl">
            <span className="text-accent">Full-Stack Engineer</span>
            <span className="text-text-muted"> · </span>
            <span className="text-text-secondary">RFID & IoT Systems</span>
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
            I built the real-time RFID tracking system that runs production
            at Jason of Beverly Hills, a luxury jewelry manufacturer where
            a single lost piece can cost tens of thousands of dollars. From
            Zebra RFID readers on the factory floor to live React dashboards
            in the cloud, I own the full stack.
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#project" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25">
              See What I Built
            </a>
            <a href="#contact" className="rounded-md border border-border px-6 py-3 text-sm text-text-secondary transition-all duration-200 hover:border-text-muted hover:text-text-primary">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-cyan/20 blur-sm" />
            <img
              src="/profile.jpg"
              alt="Raffi Taslakian"
              className="relative h-72 w-60 rounded-2xl border border-border object-cover sm:h-[420px] sm:w-[340px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
