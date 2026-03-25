import React from 'react';
import { Code, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        className="section-title">About Me</motion.h2>
      <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I am a passionate developer with a strong focus on building robust, scalable applications. My expertise spans across modern web technologies and backend systems, with a particular interest in integrating AI into financial and service-oriented tools.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Whether it's creating automated financial agents or dynamic front-end experiences, I strive for writing clean, efficient, and maintainable code.
          </p>
        </motion.div>
        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <Code size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Frontend</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>React, JavaScript, TypeScript</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <Server size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Backend</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Python, Node.js, API Integration</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
