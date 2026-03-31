const Contact = () => {
  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-grid">
        <div className="contact-text">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your
            vision. Feel free to reach out!
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3.5" y="6" width="17" height="12" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4.5 7.5L12 12.5L19.5 7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">xenaemit1231@gmail.com</span>
              </div>
            </li>
            <li className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 3.5C9.3 3.5 7 5.7 7 8.4C7 11.9 10 15.2 11.6 16.8C11.8 17 12.2 17 12.4 16.8C14 15.2 17 11.9 17 8.4C17 5.7 14.7 3.5 12 3.5Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="8.4" r="1.9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">General Santos City, Philippines</span>
              </div>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="btn-primary full-width">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
