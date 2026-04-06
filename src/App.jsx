import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Contact from './components/Contact'

function Divider() {
  return <div className="section-divider mx-auto max-w-5xl" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Project />
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
