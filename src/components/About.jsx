const highlights = [
  { value: '4+', label: 'Years Experience' },
  { value: '1000s', label: 'Daily RFID Events Processed' },
  { value: '50+', label: 'Components Built' },
  { value: '6', label: 'User Roles Supported' },
]

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:px-8 sm:py-28">
      <h2 className="text-center text-3xl font-light tracking-tight sm:text-4xl">
        <span className="text-text-primary">About</span>{' '}
        <span className="text-accent">Me</span>
      </h2>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-start">
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Raffi Taslakian"
            className="h-80 w-64 rounded-2xl border border-border object-cover sm:h-[400px] sm:w-[300px]"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
            Full-stack engineer focused on building real-time, production-grade
            systems that connect physical operations with modern software. I
            own systems end to end — from hardware integration and MQTT data
            pipelines to React dashboards and AWS deployment.
          </p>

          <p className="mt-5 leading-relaxed text-text-secondary">
            At Jason of Beverly Hills, I designed and deployed a full-stack
            RFID-based order tracking platform for luxury jewelry manufacturing.
            The system integrates Zebra FX9600 readers, processes thousands of
            real-time tag events through AWS IoT Core, and delivers live
            updates across multi-role dashboards used by production teams,
            managers, salespeople, and designers.
          </p>

          <p className="mt-5 leading-relaxed text-text-secondary">
            I care about clean architecture, reliable infrastructure, and
            building systems that solve real problems. Before Jason of Beverly
            Hills, I worked in cybersecurity — designing and testing SIEM
            platform modules at Darksight, ME Infosec.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {highlights.map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-text-primary">{value}</div>
                <div className="mt-1 text-xs text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
