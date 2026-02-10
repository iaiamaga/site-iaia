import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../atoms/NavLInks';

export function Navbar(): React.JSX.Element {
  return (
    <nav
      className="mt-12 mb-8 md:mb-0 flex justify-center items-end flex-wrap md:flex-nowrap md:gap-x-6 mx-auto w-full"
      aria-label="Main Navigation"
    >
      {NAV_LINKS.map((link, index) => {
        // On mobile, keep the main icon large, but make others smaller.
        // On desktop, all icons use their original sizes.
        const iconSizeClass =
          index === 0 ? link.className : 'h-10 md:h-[80px]';

        return (
          <Link
            to={link.to}
            key={link.to}
            className={`p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6921A7] [&:focus-visible>img]:invert ${
              index === 0 ? 'w-full text-center md:w-auto' : ''
            }`}
          >
            <img
              className={`transition-filter duration-170 ease-in-out hover:invert ${iconSizeClass} ${
                index === 0 ? 'mx-auto' : ''
              }`}
              src={link.src}
              alt={link.alt}
            />
          </Link>
        );
      })}
    </nav>

) };