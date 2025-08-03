
import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Intro from './components/Intro';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

// Since Vanta is loaded via CDN, we declare it for TypeScript
declare const VANTA: any;

const App: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Initialize Vanta.js background
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x210b3c,
        shininess: 25.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.75
      }));
    }
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup functions
    return () => {
      if (vantaEffect) vantaEffect.destroy();
      // Lenis doesn't have a destroy method in the same way, 
      // but stopping the animation frame loop effectively stops it.
      // This is a simplified cleanup.
    };
  }, [vantaEffect]);

  return (
    <div className="bg-[#0c041a] text-white font-sans antialiased">
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col">
          <Intro />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
