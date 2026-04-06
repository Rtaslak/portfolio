import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/raffi-taslakian/" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors duration-200 hover:text-accent" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:rtaslakian@gmail.com" className="text-text-muted transition-colors duration-200 hover:text-accent" aria-label="Email">
            <EmailIcon />
          </a>
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden gap-7 lg:flex">
            <li>
              <Link to="/about" className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text-primary">About Me</Link>
            </li>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-[13px] text-text-muted transition-colors duration-200 hover:text-text-primary">{label}</a>
              </li>
            ))}
          </ul>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-hover">
            Resume
          </a>
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 lg:hidden" aria-label="Menu">
            <span className={`block h-px w-5 bg-text-muted transition-all duration-200 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-text-muted transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-text-muted transition-all duration-200 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/50 px-6 pb-4 lg:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <Link to="/about" onClick={() => setOpen(false)} className="text-sm text-text-muted">About Me</Link>
            </li>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="text-sm text-text-muted">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
