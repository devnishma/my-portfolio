import {
  Github,
  TechHtml5,
  TechCss3,
  TechJavaScript,
  TechReact,
  TechNode,
  TechExpress,
  TechNest,
  TechMongo,
} from './Icons'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React'],
      note: 'Semantic structure, responsive interfaces, component state, and modern styling.',
    },
    {
      category: 'Backend Architecture',
      skills: ['Node.js', 'Express.js', 'NestJS'],
      note: 'RESTful API construction, server routing, controllers, and business logic.',
    },
    {
      category: 'Database Management',
      skills: ['MongoDB'],
      note: 'Document-oriented database modeling, schema definition, and CRUD queries.',
    },
    {
      category: 'Scripting & Collaboration',
      skills: ['GitHub'],
      note: 'Version control workflows, commit history hygiene, and team code collaboration.',
    },
  ]

  const techStack = [
    { name: 'HTML5', Icon: TechHtml5 },
    { name: 'CSS3', Icon: TechCss3 },
    { name: 'JavaScript', Icon: TechJavaScript },
    { name: 'React', Icon: TechReact },
    { name: 'Node.js', Icon: TechNode },
    { name: 'Express.js', Icon: TechExpress },
    { name: 'NestJS', Icon: TechNest },
    { name: 'MongoDB', Icon: TechMongo },
    { name: 'GitHub', Icon: Github },
  ]

  return (
    <section id="skills" className="content-section skills-section">
      <div className="section-container">
        <div className="section-header-block reveal-item">
          <span className="section-kicker">02 / Capabilities</span>
          <h2 className="editorial-heading">Technical Skills</h2>
          <p className="section-intro-text">
            A targeted technology stack focused on modern, full-stack web engineering.
          </p>
        </div>

        <div className="skills-matrix-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-column-block reveal-item">
              <div className="skill-col-header">
                <span className="skill-cat-index">0{index + 1}</span>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>

              <div className="skill-tag-pills">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="editorial-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="skill-cat-note">{cat.note}</p>
            </div>
          ))}
        </div>

        <div className="tech-stack-area reveal-item">
          <div className="tech-stack-header">
            <span className="tech-stack-dot" aria-hidden="true"></span>
            <span className="tech-stack-label">Technology Stack</span>
          </div>

          <div className="tech-stack-strip">
            {techStack.map(({ name, Icon }) => (
              <div key={name} className="tech-stack-badge">
                <Icon size={16} className="tech-stack-icon" />
                <span className="tech-stack-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
