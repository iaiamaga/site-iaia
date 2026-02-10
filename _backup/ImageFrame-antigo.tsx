import React, { useState } from 'react';
// import { PortalImage } from './PortalImage';
// import { TextMono, HeadingSerif } from './Typography';

interface ImageFrameProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  year: string;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({ src, alt, title, description, year }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="flex flex-col gap-4 group">
      {/* Moldura Física */}
      <div 
        onClick={() => setShowText(!showText)}
        className="relative bg-[#ececec] p-4 md:p-8 shadow-[10px_10px_20px_rgba(0,0,0,0.5)] cursor-pointer transition-transform duration-500 hover:-rotate-1 active:scale-[0.98]"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-black">
          <PortalImage src={src} alt={alt} className={`w-full h-full object-cover transition-opacity duration-700 ${showText ? 'opacity-20 scale-110 blur-sm' : 'opacity-100'}`} />
          
          {/* Texto Revelado (Overlay) */}
          {showText && (
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 text-black flex flex-col gap-4">
              <HeadingSerif className="text-2xl leading-tight">{title}</HeadingSerif>
              <div className="h-[1px] w-full bg-black/20" />
              <p className="font-sans text-sm leading-relaxed opacity-80">{description}</p>
              <TextMono className="text-[10px] mt-4">{year} / ARCHIVE_DATA</TextMono>
            </div>
          )}
        </div>
        
        {/* Sombra interna da moldura */}
        <div className="absolute inset-4 md:inset-8 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.1)]" />
      </div>
      
      {/* Legenda Externa (Sutil) */}
      {!showText && (
        <div className="flex justify-between items-center px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <TextMono className="text-white/40">{title}</TextMono>
          <TextMono className="text-white/20 text-[9px]">Click to inspect</TextMono>
        </div>
      )}
    </div>
  );
};