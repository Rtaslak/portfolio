const skills = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Python', icon: 'PY' },
  { name: 'React', icon: 'Re' },
  { name: 'Node.js', icon: 'No' },
  { name: 'PostgreSQL', icon: 'PG' },
  { name: 'AWS', icon: 'AW' },
  { name: 'MQTT', icon: 'MQ' },
  { name: 'Docker', icon: 'Do' },
  { name: 'WebSockets', icon: 'WS' },
  { name: 'RFID', icon: 'RF' },
  { name: 'REST APIs', icon: 'AP' },
  { name: 'Git', icon: 'Gi' },
]

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-20 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">Tech</span>{' '}
        <span className="text-accent">Stack</span>
      </h2>
      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-bg-card p-5 transition-colors hover:border-accent/30"
          >
            <span className="font-mono text-lg font-semibold text-accent">{icon}</span>
            <span className="text-xs text-text-secondary">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
