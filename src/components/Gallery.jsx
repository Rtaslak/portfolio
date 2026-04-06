import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const screenshots = [
  { src: '/screenshots/login.png', title: 'Secure Authentication', desc: 'Login with email/password or Google SSO. Role-based access control.' },
  { src: '/screenshots/dashboard.png', title: 'Multi-Location Dashboard', desc: 'Overview of all facilities — departments, active orders, and total items per location.' },
  { src: '/screenshots/orders.png', title: 'Order Management', desc: '415 orders tracked with status, store, product type, priority, and due dates.' },
  { src: '/screenshots/rfid-mapping.png', title: 'RFID Reader Mapping', desc: 'Visual mapping of Zebra FX9600 antennas to departments — tag assignment, hold stations, and gate zones.' },
  { src: '/screenshots/orders-gallery.png', title: 'Product Image Gallery', desc: 'High-res product images for each order — luxury jewelry pieces with status and pricing.' },
  { src: '/screenshots/diagnostics.png', title: 'System Diagnostics', desc: 'Real-time health monitoring — API, Redis, MQTT, WebSocket, and ECS container status.' },
  { src: '/screenshots/design-studio.png', title: 'AI Design Studio', desc: 'AI-powered jewelry design tool with style parameters, gallery, and prompt-based generation.' },
  { src: '/screenshots/approval-queue.png', title: 'Approval Queue', desc: 'Managers review and approve/reject submitted orders with images before production begins.' },
]

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [imgError, setImgError] = useState(false)
  const current = screenshots[active]

  useEffect(() => setImgError(false), [active])

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
            {!imgError ? (
              <img
                src={current.src}
                alt={current.title}
                className="h-full w-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full text-text-muted text-sm">
                {current.title}
              </div>
            )}
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
          aria-label="Previous screenshot"
        >
          ‹
        </button>
        <button
          onClick={() => setActive(active < screenshots.length - 1 ? active + 1 : 0)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-bg/70 text-text-muted backdrop-blur-sm transition-colors hover:text-text-primary"
          aria-label="Next screenshot"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {screenshots.map(({ src, title }, i) => (
          <Thumbnail key={src} src={src} title={title} index={i} active={active} onSelect={setActive} />
        ))}
      </div>
    </div>
  )
}

function Thumbnail({ src, title, index, active, onSelect }) {
  const [error, setError] = useState(false)

  return (
    <button
      onClick={() => onSelect(index)}
      className={`shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
        index === active
          ? 'border-accent ring-1 ring-accent/30'
          : 'border-border opacity-50 hover:opacity-80'
      }`}
    >
      <div className="h-16 w-28 sm:h-20 sm:w-36 bg-bg-elevated flex items-center justify-center">
        {!error ? (
          <img src={src} alt={title} className="h-full w-full object-cover object-top" onError={() => setError(true)} />
        ) : (
          <span className="text-[10px] text-text-muted">{index + 1}</span>
        )}
      </div>
    </button>
  )
}
