import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const experience = [
  {
    period: 'Nov 2021 – Present',
    title: 'Full Stack Engineer / RFID & IoT Systems',
    company: 'Jason of Beverly Hills',
    location: 'Los Angeles, CA',
    bullets: [
      'Built a full-stack RFID tracking platform. Zebra FX9600 readers processing thousands of tag events daily.',
      'Node.js + PostgreSQL + Redis backend with MQTT event streaming through AWS IoT Core.',
      'React/TypeScript dashboard with 50+ components. Real-time monitoring, analytics, multi-role access.',
      'AWS infrastructure: ECS, RDS, ElastiCache, S3, IoT Core, Docker, CI/CD.',
    ],
  },
  {
    period: 'May 2019 – Aug 2020',
    title: 'Software Developer',
    company: 'Darksight, ME Infosec',
    location: 'Beirut, Lebanon',
    bullets: [
      'Designed and tested custom SIEM modules for cybersecurity monitoring.',
      'Identified system vulnerabilities through detailed test case execution.',
    ],
  },
]

const skills = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Socket.IO'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'WebSockets'] },
  { title: 'Data', items: ['PostgreSQL', 'Redis', 'Sequelize'] },
  { title: 'IoT', items: ['RFID', 'MQTT', 'AWS IoT Core', 'Zebra FX9600'] },
  { title: 'Cloud', items: ['AWS ECS', 'RDS', 'S3', 'Docker', 'CI/CD'] },
]

export default function About() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-8">
          <Link to="/" className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary">
            ← Back
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-md bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-hover">
            Resume
          </a>
        </div>
      </nav>

      <main className="px-6 pt-28 pb-20 sm:px-8 sm:pt-36">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <motion.div {...fade(0)} className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12">
            <img
              src="/profile.jpg"
              alt="Raffi Taslakian"
              className="h-48 w-40 shrink-0 rounded-2xl border border-border object-cover sm:h-56 sm:w-44"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Raffi Taslakian
              </h1>
              <p className="mt-2 text-lg text-accent">Full-Stack Engineer · RFID & IoT Systems</p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                I build real-time systems that connect hardware to software.
                I own projects end to end, from RFID readers and MQTT pipelines
                to React dashboards and AWS infrastructure. Based in Los Angeles.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <FadeIn>
            <div className="mt-20">
              <h2 className="text-xl font-bold text-text-primary">Experience</h2>
              <div className="mt-8 space-y-10">
                {experience.map(({ period, title, company, location, bullets }) => (
                  <div key={title + company} className="flex flex-col gap-3 sm:flex-row sm:gap-10">
                    <div className="shrink-0 sm:w-40">
                      <p className="text-sm text-text-muted">{period}</p>
                      <p className="text-xs text-text-muted">{location}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[15px] font-semibold text-text-primary">{title}</h3>
                      <p className="text-sm text-accent">{company}</p>
                      <ul className="mt-3 space-y-1.5">
                        {bullets.map((b, i) => (
                          <li key={i} className="text-sm leading-relaxed text-text-secondary">{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn>
            <div className="mt-16">
              <h2 className="text-xl font-bold text-text-primary">Education</h2>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-10">
                <div className="shrink-0 sm:w-40">
                  <p className="text-sm text-text-muted">2021</p>
                  <p className="text-xs text-text-muted">Lebanon</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-text-primary">B.S. Computer & Communication Engineering</h3>
                  <p className="text-sm text-accent">Lebanese International University</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Skills */}
          <FadeIn>
            <div className="mt-16">
              <h2 className="text-xl font-bold text-text-primary">Skills</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map(({ title, items }) => (
                  <div key={title}>
                    <p className="text-[13px] font-semibold text-accent">{title}</p>
                    <ul className="mt-2 space-y-1">
                      {items.map((s) => (
                        <li key={s} className="text-sm text-text-secondary">{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </main>

      <footer className="border-t border-border/30 px-6 py-8">
        <p className="text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Raffi Taslakian
        </p>
      </footer>
    </div>
  )
}
