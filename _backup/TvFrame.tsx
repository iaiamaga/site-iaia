import React from 'react';

interface TvFrameProps {
  videoUrl: string;
}

export const TvFrame: React.FC<TvFrameProps> = ({ videoUrl }) => {
  return (
    <div className="relative bg-[#1a1a1a] rounded-[2rem] p-4 md:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-[#2a2a2a]">
      {/* Tela CRT */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
        <iframe
          src={`${videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1`}
          className="w-full h-full opacity-80 mix-blend-screen"
          allow="autoplay; encrypted-media"
          title="Archive Video"
        />
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,118,0.03))] bg-[length:100%_4px,3px_100%]" />
      </div>
      
      {/* Botões da TV */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden md:flex">
        <div className="w-4 h-4 rounded-full bg-[#111] shadow-inner" />
        <div className="w-4 h-4 rounded-full bg-[#111] shadow-inner" />
        <div className="w-8 h-12 bg-[#222] rounded-sm" />
      </div>
    </div>
  );
};