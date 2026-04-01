import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef(null)

  const handleChange = (event) => {
    const { id, value } = event.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields before sending.')
      return
    }

    if (isSending) return

    try {
      setIsSending(true)
      setStatus('Sending message...')

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })

      setStatus('Message sent! I will get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error', error)
      setStatus('Something went wrong sending your message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

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
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary full-width" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
