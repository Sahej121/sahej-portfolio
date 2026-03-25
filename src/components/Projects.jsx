import React from 'react';
import { ExternalLink, GitBranch as Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Financial Agent',
    description: 'An AI-driven financial agent built with Python, designed for intelligent data processing and automated insights.',
    tech: ['Python', 'AI/ML'],
    github: 'https://github.com/Sahej121/financial-agent'
  },
  {
    title: 'CreditLeliya',
    description: 'A comprehensive financial application leveraging Python and ML models for scalable predictive insights.',
    tech: ['Python', 'ML Models', 'JavaScript'],
    github: 'https://github.com/Sahej121/financial-app'
  },
  {
    title: 'Coding Blocks Task Manager',
    description: 'A dedicated mobile application for efficient task management, built on cross-platform technologies.',
    tech: ['React Native', 'JavaScript'],
    github: 'https://github.com/Sahej121'
  },
  {
    title: 'Smart Cleaners Pro',
    description: 'A complete management solution and platform for professional cleaning services.',
    tech: ['JavaScript'],
    github: 'https://github.com/Sahej121/smartcleanerspro'
  },
  {
    title: 'Zynetic',
    description: 'A cutting-edge TypeScript project focused on high performance and clean architecture.',
    tech: ['TypeScript'],
    github: 'https://github.com/Sahej121/Zynetic'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        className="section-title">Featured Projects</motion.h2>
      <div className="grid grid-2">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: index * 0.15 }}
            key={index} className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {project.tech.map(tech => (
                <span key={tech} style={{ padding: '0.25rem 0.75rem', background: 'rgba(255, 255, 255, 0.1)', color: 'var(--accent-color)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600 }}>
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                <Github size={18} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
