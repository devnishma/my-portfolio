export default function About() {
  return (
    <section id="about" className="content-section section-surface-alt">
      <div className="section-container">
        <div className="editorial-layout">
          {/* Left Metadata Column */}
          <div className="editorial-meta-col reveal-item">
            <span className="section-kicker">01 / About</span>
            <h2 className="editorial-heading">Background &amp; Discipline</h2>

            <div className="milestone-block">
              <div className="milestone-entry">
                <span className="milestone-year">2025–2026</span>
                <span className="milestone-title">Web Development &amp; Coding</span>
                <span className="milestone-desc">
                  Softnova Digit, Karulai. Intensive full-stack engineering with React, Node.js, and MongoDB.
                </span>
              </div>

              <div className="milestone-entry">
                <span className="milestone-year">2024</span>
                <span className="milestone-title">B.Com in Taxation</span>
                <span className="milestone-desc">
                  Fathima Arts and Science College, Moothedam. Quantitative analysis, financial modeling, and structured data handling.
                </span>
              </div>

              <div className="milestone-entry">
                <span className="milestone-year">2022</span>
                <span className="milestone-title">Diploma in Accounting</span>
                <span className="milestone-desc">
                  Acme Technical College, Nilambur. Double-entry bookkeeping, financial reconciliation, and computerized accounting systems.
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Prose */}
          <div className="editorial-prose-col reveal-item">
            <p className="prose-lead">
              I am a Full Stack Developer who bridges structured analytical discipline
              with modern web engineering.
            </p>

            <div className="prose-body">
              <p>
                My educational foundation started in commerce and financial systems. I earned my
                <strong> Bachelor of Commerce in Taxation (2024)</strong> from
                <strong> Fathima Arts and Science College, Moothedam</strong>, having also completed a
                <strong> Diploma in Accounting (2022)</strong> from
                <strong> Acme Technical College, Nilambur</strong>. This academic training ingrained in me
                a rigorous analytical mindset, strong quantitative discipline, and an uncompromising
                attention to detail when managing complex systems.
              </p>

              <p>
                My curiosity for technology grew as I explored scripting with Python and JavaScript for
                automated data handling and workflow processing. Experiencing how code can streamline
                operations and create functional digital tools motivated my deliberate transition into
                software development.
              </p>

              <p>
                To build comprehensive engineering capabilities, I enrolled in the professional
                <strong> Web Development &amp; Coding program at Softnova Digit, Karulai (2025–2026)</strong>.
                There, I mastered modern frontend architecture with React, RESTful API design using
                Node.js, Express.js, and NestJS, and document-oriented data persistence with MongoDB.
              </p>

              <p>
                As a naturally quick learner, I combine the precision of an accounting background with
                a genuine passion for software craft. I am focused on building clean, reliable, and
                responsive web applications that perform seamlessly across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
