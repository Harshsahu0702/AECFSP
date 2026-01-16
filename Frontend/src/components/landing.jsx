import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Presentation,
  ShieldCheck,
  Code2,
  ArrowRight,
  Sparkles,
  X,
  User,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';
import bgImage from '../assets/bg.png';

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeRole, setActiveRole] = useState(null);

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const cardsRef = useRef([]);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const modalRef = useRef(null);
  const modalOverlayRef = useRef(null);
  const modalContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Loader Animation
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false)
      });

      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 2.5,
        ease: "power2.inOut",
        display: "none"
      });

      tl.fromTo(".main-logo-container",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.2)" },
        "-=0.5"
      );

      tl.fromTo(".hero-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      );

      tl.fromTo(".role-card",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      );

      // Compact Orbital Animation
      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "linear"
      });

      // Floating logo
      gsap.to(".logo-image", {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3D Card Tilt Effect
      cardsRef.current.forEach((card) => {
        if (!card) return;

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Calculate rotation based on mouse position
          const rotateX = ((y - centerY) / centerY) * -15; // Max -15 to 15 deg
          const rotateY = ((x - centerX) / centerX) * 15;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000,
            transformOrigin: "center"
          });

          // Move internal elements for parallax
          const content = card.querySelector('.card-content-inner');
          const icon = card.querySelector('.icon-wrapper');

          gsap.to(content, {
            x: (x - centerX) * 0.1,
            y: (y - centerY) * 0.1,
            duration: 0.4
          });

          gsap.to(icon, {
            x: (x - centerX) * 0.15,
            y: (y - centerY) * 0.15,
            z: 50,
            duration: 0.4
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
            transformPerspective: 1000
          });

          const content = card.querySelector('.card-content-inner');
          const icon = card.querySelector('.icon-wrapper');

          gsap.to([content, icon], {
            x: 0,
            y: 0,
            z: 0,
            duration: 0.6
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Modal Animation Effect
  useEffect(() => {
    if (activeRole && modalRef.current) {
      const ctx = gsap.context(() => {
        // Overlay fade in
        gsap.fromTo(modalOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        );

        // Modal pop in with erratic/elastic crazy energy
        gsap.fromTo(modalContentRef.current,
          { scale: 0, rotate: -15, opacity: 0 },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.6)",
            delay: 0.1
          }
        );

        // Stagger children
        gsap.fromTo(".modal-child",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.3 }
        );

      }, modalRef);
      return () => ctx.revert();
    }
  }, [activeRole]);

  const handleDeveloperClick = () => {
    window.location.href = '/developers';
  };

  const handleCardClick = (role) => {
    setActiveRole(role);
  };

  const closeModal = () => {
    if (!modalRef.current) return;

    // Animate out
    gsap.to(modalContentRef.current, {
      scale: 0.8,
      opacity: 0,
      rotate: 10,
      duration: 0.3,
      ease: "power2.in"
    });

    gsap.to(modalOverlayRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: () => setActiveRole(null)
    });
  };

  const roles = [
    {
      title: "Student",
      description: "Access learning materials & view attendance stats.",
      icon: <GraduationCap size={32} />,
      link: "#",
      // Darker/More saturated colors to reduce lightness
      color: "rgba(224, 242, 254, 0.6)",
      accent: "#0891b2", // Cyan-600
      gradient: "linear-gradient(135deg, #a5f3fc 0%, #0891b2 100%)"
    },
    {
      title: "Teacher",
      description: "Manage classes, grading & student records.",
      icon: <Presentation size={32} />,
      link: "#",
      color: "rgba(220, 252, 231, 0.6)",
      accent: "#059669", // Emerald-600
      gradient: "linear-gradient(135deg, #a7f3d0 0%, #059669 100%)"
    },
    {
      title: "Admin",
      description: "System configuration & comprehensive reports.",
      icon: <ShieldCheck size={32} />,
      link: "#",
      color: "rgba(219, 234, 254, 0.6)",
      accent: "#2563eb", // Blue-600
      gradient: "linear-gradient(135deg, #bfdbfe 0%, #2563eb 100%)"
    }
  ];

  return (
    <div ref={containerRef} className="landing-container">
      {/* Background Overlay */}
      <div className="bg-overlay-gradient" />

      {/* Initial Loader */}
      <div ref={loaderRef} className="loader-overlay">
        <div className="loader-content">
          <div className="loader-ring"></div>
          <img src={logo} alt="Loading..." className="loader-logo-img" />
        </div>
        <h2 className="loader-text">Loading Portal</h2>
      </div>

      {/* Main Content */}
      <main className="main-content">

        {/* Header Section - Compact */}
        <div className="header-section">
          <div className="header-flex">
            <div className="main-logo-container">
              <div className="orbit-ring orbit-ring-1"></div>
              <div className="orbit-ring orbit-ring-2"></div>
              <div className="logo-center-glow"></div>
              <img ref={logoRef} src={logo} alt="Logo" className="logo-image" />
            </div>

            <div ref={textRef} className="hero-text-container">
              <h1 className="hero-title">
                Welcome <span className="highlight-text">Back</span>
              </h1>
              <p className="hero-subtitle">
                AEC FSP Portal
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid - Crazy 3D Style */}
        <div className="cards-grid">
          {roles.map((role, index) => (
            <div
              key={role.title}
              ref={el => cardsRef.current[index] = el}
              className="role-card"
              onClick={() => handleCardClick(role)}
              style={{
                '--accent-color': role.accent,
                '--card-gradient': role.gradient
              }}
            >
              <div className="card-glass-layer"></div>
              <div className="card-glow-spot"></div>

              <div className="card-content-inner">
                <div className="icon-badge">
                  <div className="icon-wrapper">
                    {role.icon}
                  </div>
                  <div className="icon-ring"></div>
                </div>

                <h3 className="card-title">{role.title}</h3>
                <p className="card-description">{role.description}</p>

                <div className="card-btn-wrapper">
                  <button className="card-btn">
                    <span>Enter Portal</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Decorative Shine */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Developer Button */}
        <div className="dev-button-container">
          <button
            onClick={handleDeveloperClick}
            className="dev-button"
          >
            <div className="dev-icon-box">
              <Code2 size={16} />
            </div>
            <span className="dev-text">DevTeam</span>
            <Sparkles size={14} className="dev-sparkle" />
          </button>
        </div>

        {/* Footer */}
        <footer className="landing-footer">
          © 2025 AEC
        </footer>
      </main>

      {/* LOGIN MODAL */}
      {activeRole && (
        <div ref={modalRef} className="modal-root">
          <div ref={modalOverlayRef} className="modal-overlay" onClick={closeModal} />

          <div
            ref={modalContentRef}
            className="modal-container"
            style={{
              '--modal-accent': activeRole.accent,
              '--modal-gradient': activeRole.gradient
            }}
          >
            {/* Modal Decorations */}
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={20} />
            </button>
            <div className="modal-glow-bg"></div>

            <div className="modal-header modal-child">
              <div className="modal-icon-badge">
                {activeRole.icon}
              </div>
              <h2 className="modal-title">{activeRole.title} Login</h2>
              <p className="modal-subtitle">Welcome back, please enter your details</p>
            </div>

            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group modal-child">
                <label>Email Address</label>
                <div className="input-field-wrapper">
                  <User size={18} className="input-icon" />
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="input-group modal-child">
                <label>Password</label>
                <div className="input-field-wrapper">
                  <Lock size={18} className="input-icon" />
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>

              <div className="form-actions modal-child">
                <a href="#" className="forgot-pass">Forgot Password?</a>
              </div>

              <button className="submit-btn modal-child">
                Login
              </button>

              <div className="back-link modal-child" onClick={closeModal}>
                <ArrowLeft size={14} />
                <span>Back to Role Selection</span>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Import Font */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&display=swap');

        :root {
          --primary-color: #0891b2; /* Darker Cyan */
          --dark-text: #020617; /* Very Dark Slate */
          --sub-text: #334155;
        }

        .landing-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          font-family: 'Outfit', sans-serif;
          color: var(--dark-text);
          perspective: 2000px;
        }

        /* Reduced brightness for the overlay */
        .bg-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(204, 251, 241, 0.85) 0%, rgba(180, 220, 235, 0.8) 100%);
          backdrop-filter: blur(5px);
          z-index: 0;
        }

        /* Loader Styles */
        .loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #f0fdfa; /* Mint Cream instead of straight white */
        }
        .loader-content {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-ring {
          position: absolute;
          inset: -8px;
          border: 3px solid #99f6e4;
          border-top-color: var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .loader-logo-img { width: 60px; animation: pulse 2s infinite; }
        .loader-text {
          margin-top: 1.5rem;
          font-size: 1rem;
          font-weight: 800;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        /* Layout & Header */
        .main-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          overflow-y: auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .header-flex {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-logo-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          margin-bottom: 1rem;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid #0891b2; /* Thicker and solid color */
          transform-origin: center;
          box-shadow: 0 0 10px rgba(8, 145, 178, 0.2);
        }

        .orbit-ring-1 {
          width: 100px;
          height: 100px;
          border: 2px dashed #27a6c9ff; /* Darker Cyan */
          animation: spin 12s linear infinite;
        }

        .orbit-ring-2 {
          width: 130px;
          height: 130px;
          border: 2px dotted #059669; /* Emerald */
          opacity: 0.8;
          animation: spin 18s reverse linear infinite;
        }

        .logo-center-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent);
          border-radius: 50%;
          filter: blur(10px);
          z-index: 1;
        }

        .logo-image {
          width: 60px;
          height: auto;
          position: relative;
          z-index: 10;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.1));
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--dark-text);
        }

        .highlight-text {
          background: linear-gradient(to right, #0891b2, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: var(--sub-text);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* --- Cards with darker backdrop --- */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          padding: 0 1rem;
          perspective: 1000px;
        }
        @media (min-width: 768px) {
          .cards-grid { 
            grid-template-columns: repeat(3, 1fr); 
            gap: 2.5rem;
          }
        }

        .role-card {
          position: relative;
          background: rgba(255, 255, 255, 0.5); /* Less opaque white */
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 30px;
          padding: 2.5rem 1.5rem;
          cursor: pointer;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 
            0 20px 40px -10px rgba(0,0,0,0.1), 
            inset 0 0 0 1px rgba(255,255,255, 0.6),
            inset 0 0 20px rgba(255,255,255,0.3);
          overflow: hidden;
          transform-style: preserve-3d;
          transition: border-color 0.3s ease;
        }

        .card-glass-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05));
          z-index: 1;
          pointer-events: none;
        }

        .card-glow-spot {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, var(--accent-color), transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
          filter: blur(80px);
        }
        .role-card:hover .card-glow-spot { opacity: 0.15; }
        .role-card:hover { border-color: var(--accent-color); }

        .card-content-inner {
          position: relative;
          z-index: 10;
          transform: translateZ(20px);
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .icon-badge {
          position: relative;
          margin-bottom: 2rem;
          transform-style: preserve-3d;
        }
        .icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-gradient);
          color: white;
          border-radius: 24px;
          box-shadow: 0 15px 35px -5px rgba(8, 145, 178, 0.3);
          transform: translateZ(30px);
        }
        .icon-ring {
          position: absolute;
          inset: -10px;
          border: 2px dashed var(--accent-color);
          border-radius: 32px;
          opacity: 0.4;
          animation: spin 30s linear infinite;
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--dark-text);
          margin: 0 0 0.5rem 0;
          transform: translateZ(10px);
        }
        .card-description {
          font-size: 1rem;
          color: var(--sub-text);
          line-height: 1.5;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .card-btn-wrapper {
          transform: translateZ(20px);
          width: 100%;
        }
        .card-btn {
          width: 100%;
          background: var(--dark-text);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .role-card:hover .card-btn {
          background: var(--accent-color);
          transform: scale(1.05);
          box-shadow: 0 10px 20px -5px var(--accent-color);
        }
        .role-card:hover .card-btn svg { transform: translateX(4px); }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          transition: left 0.7s ease;
          pointer-events: none;
          z-index: 100;
        }
        .role-card:hover .card-shine { left: 200%; }

        .dev-button-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 50;
        }
        .dev-button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
        }
        .dev-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(8, 145, 178, 0.2);
        }
        .dev-sparkle { color: #0891b2; }
        .dev-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: #ecfeff;
          color: #0891b2;
          border-radius: 50%;
        }
        .dev-text {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--dark-text);
        }

        .landing-footer {
          position: absolute;
          bottom: 0.5rem;
          width: 100%;
          text-align: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: #64748b;
          pointer-events: none;
        }

        /* --- MODAL STYLES --- */
        .modal-root {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
        }

        .modal-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 420px;
          background: white;
          border-radius: 32px;
          padding: 2.5rem;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.5);
          overflow: hidden;
        }

        /* Ambient Glow inside Modal */
        .modal-glow-bg {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: var(--modal-accent);
          filter: blur(60px);
          opacity: 0.2;
          border-radius: 50%;
          pointer-events: none;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #f1f5f9;
          border-radius: 50%;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 20;
        }
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .modal-icon-badge {
          display: inline-flex;
          padding: 1rem;
          background: var(--modal-gradient);
          border-radius: 20px;
          color: white;
          margin-bottom: 1rem;
          box-shadow: 0 10px 25px -5px var(--modal-accent);
        }
        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0;
          color: var(--dark-text);
        }
        .modal-subtitle {
          color: var(--sub-text);
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .input-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark-text);
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
        }

        .input-field-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .input-icon {
          position: absolute;
          left: 1rem;
          color: #94a3b8;
          pointer-events: none;
        }

        .input-field-wrapper input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          color: var(--dark-text);
          outline: none;
          transition: all 0.3s ease;
        }

        .input-field-wrapper input::placeholder {
          color: #cbd5e1;
        }

        .input-field-wrapper input:focus {
          border-color: var(--modal-accent);
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5), 0 0 0 2px var(--modal-accent);
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          font-size: 0.9rem;
        }
        .forgot-pass {
          color: var(--modal-accent);
          font-weight: 600;
          text-decoration: none;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--dark-text);
          color: white;
          font-family: inherit;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        .submit-btn:hover {
          background: var(--modal-accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px var(--modal-accent);
        }

        .back-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--sub-text);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: var(--dark-text); }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.95); opacity: 0.7; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2rem; }
          .main-content { padding: 1rem; }
          .cards-grid { gap: 1.5rem; }
          .role-card { min-height: 300px; }
          .modal-container { padding: 1.5rem; }
        }
        
        @media (min-height: 800px) {
           .main-content { justify-content: center; }
        }
        `}} />
    </div>
  );
};

export default Landing;
