import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

function Divider() {
  return <div className="section-divider mx-auto max-w-6xl" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
      </main>
      <Divider />
      <footer className="px-8 py-10">
        <p className="text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Raffi Taslakian
        </p>
      </footer>
    </>
  )
}
