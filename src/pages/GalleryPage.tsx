import React, { useState } from 'react';
import { CategoryNavigation, Category } from '../molecules/CategoryNavigation';
import { ImageFrame } from '../atoms/ImageFrame';
import { VideoGallery } from '../organisms/VideoGallery';
import { HeadingSerif } from '../atoms/Typography';

const PageGallery: React.FC = () => {
  const [category, setCategory] = useState<Category>('Photo');

  return (
    <main className="pt-32 pb-20 container mx-auto px-6">
      <header className="text-center mb-16">
        <HeadingSerif className="text-6xl md:text-8xl mb-8">Archive</HeadingSerif>
        <CategoryNavigation active={category} onChange={setCategory} />
      </header>

      {category === 'Video' ? (
        <VideoGallery />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {/* Aqui você filtraria seus itens baseado na categoria */}
          <ImageFrame 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853"
            alt="Sample"
            title="Analog Memory"
            description="Um estudo sobre a impermanência do suporte digital simulando grãos de filme 35mm."
            year="2024"
          />
          {/* ... outros itens */}
        </section>
      )}
    </main>
  );
};