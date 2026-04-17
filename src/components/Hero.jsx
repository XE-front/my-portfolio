import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  const handleScrollDown = () => {
    const target = document.getElementById('about')
    if (target) {
      const navOffset = 80
      const rect = target.getBoundingClientRect()
      const targetY = rect.top + window.pageYOffset - navOffset
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <section className="section hero" id="hero">
        <div className="container hero-inner">
            <div className="hero-text hero-column">
                <p className="hero-intro">Hello, I&apos;m Xena Emit</p>
                <h1 className="hero-title">
                    <span>Full-stack</span> Web Developer
                </h1>
                <p className="hero-description">
                    I create dynamic web applications and interactive user experiences using modern web
                    technologies.
                </p>
                <div className="social-row hero-socials">
                    <a href="https://github.com/XE-front" aria-label="GitHub" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a  href="https://www.linkedin.com/in/xena-emit/" aria-label="LinkedIn" target="_blank" rel="noreferrer"
                    >
                  <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:xenaemit1231@gmail.com" aria-label="Gmail">
                  <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <div className="hero-built-with">
                  <p className="hero-built-title">This Portfolio Built With</p>
                  <ul className="hero-built-list">
                    <li>React</li>
                    <li>Vite</li>
                    <li>JavaScript (ES6+)</li>
                    <li>CSS3</li>
                  </ul>
                </div>
            </div>
            <div className="hero-portrait hero-column">
                <div className="hero-blob" aria-hidden="true"></div>
                <div className="hero-photo"></div>
            </div>
        </div>
        <div className="hero-arrow">
        <button type="button" aria-label="Scroll to About" onClick={handleScrollDown}>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
        </div>
    </section>
  )
}

export default Hero
