import React from 'react';
import { ART_IMAGES } from '../components/atoms/ArtImage';
import { galleryStyles } from './PageGallery'

export function ArtPage(): React.JSX.Element {
  return (
    <>
      <style>{galleryStyles}</style>
      <div className="gallery-grid">
        {ART_IMAGES.map((image) => (
          <div key={image.src} className="group">
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
              aria-label={`View full-size artwork: ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full h-80 object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.075]"
                loading="lazy"
                decoding="async"
              />
            </a>
            <div className="overflow-hidden text-center text-violet-300 transition-all duration-300 ease-in-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 group-focus-within:opacity-100 group-focus-within:max-h-96">
              <h3 className="text-fluid-base font-bold mt-4 mb-1">{image.title}</h3>
              <p className="text-fluid-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}