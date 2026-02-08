import React from 'react';
import { type GalleryImage } from '../components/atoms/ImageGallery';

interface ImageGalleryProps {
  images: GalleryImage[];
}

// Custom styles for container queries with Tailwind CSS syntax
const galleryStyles = `
  .gallery-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @container (min-width: 500px) {
    .gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @container (min-width: 700px) {
    .gallery-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      <style>{galleryStyles}</style>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className="group">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={image.href}
              className="block relative overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-400 focus-visible:ring-offset-[#6921A7]"
              aria-label={`View full-size image: ${image.title}`}
            >
              <img
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.075]"
                src={image.src}
                alt={image.alt}
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
};