import React from 'react';
import { Code, Server, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title animate-fade-in">About Me</h2>
      <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
        <div className="animate-fade-in delay-100">
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I am a passionate developer with a strong focus on building robust, scalable applications. My expertise spans across modern web technologies and backend systems, with a particular interest in integrating AI into financial and service-oriented tools.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Whether it's creating automated financial agents or dynamic front-end experiences, I strive for writing clean, efficient, and maintainable code.
          </p>
        </div>
        <div className="grid grid-2 animate-fade-in delay-200" style={{ gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <Code size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Frontend</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>React, JavaScript, TypeScript</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <Server size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Backend</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Python, Node.js, API Integration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
