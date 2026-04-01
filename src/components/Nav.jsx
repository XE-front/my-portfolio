import { useState } from 'react'

const NAV_OFFSET = 80

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const targetY = rect.top + window.pageYOffset - NAV_OFFSET
      window.scrollTo({ top: targetY, behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="nav-wrapper">
      <div className="container nav">
        <div className="nav-logo">&lt;Xena/&gt;</div>
        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
          <button onClick={() => handleScroll('hero')}>Home</button>
          <button onClick={() => handleScroll('about')}>About</button>
          <button onClick={() => handleScroll('skills')}>Skills</button>
          <button onClick={() => handleScroll('projects')}>Projects</button>
          <button onClick={() => handleScroll('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default Nav
