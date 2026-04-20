import React, { useEffect, useRef } from 'react';

// Tunable Constants
const DOT_COUNT = 350; 
const CURSOR_RADIUS = 180; // Slightly larger for better interaction
const DOT_SIZE = 1.8; // Slightly larger for visibility
const LINE_WIDTH = 1.2;

export default function GlobalCanvas() {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDots();
      draw();
    };

    const initDots = () => {
      const dots = [];
      for (let i = 0; i < DOT_COUNT; i++) {
        const isAccent = Math.random() < 0.15;
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          // Brighter dots
          color: isAccent ? 'rgba(201, 111, 74, 0.8)' : 'rgba(255, 255, 255, 0.6)'
        });
      }
      dotsRef.current = dots;
    };

    const updateDots = () => {
      if (prefersReducedMotion) return;
      dotsRef.current.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!prefersReducedMotion) updateDots(); 

      const dots = dotsRef.current;
      const mouse = mouseRef.current;

      // Draw Dots
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      // Draw Lines
      if (!prefersReducedMotion) {
        for (let i = 0; i < dots.length; i++) {
          const d1 = dots[i];
          const dx1 = mouse.x - d1.x;
          const dy1 = mouse.y - d1.y;
          const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

          if (dist1 < CURSOR_RADIUS) {
            for (let j = i + 1; j < dots.length; j++) {
              const d2 = dots[j];
              const dx2 = mouse.x - d2.x;
              const dy2 = mouse.y - d2.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              if (dist2 < CURSOR_RADIUS) {
                const dx = d1.x - d2.x;
                const dy = d1.y - d2.y;
                const distDots = Math.sqrt(dx * dx + dy * dy);

                if (distDots < 100) {
                  const opacity1 = 1 - (dist1 / CURSOR_RADIUS);
                  const opacity2 = 1 - (dist2 / CURSOR_RADIUS);
                  const finalOpacity = opacity1 * opacity2 * 0.9;

                  ctx.beginPath();
                  ctx.moveTo(d1.x, d1.y);
                  ctx.lineTo(d2.x, d2.y);
                  ctx.shadowBlur = 5;
                  ctx.shadowColor = 'rgba(0, 162, 255, 1)';
                  ctx.strokeStyle = `rgba(0, 162, 255, ${finalOpacity})`;
                  ctx.lineWidth = LINE_WIDTH;
                  ctx.stroke();
                  ctx.shadowBlur = 0;
                }
              }
            }
          }
        }
      }
    };

    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    if (!prefersReducedMotion) {
      animate();
    } else {
      draw();
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="global-canvas-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
