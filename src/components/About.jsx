import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSchool, faCode, faBullseye } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a full-stack web developer who enjoys building practical and user-friendly web apps. 
              I like turning ideas into working systems and figuring out how things work behind the scenes.
            </p>
            <p>
              I originally got into web development out of curiosity, and it slowly turned into something I really enjoy doing. Since then,
               I&apos;ve been learning as I go and improving my skills with different tools and technologies.
            </p>
            <p>
              I&apos;ve worked with JavaScript, React, Vue.js, Laravel, and MySQL, 
              and I enjoy working on both the front-end and back-end parts of a project.
            </p>
            <p>
              When I&apos;m not coding, I usually spend 
              time exploring new tools, improving my projects, or just keeping up with what’s new in web development.
            </p>
          </div>
          <aside className="about-highlights">
            <h3>Quick Facts</h3>
            <ul>
              <li>
                <span className="about-meta-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <div className="about-meta-content">
                  <span className="about-meta-label">Bachelors</span>
                  <span className="about-meta-value">Bachelor of Science in Computer Science</span>
                </div>
              </li>
              <li>
                <span className="about-meta-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faSchool} />
                </span>
                <div className="about-meta-content">
                  <span className="about-meta-label">Graduated From</span>
                  <span className="about-meta-value">STI College - General Santos</span>
                </div>
              </li>
              <li>
                <span className="about-meta-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <div className="about-meta-content">
                  <span className="about-meta-label">Coding For</span>
                  <span className="about-meta-value">2 years</span>
                </div>
              </li>
              <li>
                <span className="about-meta-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={faBullseye} />
                </span>
                <div className="about-meta-content">
                  <span className="about-meta-label">Focus</span>
                  <span className="about-meta-value">Full-stack web apps</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Clean Code</h3>
            <p>Writing maintainable, scalable code following industry best practices and design patterns.</p>
          </div>
          <div className="about-card">
            <h3>Fast Performance</h3>
            <p>Optimizing applications for speed and efficiency, ensuring the best user experience.</p>
          </div>
          <div className="about-card">
            <h3>Team Player</h3>
            <p>Collaborating effectively with cross-functional teams to deliver outstanding results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
