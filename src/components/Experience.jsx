import React from 'react';

const TIMELINE = [
  {
    title: 'MS Data Science, Analytics and Engineering',
    organization: 'Arizona State University',
    date: 'Aug 2025 – May 2027',
    description: 'Focused on statistical machine learning, data mining, and distributed systems. Building scalable ML systems with an emphasis on production deployment and performance optimization.',
    tags: ['Data Science', 'ML Engineering', 'Analytics']
  },
  {
    title: 'System Gesture Control',
    organization: 'Project',
    date: '2026',
    description: 'Real-time OpenCV and MediaPipe system mapping hand gestures to OS-level controls for hands-free interaction.',
    tags: ['Python', 'OpenCV', 'MediaPipe']
  },
  {
    title: 'ML Imbalanced Classification Pipeline',
    organization: 'Project',
    date: '2025',
    description: 'SVM classification pipeline for highly imbalanced data with stratified cross-validation. 65% balanced accuracy.',
    tags: ['Python', 'scikit-learn', 'SVM']
  },
  {
    title: 'Online Retail Analytics & ML Clustering',
    organization: 'Project',
    date: '2025',
    description: '541K+ transactions segmented via RFM and K-Means. Retention model at 72% ROC-AUC.',
    tags: ['Python', 'Pandas', 'Plotly', 'K-Means']
  },
  {
    title: 'EState — Real Estate Platform',
    organization: 'Project',
    date: 'Nov 2024 – March 2025',
    description: 'Full-stack real estate platform. React frontend, Node.js/Express backend, JWT auth, MongoDB persistence.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    title: 'M.Assist — Hybrid Voice Assistant',
    organization: 'Project',
    date: '2024',
    description: 'Hybrid voice assistant with Vosk on-device recognition and cloud LLM APIs. Routing and caching cut API usage 30% and latency 20%.',
    tags: ['Python', 'Vosk', 'LLM APIs']
  },
  {
    title: 'Meal Master',
    organization: 'Project',
    date: '2024',
    description: 'Recipe recommendation web app with LLM API integration for dynamic meal suggestions.',
    tags: ['JavaScript', 'LLM API', 'HTML/CSS']
  },
  {
    title: 'Salesforce Developer Virtual Intern',
    organization: 'SmartInternz',
    date: 'Nov 2023 – Jan 2024',
    description: 'Developed Apex workflows, batch jobs, and Lightning Web Components for enterprise use cases. Integrated REST APIs and implemented CI/CD pipelines using GitHub Actions, maintaining high unit test coverage across deployments.',
    tags: ['Apex', 'Lightning Web Components', 'REST APIs', 'GitHub Actions', 'CI/CD']
  },
  {
    title: 'REST API Framework',
    organization: 'Project',
    date: '2023',
    description: 'Modular Express.js backend framework with reusable middleware, scalable routing, and standardized authentication.',
    tags: ['Node.js', 'Express.js', 'REST']
  },
  {
    title: 'B.Tech Computer Science',
    organization: 'CVR College of Engineering, Hyderabad',
    date: 'Dec 2021 – April 2025',
    description: 'Core CS curriculum — algorithms, data structures, software engineering — plus Android coursework. CGPA 3.56/4.0.',
    tags: ['CS Fundamentals', 'Algorithms', 'Android Dev']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Journey</span>
            <h2 className="section-title">Experience & Education</h2>
          </div>

          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <div className="glass-card experience-card">
                  <h3 className="card-title" style={{ marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p className="mono" style={{ textTransform: 'none', color: 'var(--accent-terracotta)', marginBottom: '1rem' }}>
                    {item.organization}
                  </p>
                  <p className="card-description">
                    {item.description}
                  </p>
                  <div className="tag-cloud" style={{ marginTop: '1.5rem' }}>
                    {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
