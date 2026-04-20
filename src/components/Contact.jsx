import { useState, useRef } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const data = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: 'Portfolio Contact',
      from_name: 'Portfolio',
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setStatus(json.success ? 'success' : 'error')
      if (json.success) formRef.current?.reset()
    } catch {
      setStatus('error')
    } finally {
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const LINKS = [
    { label: 'email', value: 'haila1@asu.edu', href: 'mailto:haila1@asu.edu' },
    { label: 'github', value: 'github.com/HarshaKoushikTeja', href: 'https://github.com/HarshaKoushikTeja' },
    { label: 'linkedin', value: 'linkedin.com/in/aila-harsha-koushik-teja', href: 'https://www.linkedin.com/in/aila-harsha-koushik-teja' }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Connect</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="grid-stack contact-grid">
            <div className="contact-links">
              {LINKS.map(link => (
                <div key={link.label} style={{ marginBottom: '2.5rem' }}>
                  <span className="mono" style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.6 }}>{link.label} _</span>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="card-title contact-link"
                    style={{ textDecoration: 'none', display: 'block', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent-terracotta)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: '3rem' }}>
              <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
                <input type="text" name="name" placeholder="Full Name" className="form-input" required />
                <input type="email" name="email" placeholder="Email Address" className="form-input" required />
                <textarea name="message" rows="6" placeholder="Project details / Message" className="form-input" required />
                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && <p className="mono" style={{ color: '#10b981', marginTop: '1rem' }}>Success: Message delivered.</p>}
                {status === 'error' && <p className="mono" style={{ color: '#ef4444', marginTop: '1rem' }}>Error: Delivery failed. Please email directly.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
