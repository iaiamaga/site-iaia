import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

/**
 * Serif - Used for atmospheric headings and logos
 */
export const HeadingSerif: React.FC<TextProps> = ({ children, className = '', as: Component = 'h2' }) => (
  <Component className={`font-serif italic tracking-tighter ${className}`}>
    {children}
  </Component>
);

/**
 * Monospace - Used for captions, UI labels, and technical data
 */
export const TextMono: React.FC<TextProps> = ({ children, className = '', as: Component = 'span' }) => (
  <Component className={`font-mono uppercase text-[10px] md:text-xs tracking-[0.2em] ${className}`}>
    {children}
  </Component>
);

/**
 * Body - Clean, readable sans-serif for long descriptions
 */
export const TextBody: React.FC<TextProps> = ({ children, className = '', as: Component = 'p' }) => (
  <Component className={`font-sans font-light leading-relaxed ${className}`}>
    {children}
  </Component>
);