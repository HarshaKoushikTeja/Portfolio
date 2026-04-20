import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          © 2026 Harsha Koushik Teja Aila. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/HarshaKoushikTeja" target="_blank" rel="noreferrer" className="footer-link mono">GitHub</a>
          <a href="https://www.linkedin.com/in/aila-harsha-koushik-teja" target="_blank" rel="noreferrer" className="footer-link mono">LinkedIn</a>
          <a href="mailto:haila1@asu.edu" className="footer-link mono">Email</a>
        </div>
      </div>
    </footer>
  );
}
