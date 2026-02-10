import React from 'react';

export const GrainOverlay: React.FC = () => (
  <div 
    className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay"
    style={{
      backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
    }}
    aria-hidden="true"
  />
);