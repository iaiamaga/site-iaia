import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { TextMono, HeadingSerif } from '../atoms/Typography';

export const GlobalNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Se estivermos na Entry Page, não mostramos a nav padrão
  if (pathname === '/') return null;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 
      ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <HeadingSerif className="text-xl tracking-tighter hover:italic transition-all">Aura</HeadingSerif>
        </Link>

        <div className="flex items-center gap-8 md:gap-16">
          <Link to="/gallery" className="group">
            <TextMono className={`transition-colors duration-300 ${pathname === '/gallery' ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>
              Archive
            </TextMono>
            {pathname === '/gallery' && <div className="h-[1px] w-full bg-white/40 mt-1" />}
          </Link>

          <Link to="/about" className="group">
            <TextMono className={`transition-colors duration-300 ${pathname === '/about' ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>
              Origin
            </TextMono>
            {pathname === '/about' && <div className="h-[1px] w-full bg-white/40 mt-1" />}
          </Link>
        </div>

      </div>
    </nav>
  );
};