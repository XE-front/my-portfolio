const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a passionate full-stack web developer who enjoys building practical and user-focused web applications. 
              I specialize in creating efficient and scalable solutions that address real-world problems.
            </p>
            <p>
              My journey in web development started from a curiosity about how websites work, and it has 
              grown into a continuous pursuit of learning and improving my skills with modern technologies.
            </p>
            <p>
              I have experience working with JavaScript, React, Vue.js, Laravel, and MySQL, and I enjoy 
              developing systems that are both functional and user-friendly.
            </p>
            <p>
              Outside of coding, I spend time exploring new technologies, improving my projects, and 
              staying updated with current trends in web development.
            </p>
          </div>
          <aside className="quick-facts">
            <h3>This Portfolio Built With</h3>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>JavaScript (ES6+)</li>
              <li>CSS3</li>
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
