import React from 'react';
import { Button } from '../atoms/Button';

// 1. Exporte uma CONSTANTE (valor real que existe no JS)
export const CATEGORY_LIST = ['Photo', 'Design', 'Video', 'Drawings', 'Sculptures'] as const;

// 2. Derive o tipo a partir dela
export type Category = typeof CATEGORY_LIST[number];

interface CategoryNavigationProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ active, onChange }) => (
  <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 scrollbar-hide py-4 overflow-x-auto">
    {CATEGORY_LIST.map((cat) => (
      <Button
        key={cat}
        variant={active === cat ? 'underline' : 'ghost'}
        onClick={() => onChange(cat)}
        className={active === cat ? 'text-white' : 'text-white/30'}
      >
        {cat}
      </Button>
    ))}
  </nav>
);

