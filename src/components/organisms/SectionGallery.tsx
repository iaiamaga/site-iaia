import React from 'react';
import { GalleryCard } from '../molecules/GalleryCard';

interface Artifact {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface GallerySectionProps {
  items: Artifact[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 md:gap-y-32">
      {items.map((item, index) => (
        <div 
          key={item.id} 
          className={`opacity-0 animate-fade-in-up`}
          style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
        >
          <GalleryCard 
            id={item.id}
            title={item.title}
            category={item.category}
            imageUrl={item.imageUrl}
          />
        </div>
      ))}
    </section>
  );
};