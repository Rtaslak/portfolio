import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

function Gallery({ screenshots }) {
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

export default function ProjectCase({ project }) {
  const { problem, solution, results } = project

  return (
    <section id={project.id} className="px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">

        {/* --- CONTEXT --- */}
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-text-muted text-center">{project.label}</p>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl text-text-primary">
            {project.title}
          </h2>
          <p className="mt-2 text-center text-accent">{project.company}</p>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-text-secondary">
            {project.description}
          </p>
        </FadeIn>

        {/* --- PROBLEM / SOLUTION --- */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">{problem.heading}</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">{problem.statement}</p>
              <ul className="mt-4 space-y-2.5">
                {problem.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border bg-bg-card p-7 h-full">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">{solution.heading}</p>
              <p className="mt-4 text-[15px] font-medium text-text-primary">{solution.statement}</p>
              <ul className="mt-4 space-y-2.5">
                {solution.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* --- RESULTS --- */}
        <FadeIn>
          <div className="mt-10 rounded-xl border border-green/15 bg-green/[0.03] p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green/60">{results.label}</p>
            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {results.metrics.map((m) => (
                <div key={m.description}>
                  <span className="text-3xl font-bold text-text-primary sm:text-4xl">{m.value}</span>
                  <p className="mt-1 text-sm text-text-secondary">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* --- FEATURES --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">
              {project.featuresHeading}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary">
              {project.featuresSubtext}
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map(({ title, desc }, i) => (
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
            <Gallery screenshots={project.screenshots} />
            {project.reportUrl && (
              <div className="mt-4 text-center">
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-accent/30 hover:text-text-primary"
                >
                  View sample report →
                </a>
              </div>
            )}
          </div>
        </FadeIn>

        {/* --- HOW IT WORKS --- */}
        <FadeIn>
          <div className="mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted text-center">How It Works</p>
            <p className="mt-4 mx-auto max-w-2xl text-center text-sm text-text-secondary">
              {project.howItWorksText}
            </p>
            <div className="mt-8 flex justify-center overflow-x-auto pb-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-max">
                {project.archSteps.map((step, i) => (
                  <div key={step.name} className="flex items-center gap-2 sm:gap-3">
                    <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-accent/30">
                      <div className={`font-mono text-xs font-semibold sm:text-sm ${step.color}`}>{step.name}</div>
                      <div className="mt-0.5 font-mono text-[10px] text-text-muted sm:text-xs">{step.desc}</div>
                    </div>
                    {i < project.archSteps.length - 1 && (
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
            {project.techStack.map((t) => (
              <span key={t} className="rounded-md border border-border bg-bg-card px-3 py-1 text-xs text-text-muted">{t}</span>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
