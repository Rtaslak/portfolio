const experiences = [
  {
    period: 'Nov 2021 — Present',
    title: 'Full Stack Engineer / RFID & IoT Systems',
    company: 'Jason of Beverly Hills',
    location: 'Los Angeles, CA',
    bullets: [
      'Designed and deployed a full-stack RFID-based order tracking and manufacturing workflow platform, integrating Zebra FX9600 readers and processing thousands of real-time tag events daily.',
      'Developed a scalable backend architecture using Node.js, Express, PostgreSQL, and Redis to support secure tracking, data storage, and real-time event processing.',
      'Engineered MQTT-based event streaming pipelines through AWS IoT Core for sub-second data delivery and reliable processing of RFID tag events.',
      'Built a React/TypeScript dashboard with 50+ components for real-time monitoring, system alerts, department tracking, workflow analytics, and multi-role access control.',
      'Managed AWS infrastructure (ECS, RDS, ElastiCache, S3, IoT Core) with Docker containerization and CI/CD deployment pipelines.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'MQTT', 'Docker', 'Socket.IO'],
    impact: '30% increase in labor efficiency · 90% reduction in manual tracking errors',
  },
  {
    period: 'May 2019 — Aug 2020',
    title: 'Software Developer / Sales',
    company: 'Darksight, ME Infosec',
    location: 'Beirut, Lebanon',
    bullets: [
      'Designed and tested custom SIEM platform modules for enterprise cybersecurity monitoring.',
      'Wrote and executed detailed test cases, identifying key system vulnerabilities and improving product reliability.',
    ],
    tags: ['Security', 'SIEM', 'Testing', 'Vulnerability Analysis'],
  },
]

const education = {
  degree: 'B.S. Computer & Communication Engineering',
  school: 'Lebanese International University',
  location: 'Beqaa Valley, Lebanon',
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

              <ul className="mt-4 space-y-2.5">
                {bullets.map((b, i) => (
                  <li key={i} className="text-sm leading-relaxed text-text-secondary">
                    {b}
                  </li>
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
                  <span key={tag} className="rounded-full border border-accent-border px-3 py-1 text-xs text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Education */}
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
