const experiences = [
  {
    period: '2021 - Present',
    title: 'Full Stack Engineer',
    company: 'Jason of Beverly Hills',
    description:
      'Designed and deployed a full-stack RFID-based order tracking and manufacturing workflow platform, integrating Zebra FX9600 readers and processing thousands of real-time tag events. Developed scalable backend architecture using Node.js and PostgreSQL, engineered MQTT-based event streaming pipelines, and built a React dashboard for real-time monitoring.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'MQTT', 'AWS'],
  },
  {
    period: '2019 - 2020',
    title: 'Software Developer',
    company: 'Darksight, ME Infosec',
    description:
      'Designed and tested custom SIEM platform modules for cybersecurity monitoring. Wrote and executed detailed test cases, identifying key system vulnerabilities and improving overall product reliability.',
    tags: ['Security', 'SIEM', 'Testing'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-20 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">My</span>{' '}
        <span className="text-accent">Experience</span>
      </h2>
      <div className="mx-auto mt-16 max-w-4xl space-y-12">
        {experiences.map(({ period, title, company, description, tags }) => (
          <div
            key={title}
            className="flex flex-col gap-4 sm:flex-row sm:gap-16"
          >
            <div className="shrink-0 sm:w-40">
              <p className="text-sm text-text-muted">{period}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary">
                {title}{' '}
                <span className="font-normal text-text-secondary">
                  — {company}
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/25 px-3 py-1 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
