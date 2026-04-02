const skillAreas = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'shadcn/ui', 'Socket.IO Client', 'Responsive Design'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'REST APIs', 'WebSockets', 'Sequelize ORM', 'MQTT.js'],
  },
  {
    title: 'Databases & Caching',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'JSONB', 'Data Modeling'],
  },
  {
    title: 'Architecture & Systems',
    skills: ['Event-Driven Architecture', 'Real-Time Systems', 'Pub/Sub Patterns', 'Microservices'],
  },
  {
    title: 'IoT & Hardware',
    skills: ['RFID Systems', 'Zebra FX9600', 'MQTT Protocol', 'AWS IoT Core', 'Hardware Integration'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (ECS, RDS, S3, ElastiCache)', 'Docker', 'CI/CD Pipelines', 'Nginx', 'Linux'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'VS Code', 'AI-Assisted Development', 'Agile', 'System Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Technical</span>{' '}
        <span className="text-accent">Skills</span>
      </h2>

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillAreas.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-[13px] font-semibold text-text-secondary">{title}</h3>
            <ul className="mt-3 space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
