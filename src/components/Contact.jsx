import React from 'react';
import { Mail, GitBranch as Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
        className="section-title">Get In Touch</motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        I'm currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: 0.4 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="mailto:contact@sahej.dev" className="btn btn-primary">
          <Mail size={20} /> Say Hello
        </a>
        <a href="https://github.com/Sahej121" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
          <Github size={24} color="var(--text-primary)" />
        </a>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: '6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Sahej Budhiraja. Built with React & Vite.</p>
      </motion.div>
    </section>
  );
};

export default Contact;
