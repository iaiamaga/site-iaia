import React from 'react';
import { Button } from '../atoms/Button';

type Category = 'Photo' | 'Design' | 'Video' | 'Drawings' | 'Sculptures';

const CATEGORIES: Category[] = ['Photo', 'Design', 'Video', 'Drawings', 'Sculptures'];

interface CategoryNavigationProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ active, onChange }) => (
  <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 scrollbar-hide py-4 overflow-x-auto">
    {CATEGORIES.map((cat) => (
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

export type { Category };