import React from 'react';
// import { PortalImage } from '../atoms/PortalImage';
// import { HeadingSerif, TextMono } from '../atoms/Typography';

interface GalleryCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  onClick?: () => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ id, title, category, imageUrl, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-none md:cursor-pointer flex flex-col gap-3 p-2 border border-transparent hover:border-white/10 transition-colors duration-500"
    >
      {/* Container da Imagem com Aspect Ratio fixo para grid limpo */}
      <div className="aspect-[4/5] w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
        <PortalImage src={imageUrl} alt={title} className="h-full w-full" />
      </div>

      {/* Metadados do Artefato */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <HeadingSerif className="text-lg md:text-xl text-white/90 group-hover:text-white transition-colors">
            {title}
          </HeadingSerif>
          <TextMono className="text-[9px] text-white/20">#{id}</TextMono>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-4 bg-white/20" />
          <TextMono className="text-white/40 group-hover:text-white/70 transition-colors">
            {category}
          </TextMono>
        </div>
      </div>
    </div>
  );
};