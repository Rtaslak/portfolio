const experiences = [
  {
    period: 'Nov 2021 — Present',
    title: 'Full Stack Engineer / RFID & IoT Systems',
    company: 'Jason of Beverly Hills',
    location: 'Los Angeles, CA',
    bullets: [
      'Built a full-stack RFID tracking platform — Zebra FX9600 readers processing thousands of tag events daily.',
      'Node.js + PostgreSQL + Redis backend with MQTT event streaming through AWS IoT Core.',
      'React/TypeScript dashboard with 50+ components — real-time monitoring, analytics, and multi-role access.',
      'AWS infrastructure: ECS, RDS, ElastiCache, S3, IoT Core, Docker, CI/CD.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'MQTT', 'Docker'],
    impact: '30% efficiency increase · 90% fewer tracking errors',
  },
  {
    period: 'May 2019 — Aug 2020',
    title: 'Software Developer',
    company: 'Darksight, ME Infosec',
    location: 'Beirut, Lebanon',
    bullets: [
      'Designed and tested custom SIEM modules for cybersecurity monitoring.',
      'Identified system vulnerabilities through detailed test case execution.',
    ],
    tags: ['Security', 'SIEM', 'Testing'],
  },
]

const education = {
  degree: 'B.S. Computer & Communication Engineering',
  school: 'Lebanese International University',
  location: 'Lebanon',
  year: '2021',
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:px-8 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Work</span>{' '}
        <span className="text-accent">Experience</span>
      </h2>

      <div className="mx-auto mt-16 max-w-4xl">
        {experiences.map(({ period, title, company, location, bullets, tags, impact }) => (
          <div key={title + company} className="flex flex-col gap-4 sm:flex-row sm:gap-12">
            <div className="shrink-0 sm:w-44 sm:pt-1">
              <p className="text-sm text-text-muted">{period}</p>
              <p className="text-xs text-text-muted">{location}</p>
            </div>

            <div className="relative flex-1 border-l border-border pl-6 pb-14">
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />

              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="mt-0.5 text-accent">{company}</p>

              <ul className="mt-4 space-y-2">
                {bullets.map((b, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text-secondary">{b}</li>
                ))}
              </ul>

              {impact && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-green/20 bg-green/5 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  <span className="text-sm font-medium text-green">{impact}</span>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-accent-border px-3 py-1 text-xs text-accent">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
          <div className="shrink-0 sm:w-44 sm:pt-1">
            <p className="text-sm text-text-muted">{education.year}</p>
            <p className="text-xs text-text-muted">{education.location}</p>
          </div>
          <div className="relative flex-1 border-l border-border pl-6 pb-4">
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-blue bg-bg" />
            <h3 className="text-lg font-semibold text-text-primary">{education.degree}</h3>
            <p className="mt-0.5 text-blue">{education.school}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
