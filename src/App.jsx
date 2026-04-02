import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

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
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <footer className="border-t border-border/30 px-6 py-8">
        <p className="text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Raffi Taslakian — Built with React & Tailwind CSS
        </p>
      </footer>
    </>
  )
}
