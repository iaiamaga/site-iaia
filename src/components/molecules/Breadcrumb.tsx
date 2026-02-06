import React from 'react';
import { Link } from 'react-router-dom';
import { TextMono } from '../atoms/Typography';

interface BreadcrumbProps {
  currentPath: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPath }) => {
  return (
    <nav className="flex items-center gap-4 py-8">
      <Link to="/" className="group focus:outline-none">
        <TextMono className="text-white/30 group-hover:text-white transition-colors">Volte de onde veio</TextMono>
      </Link>
      <span className="text-white/10 font-mono text-xs">/</span>
      <TextMono className="text-white/90">{currentPath}</TextMono>
    </nav>
  );
};