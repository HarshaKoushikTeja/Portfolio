import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Introduction</span>
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="grid-stack">
            <div className="glass-card project-card">
              <p className="card-description" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                I am Harsha Koushik Teja Aila, a graduate student at Arizona State University pursuing an MS in Computing with a focus on Data Science and Analytics. My technical interests are situated at the intersection of machine learning, backend engineering, and system design.
              </p>
              <p className="card-description">
                My experience involves architecting machine learning pipelines, specifically addressing challenges in imbalanced classification and predictive modeling. I develop full-stack applications utilizing modern frameworks to bridge the gap between complex algorithms and usable software.
              </p>
              <p className="card-description">
                I prioritize building tools that remain performant and scalable across diverse environments. I focus on developing robust systems that can handle large-scale data processing and real-time inference.
              </p>
              
              <div className="tag-cloud" style={{ marginTop: '2rem' }}>
                <span className="tag">Data Science</span>
                <span className="tag">ML Engineering</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
            
            <div className="glass-card project-card">
              <h3 className="card-title">Education</h3>
              <div className="timeline" style={{ paddingLeft: '0', borderLeft: 'none' }}>
                <div className="timeline-item">
                  <span className="timeline-date">August 2025 – May 2027</span>
                  <h4 style={{ marginBottom: '0.25rem' }}>MS — Computing & Decision Analytics</h4>
                  <p className="mono" style={{ textTransform: 'none', color: 'var(--text-secondary)' }}>Arizona State University</p>
                  <p className="card-description" style={{ marginTop: '1rem' }}>Focus on Data Science, Analytics, and Scalable Engineering.</p>
                </div>
                
                <div className="timeline-item" style={{ marginBottom: '0' }}>
                  <span className="timeline-date">December 2021 – April 2025</span>
                  <h4 style={{ marginBottom: '0.25rem' }}>B.Tech — Computer Science</h4>
                  <p className="mono" style={{ textTransform: 'none', color: 'var(--text-secondary)' }}>CVR College of Engineering, Hyderabad</p>
                  <p className="card-description" style={{ marginTop: '1rem' }}>Computer Science Fundamentals and Application Development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
