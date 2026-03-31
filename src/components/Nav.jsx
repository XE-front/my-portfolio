const Nav = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="nav-wrapper">
      <div className="container nav">
        <div className="nav-logo">&lt;Xena/&gt;</div>
        <nav className="nav-links">
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
