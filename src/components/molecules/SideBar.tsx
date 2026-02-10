import React from 'react';
import { Link } from 'react-router-dom';
import { SIDEBAR_LINKS } from '../atoms/SideBarLinks';

export function Sidebar(): React.JSX.Element {
  return (
    <aside className="flex justify-center w-full lg:justify-start content-center">
      <nav 
        className="flex flex-row justify-center  items-center gap-x-6  mx-auto md:max-w-4x lg:gap-x-0 lg:flex-col lg:items-start lg:gap-y-2 w-full"
        aria-label="Content Categories"
      >
        {SIDEBAR_LINKS.map((link) => (
          <Link to={link.to} key={link.to} className="block">
            <img
              className="transition-filter duration-170 ease-in-out md:m- hover:invert h-[50px] lg:h-[70px]"
              src={link.src}
              alt={link.alt}
            />
          </Link>
        ))}
      </nav>
    </aside>
  );
}