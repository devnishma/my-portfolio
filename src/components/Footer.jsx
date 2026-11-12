import { ArrowUp } from 'lucide-react'
import { Github, Instagram, Whatsapp } from './Icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const githubUrl = 'https://github.com/YOUR_GITHUB_USERNAME'
  const instagramUrl = 'https://instagram.com/YOUR_INSTAGRAM_USERNAME'
  const whatsappUrl = 'https://wa.me/YOUR_PHONE_NUMBER'

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="editorial-footer">
      <div className="section-container reveal-fade">
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-title">
              <span>Nishma A</span>
              <span className="lime-mark">.</span>
            </a>
            <p className="footer-bio-note">
              Full Stack Developer specializing in React, Node.js, and MongoDB.
              Focused on crafting clean, high-performance web applications.
            </p>
          </div>

          <div className="footer-links-col">
            <span className="footer-subhead">Navigation</span>
            <ul className="footer-menu">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-menu-item"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-col">
            <span className="footer-subhead">Social</span>
            <div className="footer-social-buttons">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-square"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github size={17} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-square"
                aria-label="Instagram"
                title="Instagram Profile"
              >
                <Instagram size={17} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-square"
                aria-label="WhatsApp"
                title="WhatsApp Chat"
              >
                <Whatsapp size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-meta-row">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Nishma A. All rights reserved.
          </span>

          <span className="footer-tech-credit">React &bull; Vite &bull; Clean Architecture</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-btn"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
