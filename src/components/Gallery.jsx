import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function Gallery() {
  const [active, setActive] = useState(0)
  const current = screenshots[active]

  return (
    <div className="mt-14">
      {/* Main preview */}
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
            <img
              src={current.src}
              alt={current.title}
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden items-center justify-center h-full w-full text-text-muted text-sm">
              {current.title}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/90 to-transparent px-6 pb-5 pt-12">
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-sm font-semibold text-text-primary">{current.title}</h4>
              <p className="mt-1 text-[13px] text-text-secondary">{current.desc}</p>
            </div>
            <span className="text-xs text-text-muted">{active + 1} / {screenshots.length}</span>
          </div>
        </div>

        {/* Arrow nav */}
        <button
          onClick={() => setActive(active > 0 ? active - 1 : screenshots.length - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bg/70 text-text-muted backdrop-blur-sm transition-colors hover:text-text-primary"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => setActive(active < screenshots.length - 1 ? active + 1 : 0)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bg/70 text-text-muted backdrop-blur-sm transition-colors hover:text-text-primary"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {screenshots.map(({ src, title }, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
              i === active
                ? 'border-accent ring-1 ring-accent/30'
                : 'border-border opacity-50 hover:opacity-80'
            }`}
          >
            <div className="h-16 w-28 sm:h-20 sm:w-36 bg-bg-elevated flex items-center justify-center">
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden items-center justify-center h-full w-full text-[10px] text-text-muted">
                {i + 1}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
