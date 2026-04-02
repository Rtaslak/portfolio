const skillAreas = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'Socket.IO'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'WebSockets'] },
  { title: 'Data', skills: ['PostgreSQL', 'Redis', 'Sequelize'] },
  { title: 'IoT', skills: ['RFID', 'MQTT', 'AWS IoT Core', 'Zebra FX9600'] },
  { title: 'Cloud', skills: ['AWS ECS', 'RDS', 'S3', 'Docker', 'CI/CD'] },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:px-8 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Technical</span>{' '}
        <span className="text-accent">Skills</span>
      </h2>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillAreas.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-[13px] font-semibold text-text-secondary">{title}</h3>
            <ul className="mt-3 space-y-1.5">
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
