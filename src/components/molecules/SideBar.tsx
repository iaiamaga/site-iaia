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
            <span
              className="block w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-gray-400 hover:bg-blue-500 transition-colors duration-170 ease-in-out"
              style={{
                maskImage: `url(${link.src})`,
                WebkitMaskImage: `url(${link.src})`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
              }}
              aria-label={link.alt}
            />
          </Link>
        ))}
      </nav>
    </aside>
  );
}