import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button'

const EntryPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDiving, setIsDiving] = useState(false);

  const handleDive = () => {
    setIsDiving(true);
    
    setTimeout(() => {
      navigate('/gallery');
    }, 800);
  };

  const handleIdentityCheck = () => {
    navigate('/about');
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#0a0a0a] text-[#e0e0e0] selection:bg-white/10">
      
      {/* 1. Atmospheric Background Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. Main Content Container */}
      <section 
        className={`flex flex-col items-center transition-all duration-1000 ease-out z-10 
        ${isDiving ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100'}`}
      >
        {/* Logo/Typography */}
        <header className="mb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter italic animate-pulse-slow">
            Aura
          </h1>
          <p className="mt-4 text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-white/40">
            Digital Archive № 01
          </p>
        </header>

        {/* Narrative Text */}
        <div className="max-w-md px-6 text-center mb-16">
          <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
            You have arrived at the edge of a memory. 
            The traveler is invited to linger, or to cross the veil.
          </p>
        </div>

        {/* Call to Action Section */}
        <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Button
            variant='portal'
            onClick={handleDive}
            className="md-6 group relative px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all"
            aria-label="Enter the gallery"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Dive</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-transparent" />
          </Button>

          <Button
            variant='portal'
            onClick={handleIdentityCheck}
            className="m-6 group font-mono text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300"
            aria-label="About the artist"
          >
            Who are you?
            <div className="h-[1px] w-0 group-hover:w-full bg-white/40 transition-all duration-500" />
          </Button>
        </nav>
      </section>

      {/* 3. Portal Transition Overlay */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none flex items-center justify-center`}
      >
        <div 
          className={`bg-white rounded-full transition-all duration-[800ms] ease-in
          ${isDiving ? 'w-[300vmax] h-[300vmax] opacity-100' : 'w-0 h-0 opacity-0'}`}
        />
      </div>

      {/* Maintenance Comment: 
          Uses standard CSS transitions for performance (GPU-friendly transform & opacity).
          Aria-labels included for accessibility in the 'portal' experience. 
      */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default EntryPage;