import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCase from './components/ProjectCase'
import Contact from './components/Contact'
import { projects } from './data/projects'

function Divider() {
  return <div className="section-divider mx-auto max-w-5xl" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {projects.map((project) => (
          <div key={project.id}>
            <Divider />
            <ProjectCase project={project} />
          </div>
        ))}
        <Divider />
        <Contact />
      </main>
      <footer className="border-t border-border/30 px-6 py-8">
        <p className="text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Raffi Taslakian
        </p>
      </footer>
    </>
  )
}
