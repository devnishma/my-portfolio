export default function Education() {
  const timelineEntries = [
    {
      period: '2026',
      role: 'Web Development Internship',
      institution: 'Enscala (enscala.in)',
      category: 'Practical Experience',
      summary:
        'Hands-on internship contributing to the official Enscala website. Focused on responsive frontend development, cross-device layout precision, asset optimization, and Git collaboration on a live production platform.',
    },
    {
      period: '2025 — 2026',
      role: 'Web Development & Coding Course',
      institution: 'Softnova Digit, Karulai',
      category: 'Professional Technical Course',
      summary:
        'Comprehensive full stack training program covering modern frontend architecture (React, JavaScript ES6+, HTML5, CSS3), server-side engineering (Node.js, Express.js, NestJS), database management (MongoDB), and collaborative Git workflows.',
    },
    {
      period: '2021 — 2024',
      role: 'Bachelor of Commerce (B.Com) – Taxation Specialization',
      institution: 'Fathima Arts and Science College, Moothedam',
      category: 'Undergraduate Degree',
      summary:
        'Three-year undergraduate degree with specialization in Taxation. Developed strong analytical reasoning, quantitative data handling, financial logic, and procedural accuracy before transitioning into software development.',
    },
    {
      period: '2022',
      role: 'Diploma in Accounting',
      institution: 'Acme Technical College, Nilambur',
      category: 'Professional Certification',
      summary:
        'Focused professional certification covering double-entry bookkeeping, ledger reconciliation, statutory tax frameworks, and financial data management.',
    },
    {
      period: '2019 — 2021',
      role: 'Higher Secondary Education (HSE) – Science Stream',
      institution: 'KMHSS Karulai',
      category: 'Higher Secondary',
      summary:
        'Completed Plus Two education in the Science stream, establishing foundational analytical, mathematical, and logical problem-solving skills.',
    },
  ]

  return (
    <section id="education" className="content-section education-section">
      <div className="section-container">
        <div className="section-header-block reveal-item">
          <span className="section-kicker">04 / Chronology</span>
          <h2 className="editorial-heading">Education &amp; Qualifications</h2>
          <p className="section-intro-text">
            Academic degrees, professional certifications, and web development milestones from my verified CV.
          </p>
        </div>

        <div className="editorial-timeline">
          {timelineEntries.map((entry, index) => (
            <div key={index} className="timeline-row reveal-item">
              <div className="timeline-date-col">
                <span className="timeline-year-text">{entry.period}</span>
                <span className="timeline-category-tag">{entry.category}</span>
              </div>

              <div className="timeline-body-col">
                <span className="timeline-node-marker" aria-hidden="true"></span>
                <h3 className="timeline-role-heading">{entry.role}</h3>
                <span className="timeline-institution-sub">{entry.institution}</span>
                <p className="timeline-description-text">{entry.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
