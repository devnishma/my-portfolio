import { ExternalLink } from 'lucide-react'
import { Github } from './Icons'

export default function Projects() {
  const projects = [
    {
      title: 'Enscala',
      type: 'LIVE PROJECT',
      isLive: true,
      siteUrl: 'https://www.enscala.in/',
      domain: 'enscala.in',
      image: '/enscala-preview.png',
      description:
        'Official live corporate website for Enscala. Developed to establish a credible digital presence with modern layout structures, fast load performance, and clear communication of company offerings.',
      highlights: [
        'Live production website with responsive cross-device layout',
        'Structured component architecture and optimized asset delivery',
        'Clean corporate storytelling and clear service navigation',
        'Built with standard web hygiene and collaborative Git workflow',
      ],
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'GitHub'],
      previewType: 'enscala',
    },
    {
      title: 'Lspazio',
      type: 'LIVE PROJECT',
      isLive: true,
      siteUrl: 'https://www.lspazio.in/',
      domain: 'lspazio.in',
      image: '/lspazio-preview.png',
      description:
        'Official live website for Lspazio, an architecture and interior design studio. Designed with refined spatial aesthetics to present architectural concepts, residential projects, and interior design portfolios.',
      highlights: [
        'Live production website tailored for an architecture & design practice',
        'High-clarity visual showcase for interior and spatial project portfolios',
        'Fully responsive across mobile, tablet, and desktop screens',
        'Clean typography and intuitive layout focused on visual work',
      ],
      tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'GitHub'],
      previewType: 'lspazio',
    },
    {
      title: 'Avas Diary',
      type: 'Full Stack Web Application',
      isLive: false,
      siteUrl: null,
      domain: 'avas-diary.internal',
      image: '/avas-diary-preview.png',
      description:
        'A personal journaling and daily record-keeping web application designed for focused writing and reflection. Built with a distraction-free interface and secure database persistence.',
      highlights: [
        'Organized daily journal entries and personal reflections',
        'Intuitive, distraction-free writing interface',
        'Persistent MongoDB integration for data storage',
        'Responsive layout designed for mobile and desktop screens',
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      previewType: 'avas',
      githubUrl: 'https://github.com/YOUR_GITHUB_USERNAME',
    },
  ]

  return (
    <section id="projects" className="content-section section-surface-alt projects-section">
      <div className="section-container">
        <div className="section-header-block reveal-item">
          <span className="section-kicker">03 / Selected Work</span>
          <h2 className="editorial-heading">Featured Projects</h2>
          <p className="section-intro-text">
            Commercial live websites and full stack web applications built with modern tools.
          </p>
        </div>

        <div className="projects-editorial-list">
          {projects.map((project, index) => (
            <article key={index} className="project-showcase-row reveal-item">
              {/* Browser Preview Frame */}
              <div className="project-preview-frame">
                <div className="browser-chrome">
                  <div className="browser-dots">
                    <span className="b-dot"></span>
                    <span className="b-dot"></span>
                    <span className="b-dot"></span>
                  </div>
                  <div className="browser-address-bar">
                    <span className="browser-protocol">https://</span>
                    <span className="browser-host">{project.domain}</span>
                  </div>
                </div>

                {project.image ? (
                  <div className="browser-screenshot-canvas">
                    <img
                      src={project.image}
                      alt={`${project.title} website homepage preview`}
                      className="browser-screenshot-img"
                    />
                  </div>
                ) : (
                  <div className={`browser-canvas canvas-${project.previewType}`}>
                    {project.previewType === 'avas' && (
                      <div className="mockup-avas">
                        <div className="mockup-diary-header">
                          <span className="mockup-diary-title">Avas Diary</span>
                          <span className="mockup-diary-date">Daily Journal</span>
                        </div>
                        <div className="mockup-diary-card">
                          <div className="diary-line title-line"></div>
                          <div className="diary-line"></div>
                          <div className="diary-line short"></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Project Narrative & Details */}
              <div className="project-details-col">
                <div className="project-label-row">
                  {project.isLive ? (
                    <span className="badge-live-project">
                      <span className="badge-dot"></span>
                      LIVE PROJECT
                    </span>
                  ) : (
                    <span className="badge-standard-type">{project.type}</span>
                  )}
                  {project.isLive && (
                    <span className="live-domain-hint">{project.domain}</span>
                  )}
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                <ul className="project-points-list">
                  {project.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="project-point-item">
                      <span className="point-dash">&mdash;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-pills">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  {project.isLive && project.siteUrl ? (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-live-link"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : null}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-link"
                    >
                      <Github size={15} />
                      <span>View Codebase</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
