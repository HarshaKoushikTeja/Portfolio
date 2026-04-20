import React from 'react';

const GH = 'https://github.com/HarshaKoushikTeja';

const PROJECTS = [
  {
    title: 'M.Assist — Hybrid Voice Assistant',
    description: 'Built a hybrid voice assistant combining on-device speech recognition (Vosk) with cloud LLM APIs. Designed a routing and caching pipeline that reduced API usage by 30% and improved response latency by 20%.',
    tags: ['Python', 'Vosk', 'LLM APIs', 'Async'],
    link: `${GH}`
  },
  {
    title: 'System Gesture Control',
    description: 'Developed a real-time computer vision system using OpenCV and MediaPipe to map hand gestures to OS-level controls (volume, brightness, pointer), enabling low-latency, hands-free interaction.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    link: `${GH}`
  },
  {
    title: 'ML Imbalanced Classification Pipeline',
    description: 'Engineered a classification pipeline for highly imbalanced data using SVM (RBF kernel) with stratified cross-validation. Achieved 65% balanced accuracy, demonstrating the importance of sampling strategy over model complexity.',
    tags: ['Python', 'scikit-learn', 'SVM', 'GridSearchCV', 'Pandas'],
    link: `${GH}/ml-imbalanced-classification-pipeline`
  },
  {
    title: 'Online Retail Analytics & ML Clustering',
    description: 'Processed 541K+ transactions to segment customers using RFM and K-Means clustering. Built a retention prediction model achieving 72% ROC-AUC for targeted engagement.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Plotly', 'K-Means'],
    link: `${GH}/Business-Analysis-of-Online_Retail`
  },
  {
    title: 'EState — Real Estate Platform',
    description: 'Full-stack web application with React frontend and Node.js/Express backend. Implemented JWT authentication, REST APIs, and MongoDB persistence for property management.',
    tags: ['React', 'Express.js', 'MongoDB', 'JWT', 'Node.js'],
    link: `${GH}/EState`
  },
  {
    title: 'Meal Master',
    description: 'Developed a recipe recommendation web app with LLM API integration, generating dynamic meal suggestions based on user inputs.',
    tags: ['API Integration', 'JavaScript', 'HTML/CSS'],
    link: `${GH}/Meal_Master`
  },
  {
    title: 'REST API Framework',
    description: 'Designed a modular backend framework with Express.js, featuring reusable middleware, scalable routing, and standardized authentication patterns.',
    tags: ['Node.js', 'Express.js', 'REST'],
    link: `${GH}/REST-API`
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Portfolio</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>

          <div className="grid-stack">
            {PROJECTS.map((project) => (
              <div key={project.title} className="glass-card project-card">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">
                  {project.description}
                </p>
                <div className="tag-cloud" style={{ marginBottom: '2rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mono"
                  style={{ textTransform: 'none', borderBottom: '1px solid var(--accent-terracotta)', paddingBottom: '2px', textDecoration: 'none' }}
                >
                  view source code _
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
