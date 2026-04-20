import { useState, useMemo } from 'react';

// Automatically load all supported images from the assets folder using Vite
const imageModules = import.meta.glob('../assets/**/*.{jpg,jpeg,png,JPG,PNG,webp}', { eager: true });

const SECTIONS = [
  { id: 'Nature', title: 'Nature', context: '' },
  { id: 'Night_Sky', title: 'Night Sky', context: '' },
  { id: 'Golden_Hour', title: 'Golden Hour', context: '' },
  { id: 'Landscapes', title: 'Landscapes', context: '' },
  { id: 'Shore', title: 'Shorelines', context: '' },
  { id: 'Urban_Night', title: 'Urban Night', context: '' },
];

const GlassFrame = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="glass-card glass-frame" onClick={handleNext}>
      <img 
        src={images[currentIndex]} 
        alt={title} 
        className="frame-image"
      />
      <div className="frame-content">
        <h3 className="frame-title">{title}</h3>
        {images.length > 1 && (
          <p className="mono" style={{ fontSize: '0.65rem', marginTop: '1rem', opacity: 0.5 }}>
            {currentIndex + 1} / {images.length} — click to cycle
          </p>
        )}
      </div>
    </div>
  );
};

export default function BeyondCode() {
  // Extract and group images by their parent folder name
  const groupedImages = useMemo(() => {
    const groups = {};
    for (const path in imageModules) {
      const url = imageModules[path].default || imageModules[path];
      const parts = path.split('/');
      const folderName = parts[parts.length - 2]; 
      
      if (!groups[folderName]) {
        groups[folderName] = [];
      }
      groups[folderName].push(url);
    }
    return groups;
  }, []);

  return (
    <section id="beyond-code" className="section bc-container">
      <div className="container">
        <div className="liquid-glass-section">
          <div className="section-header">
            <span className="mono section-heading-mono">Parallel Interests</span>
            <h2 className="section-title">Beyond Code</h2>
            <span className="mono" style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '1rem', display: 'block' }}>scroll →</span>
          </div>
          
          <div className="horizontal-scroll-container">
            {SECTIONS.map((section) => {
              const imagesForSection = groupedImages[section.id] || [];
              if (imagesForSection.length === 0) return null;

              return (
                <GlassFrame 
                  key={section.id} 
                  images={imagesForSection} 
                  title={section.title} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
