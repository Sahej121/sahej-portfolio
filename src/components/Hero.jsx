import React, { useState, useEffect, useRef } from 'react';

export default function Hero({ onInView }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (onInView) onInView(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onInView]);
  const titleWords = 'SAHEJ BUDHIRAJA'.split(' ');
  const subtitle = 'Full-Stack Developer & AI Enthusiast.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div ref={ref} className="h-svh relative bg-transparent text-foreground transition-colors pt-32">
      <div className="h-full uppercase items-center w-full z-60 px-6 flex justify-center flex-col relative pointer-events-none">
        <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold pb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.05em' }}>
          <div className="flex space-x-2 md:space-x-6 overflow-hidden text-red-600">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{ 
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, 
                  opacity: index < visibleWords ? undefined : 0,
                  textShadow: '0 0 25px rgba(220, 38, 38, 0.6)'
                }}>
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs sm:text-lg md:text-2xl mt-4 overflow-hidden text-neutral-300 font-bold tracking-[0.2em] text-center uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`, opacity: subtitleVisible ? undefined : 0 }}>
            {subtitle}
          </div>
        </div>

        {/* Buttons */}
        <div 
          className="transition-all duration-1000 ease-out flex justify-center mt-12 pointer-events-auto"
          style={{ opacity: subtitleVisible ? 1 : 0, transform: subtitleVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <a href="#projects" className="group flex items-center justify-center transition-all duration-300 hover:scale-105" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(153, 27, 27, 0.9) 100%)', 
              color: '#fff', 
              borderRadius: '999px', 
              padding: '1rem 2.5rem',
              boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 800,
              border: '1px solid rgba(255,100,100,0.3)',
              backdropFilter: 'blur(10px)',
              zIndex: 100 
            }}>
            EXPLORE PROJECTS
            <span className="ml-3 transition-transform duration-300 group-hover:translate-y-1">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 5V17" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                <path d="M6 12L11 17L16 12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
