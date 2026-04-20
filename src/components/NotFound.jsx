import React from 'react';

export default function NotFound() {
  return (
    <section className="section" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="liquid-glass-section" style={{ textAlign: 'center' }}>
          <span className="mono section-heading-mono" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Error 404</span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Page Not Found</h2>
          <p className="card-description" style={{ marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
            The page you are looking for doesn't exist or has been moved. 
          </p>
          <a href="/" className="nav-resume" style={{ textDecoration: 'none', display: 'inline-block', border: '1px solid var(--accent-terracotta)', padding: '0.8rem 2rem' }}>
            Return Home
          </a>
        </div>
      </div>
    </section>
  );
}
