import React from 'react';
import { ImageGallery } from '../pages/PageGallery';
import { DESIGN_IMAGES } from '../components/molecules/DesignGallery';

export function DesignPage(): React.JSX.Element {
  return <ImageGallery images={DESIGN_IMAGES} />;
}