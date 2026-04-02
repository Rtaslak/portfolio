import FadeIn from './FadeIn'

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
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Technical <span className="text-accent">Skills</span>
        </h2>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillAreas.map(({ title, skills }, i) => (
          <FadeIn key={title} delay={i * 0.05}>
            <div className="rounded-xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-border-accent/30">
              <h3 className="text-[13px] font-semibold text-accent">{title}</h3>
              <ul className="mt-3 space-y-1.5">
                {skills.map((skill) => (
                  <li key={skill} className="text-sm text-text-secondary">{skill}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
