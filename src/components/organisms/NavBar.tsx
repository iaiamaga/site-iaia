import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../molecules/NavLinks';

export function Navbar(): React.JSX.Element {
  return (
    <nav
      className="mt-12 mb-8 md:mb-0 flex justify-center items-end flex-wrap md:flex-nowrap md:gap-x-6 mx-auto w-full"
      aria-label="Main Navigation"
    >
      {NAV_LINKS.map((link, index) => {
        const iconSizeClass = index === 0 ? link.className : 'h-10 md:h-[132px]';

        return (
          <Link
            to={link.to}
            key={link.to}
            className={`p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6921A7] ${
              index === 0 ? 'w-full text-center md:w-auto' : ''
            }`}
          >
            {link.icon ? (
              // Ícones animados (JSX) — Lightbulb, Fingerprint etc.
             
             <span className={`block ${iconSizeClass} ${index === 0 ? 'mx-auto w-[100px]' : 'w-10 md:w-[90px]'} text-gray-400 hover:text-blue-500 transition-colors duration-150`}>
               {link.icon}
             </span>
            ) : (
              // Imagens normais (PNG/URL) — usa máscara CSS
              <span
                className={`block bg-gray-400 hover:bg-blue-500 transition-colors duration-170 ease-in-out ${iconSizeClass} ${
                  index === 0 ? 'mx-auto w-[100px]' : 'w-10 md:w-[90px]'
                }`}
                style={{
                  maskImage: `url(${link.src})`,
                  WebkitMaskImage: `url(${link.src})`,
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  maskSize: 'contain',
                }}
                aria-label={link.alt}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
