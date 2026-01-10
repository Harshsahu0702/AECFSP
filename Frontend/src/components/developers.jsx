import React, { useState, useEffect, useRef } from 'react';
const TeamPage = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

 const teamMembers = [
    { id: 1, name: 'Harsh Ray', image: new URL('../assets/h9.jpeg', import.meta.url).href },
    { id: 2, name: 'Sanjay Sharma', image: new URL('../assets/2.png', import.meta.url).href },
    { id: 3, name: 'Harsh Agarwalla', image: new URL('../assets/3.jpg', import.meta.url).href },
    { id: 4, name: 'Harsh Sahu', image: new URL('../assets/4.jpeg', import.meta.url).href },
    { id: 5, name: 'Princi Kumari', image: new URL('../assets/5.jpg', import.meta.url).href },
    { id: 6, name: 'Prerna', image: new URL('../assets/6.jpg', import.meta.url).href },
  ];


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    script.onload = () => setGsapLoaded(true);
    document.head.appendChild(script);
    const moveCursor = (e) => {
      if (cursorRef.current && window.gsap) {
        window.gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (gsapLoaded && window.gsap) {
      const { gsap } = window;
      const tl = gsap.timeline();
      gsap.set('.char', { y: '120%', skewX: 20 });
      gsap.set('.member-card', { opacity: 0, scale: 0.7, y: 150, rotateX: -30 });

      tl.to('.char', {
        y: 0,
        skewX: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'expo.out'
      })
      .to('.hero-sub', {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.8")
      .to('.member-card', {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: 'expo.out'
      }, "-=1.2");
    }
  }, [gsapLoaded]);

  return (
    <div className="immersive-canvas" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=Inter:wght@300;400;900&family=Space+Grotesk:wght@300;700&display=swap');

        :root {
          --peach: #ff9a8b;
          --bg-main: #ffb7a1;
          --text-dark: #1a1a1a;
          --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .immersive-canvas {
          background-color: var(--bg-main);
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          color: var(--text-dark);
          position: relative;
          overflow-x: hidden;
          cursor: none;
        }

        /* --- GRAINY ANALOG OVERLAY --- */
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          opacity: 0.12;
          z-index: 9999;
          pointer-events: none;
          background-image: var(--noise);
        }

        /* --- FLUID MESH BACKGROUND --- */
        .mesh-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: 
            radial-gradient(at 10% 20%, #ff6b6b 0px, transparent 50%),
            radial-gradient(at 90% 80%, #4facfe 0px, transparent 50%),
            radial-gradient(at 50% 50%, #ff9a8b 0px, transparent 50%),
            radial-gradient(at 80% 10%, #00f2fe 0px, transparent 50%);
          filter: blur(140px);
          animation: meshAnimate 15s infinite alternate linear;
        }

        @keyframes meshAnimate {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.3) translate(60px, -60px); }
        }

        /* --- LIQUID CURSOR --- */
        .custom-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 50px; height: 50px;
          background: #fff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, background 0.3s;
        }

        /* --- HERO SECTION --- */
        .hero-section {
          height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 10;
          padding-top: 20px;
        }

        .kinetic-title {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(2rem, 12vw, 11rem);
          line-height: 0.8;
          text-transform: uppercase;
          margin: 0;
          display: flex;
          overflow: hidden;
          letter-spacing: -0.06em;
          color: var(--text-dark);
        }

        .char-wrap { overflow: hidden; display: inline-block; }
        .char { display: inline-block; }

        .hero-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(0.7rem, 2vw, 1rem);
          letter-spacing: 0.6em;
          text-transform: uppercase;
          margin-top: 2rem;
          font-weight: 700;
          opacity: 0;
          transform: translateY(30px);
        }

        /* --- THE GRID --- */
        .grid-section {
          padding: 0 5vw 15vw 5vw;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 120px 60px;
        }

        .member-card {
          position: relative;
          transform-style: preserve-3d;
          perspective: 2000px;
        }

        .card-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 60px 120px -30px rgba(0,0,0,0.25);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* --- DECORATIVE TEXTS --- */
        .floating-accent {
          position: absolute;
          font-family: 'Syncopate', sans-serif;
          font-size: 15vw;
          opacity: 0.05;
          pointer-events: none;
          z-index: 1;
          white-space: nowrap;
        }

        .card-footer {
          margin-top: 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 2px solid var(--text-dark);
          padding-bottom: 10px;
        }

        .card-name {
          font-family: 'Syncopate', sans-serif;
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          line-height: 0.9;
          margin: 0;
          text-transform: uppercase;
        }

        .index-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr; }
          .kinetic-title { font-size: 4rem; }
          .hero-section { height: 40vh; }
          .custom-cursor { display: none; }
          .immersive-canvas { cursor: auto; }
        }
      `}</style>
      <div className="noise-overlay"></div>
      <div className="mesh-bg"></div>
      <div className="custom-cursor" ref={cursorRef}></div>
      
      <div className="floating-accent" style={{ top: '15%', left: '-5%' }}>ARCHITECTSS</div>
      <div className="floating-accent" style={{ bottom: '5%', right: '8%' }}>AEC.FSP</div>

      <header className="hero-section">
        <h1 className="kinetic-title">
          {['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R', 'S'].map((l, i) => (
            <span key={i} className="char-wrap">
              <span className="char">{l}</span>
            </span>
          ))}
        </h1>
        <div className="hero-sub">ENGINEERING THE FUTURE</div>
      </header>

      <section className="grid-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      <footer style={{ padding: '120px 20px', textAlign: 'center' }}>
        <p style={{ fontWeight: 900, fontSize: '0.9rem', letterSpacing: '0.4em' }}>© 2025 / AEC FSP</p>
      </footer>
    </div>
  );
};

const TeamMember = ({ member, index }) => {
  const cardRef = useRef(null);
  const isRotating = useRef(false);
  const handleMouseEnter = () => {
    if (!cardRef.current || !window.gsap || isRotating.current) return;
    
    isRotating.current = true;
    window.gsap.to(cardRef.current, {
      rotateY: "+=360",
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: () => {
        isRotating.current = false;
      }
    });
  };

  return (
    <div className={`member-card card-${index}`}>
      <div 
        className="card-inner" 
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
      >
        <img 
          src={member.image} 
          alt={member.name} 
          className="card-img" 
          onError={(e) => { 
            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=ffffff`; 
          }} 
        />
      </div>
      <div className="card-footer">
        <h3 className="card-name">{member.name.split(' ')[0]}</h3>
        <span className="index-badge">MOD. {index + 1}</span>
      </div>
    </div>
  );
};

export default function App() {
  return <TeamPage />;
}