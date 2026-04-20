import { useState, useEffect } from 'react'

const NAV_SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'beyond-code', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <button className="nav-logo" onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span>HK.</span>
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_SECTIONS.map(id => (
            <li key={id}>
              <button
                className="nav-link"
                onClick={() => scrollTo(id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
              >
                {id === 'beyond-code' ? 'Beyond' : id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            </li>
          ))}
          <li>
            <a href="/HarshaKoushikTejaAila_Resume.pdf" download className="nav-resume">
              Resume
            </a>
          </li>
        </ul>

        <button 
          className={`hamburger${menuOpen ? ' open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}
