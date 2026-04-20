import React from 'react';

const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'Kotlin', 'TypeScript', 'SQL', 'Bash']
  },
  {
    category: 'ML & Data Science',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'OpenCV']
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Flask', 'REST']
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Responsive Design']
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'MS SQL Server']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'AWS', 'Google Cloud', 'Docker', 'Vercel', 'Jupyter', 'Postman']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Toolbox</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <div className="grid-stack">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="glass-card" style={{ padding: '2rem' }}>
                <h3 className="mono" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  {skillGroup.category}
                </h3>
                <div className="tag-cloud">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
