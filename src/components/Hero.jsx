import { ArrowDown, Mail } from 'lucide-react'
import { Github } from './Icons'
import profileImg from '../assets/nishma-portrait.png'

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="section-container">
        <div className="hero-layout">
          {/* Left Column: Clean Editorial Introduction */}
          <div className="hero-main">
            <p className="hero-location hero-animate hero-step-1">Kerala, India</p>

            <h1 className="hero-name hero-animate hero-step-2">
              Nishma A<span className="lime-mark">.</span>
            </h1>
            <p className="hero-role hero-animate hero-step-2">Full Stack Developer</p>

            <p className="hero-bio hero-animate hero-step-3">
              Full Stack Developer with an analytical foundation in Commerce &amp; Taxation
              from Fathima Arts and Science College, Moothedam, and professional web engineering
              training from Softnova Digit. I build clean, reliable, and responsive web applications
              using React, Node.js, and MongoDB.
            </p>

            <div className="hero-actions hero-animate hero-step-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="hero-btn primary"
              >
                <span>View My Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hero-btn secondary"
              >
                <span>Get in Touch</span>
                <Mail size={15} />
              </a>

              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn icon"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github size={17} />
              </a>
            </div>

            <div className="hero-stack-inline hero-animate hero-step-4">
              <span className="stack-heading">Core Stack</span>
              <div className="stack-tokens">
                <span>React</span>
                <span className="token-divider">/</span>
                <span>Node.js</span>
                <span className="token-divider">/</span>
                <span>Express</span>
                <span className="token-divider">/</span>
                <span>NestJS</span>
                <span className="token-divider">/</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent, Natural Portrait */}
          <div className="hero-photo-col">
            <div className="hero-photo-frame hero-photo-animate">
              <img
                src={profileImg}
                alt="Nishma A. - Full Stack Developer"
                className="hero-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
