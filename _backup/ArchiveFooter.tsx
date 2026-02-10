// import React from 'react';
// import { TextMono } from '../atoms/Typography';

export const ArchiveFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-40 mb-12 border-t border-white/5 pt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div className="flex flex-col gap-2">
          <TextMono className="text-white/20">Coordinates</TextMono>
          <TextMono className="text-white/60">40.7128° N, 74.0060° W / Virtual Core</TextMono>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <TextMono className="text-white/20">System Status</TextMono>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <TextMono className="text-white/60">Archive Operational</TextMono>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <TextMono className="text-white/20">Temporal Marker</TextMono>
          <TextMono className="text-white/60">© {currentYear} — Aura Universe</TextMono>
        </div>

      </div>
    </footer>
  );
};