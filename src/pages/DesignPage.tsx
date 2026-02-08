import React from 'react';
import { ImageGallery } from './ImageGallery';
import { DESIGN_IMAGES } from '../constants';

export function DesignPage(): React.JSX.Element {
  return <ImageGallery images={DESIGN_IMAGES} />;
}