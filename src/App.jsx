import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-section, .reveal-item, .reveal-fade')
    if (!targets.length) return

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        visibleEntries.forEach((entry, idx) => {
          const el = entry.target
          if (idx > 0) {
            el.style.setProperty('--reveal-delay', `${Math.min(idx * 60, 240)}ms`)
          }
          el.classList.add('is-visible')
          observer.unobserve(el)
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -24px 0px' }
    )

    targets.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
