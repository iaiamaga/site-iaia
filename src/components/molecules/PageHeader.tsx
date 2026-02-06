import React from 'react';
import { HeadingSerif, TextMono } from '../atoms/Typography';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <header className="flex flex-col gap-6 mb-16 md:mb-24">
      <div className="flex flex-col gap-2">
        <TextMono className="text-white/40 tracking-[0.4em]">{subtitle}</TextMono>
        <HeadingSerif as="h1" className="text-4xl md:text-6xl lg:text-8xl">
          {title}
        </HeadingSerif>
      </div>
      
      {description && (
        <p className="max-w-xl font-sans font-light text-lg text-white/60 leading-relaxed border-l border-white/10 pl-6">
          {description}
        </p>
      )}
    </header>
  );
};