import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const NAV_OFFSET = 80

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const targetY = rect.top + window.pageYOffset - NAV_OFFSET
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">&lt;Xena/&gt;</div>
          <p>Building the web, one line of code at a time.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => scrollTo('hero')}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')}>About</button>
              </li>
              <li>
                <button onClick={() => scrollTo('projects')}>Projects</button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')}>Contact</button>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-row">
              <a href="https://github.com/XE-front" aria-label="GitHub" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                </a>
              <a href="https://www.linkedin.com/in/xena-emit/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:xenaemit1231@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Xena Emit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
