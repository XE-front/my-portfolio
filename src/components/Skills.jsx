const skills = {
  frontend: ['React', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3 / Tailwind CSS'],
  backend: ['Laravel', 'PHP', 'REST APIs', 'Database', 'MySQL'],
  tools: ['Git', 'GitHub', 'VS Code'],
}

const additionalSkills = [
  'Responsive Design',
  'API Integration',
  'CRUD Operations',
  'Basic Authentication (Login/Register)',
  'Debugging & Problem Solving',
]

const Skills = () => {
  const renderSkillGroup = (title, items) => (
    <div className="skill-card" key={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="skills-grid">
          {renderSkillGroup('Frontend', skills.frontend)}
          {renderSkillGroup('Backend', skills.backend)}
          {renderSkillGroup('Tools & Others', skills.tools)}
        </div>
        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="chip-row">
            {additionalSkills.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
