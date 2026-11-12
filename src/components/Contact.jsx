import { useState } from 'react'
import { Mail, Copy, Check, Send } from 'lucide-react'
import { Github, Whatsapp, Instagram } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // Email address
  const emailAddress = 'nishma.dev@outlook.com'

  // Social & messaging placeholders
  const whatsappUrl = 'https://wa.me/YOUR_PHONE_NUMBER'
  const instagramUrl = 'https://instagram.com/YOUR_INSTAGRAM_USERNAME'
  const githubUrl = 'https://github.com/YOUR_GITHUB_USERNAME'

  const handleCopyEmail = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="content-section section-surface-alt contact-section">
      <div className="section-container">
        <div className="section-header-block reveal-item">
          <span className="section-kicker">05 / Get in Touch</span>
          <h2 className="editorial-heading">Contact</h2>
          <p className="section-intro-text">
            Available for developer roles, freelance projects, and technical collaborations.
          </p>
        </div>

        <div className="contact-editorial-layout">
          {/* Left Column: Direct Channels */}
          <div className="contact-details-col reveal-item">
            <h3 className="contact-col-heading">Direct Inquiries</h3>
            <p className="contact-col-sub">
              Feel free to email me directly or reach out via WhatsApp or social channels.
            </p>

            {/* 1. Email Channel */}
            <div className="contact-channel-item">
              <a
                href={`mailto:${emailAddress}`}
                className="channel-icon-anchor"
                title="Open default email application"
                aria-label="Send email"
              >
                <Mail size={18} className="channel-icon" />
              </a>
              <div className="channel-text-meta">
                <span className="channel-caption">Email Address</span>
                <a
                  href={`mailto:${emailAddress}`}
                  className="channel-value"
                  title="Open default email application"
                >
                  {emailAddress}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="channel-copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check size={15} className="copied-accent" /> : <Copy size={15} />}
              </button>
            </div>

            {/* Social Channels: WhatsApp, Instagram, GitHub */}
            <div className="channels-group">
              <span className="channels-group-title">Messaging &amp; Socials</span>
              <div className="channels-pill-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-pill-link"
                  title="Chat on WhatsApp"
                >
                  <Whatsapp size={16} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-pill-link"
                  title="View Instagram Profile"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-pill-link"
                  title="View GitHub Profile"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="availability-note">
              <span className="notice-title">Open for Opportunities</span>
              <span className="notice-desc">
                Actively considering Full Stack Developer positions and internships.
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="contact-form-col reveal-item">
            <h3 className="form-title">Send a Direct Message</h3>
            <p className="form-subtitle">Fill in the fields below and I will get back to you promptly.</p>

            {formSubmitted ? (
              <div className="form-feedback-card">
                <h4 className="feedback-title">Message Sent</h4>
                <p className="feedback-desc">
                  Thank you for reaching out. I have received your message and will respond shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="feedback-reset-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">
                <div className="form-grid-row">
                  <div className="form-field-group">
                    <label htmlFor="name" className="field-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      required
                      className="field-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="email" className="field-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="subject" className="field-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Opportunity / Collaboration"
                    required
                    className="field-input"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    required
                    className="field-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>Send Message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
