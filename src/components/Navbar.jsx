import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      background: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-color)' }}>
        Sahej.
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about" style={{ fontWeight: 600 }}>About</a>
        <a href="#projects" style={{ fontWeight: 600 }}>Projects</a>
        <a href="#contact" style={{ fontWeight: 600 }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
