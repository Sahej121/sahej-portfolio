import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// WebGPU Scene Imports
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three/webgpu';
import { PostProcessing, Scene } from './components/blocks/hero-futuristic';

function App() {
  const [stage, setStage] = useState(0);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    // Stage 1: Fade out JARVIS
    const t1 = setTimeout(() => setStage(1), 4200);
    // Stage 2: Unmount JARVIS to reveal the WebGPU scanning mesh beneath
    const t2 = setTimeout(() => setStage(2), 6000);
    
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <div style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -2, background: '#000',
        filter: contactInView ? 'blur(15px) brightness(0.25)' : 'blur(0px) brightness(1)',
        transition: 'filter 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <Canvas flat gl={async (props) => { const renderer = new THREE.WebGPURenderer(props); await renderer.init(); return renderer; }}>
          <PostProcessing fullScreenEffect={true} />
          <Scene />
        </Canvas>
      </div>

      {stage < 2 && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', 
          zIndex: 0, background: '#000',
          opacity: stage === 0 ? 1 : 0,
          transition: 'opacity 1.8s ease-in-out'
        }}>
          <iframe 
            src="/jar_vis.html" 
            frameBorder="0" 
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            title="JARVIS Background"
          />
        </div>
      )}
      
      <div style={{ 
        position: 'relative', zIndex: 1,
        opacity: stage > 0 ? 1 : 0, 
        pointerEvents: stage > 0 ? 'auto' : 'none',
        transform: stage > 0 ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 2s ease-in-out, transform 2s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact onInView={setContactInView} />
        </main>
      </div>
    </>
  );
}

export default App;
