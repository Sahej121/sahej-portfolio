import React, { useEffect, useRef } from 'react';
import { Mail, GitBranch as Github } from 'lucide-react';

const Contact = ({ onInView }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (onInView) onInView(entry.isIntersecting);
    }, { threshold: 0.3 }); // Darkens gracefully when scrolled down

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onInView]);
  return (
    <section ref={ref} id="contact" className="section container" style={{ textAlign: 'center', paddingBottom: '4rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 className="section-title animate-fade-in">Get In Touch</h2>
      <p className="animate-fade-in delay-100" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        I'm currently open for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <div className="animate-fade-in delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="mailto:contact@sahej.dev" className="btn btn-primary">
          <Mail size={20} /> Say Hello
        </a>
        <a href="https://github.com/Sahej121" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
          <Github size={24} color="var(--text-primary)" />
        </a>
      </div>
      <div style={{ marginTop: '6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Sahej Budhiraja. Built with React & Vite.</p>
      </div>
    </section>
  );
};

export default Contact;
