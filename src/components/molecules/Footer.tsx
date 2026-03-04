import React from 'react';
// import { Link } from 'react-router-dom';
import { ICONS } from '../atoms/Icons';

// interface PhotoshootFolder {
//   href: string;
//   text: string;
// }

// interface FooterProps {
//   otherPhotoshootFolders: PhotoshootFolder[];
// }
//React.FC= <FooterProps>   ({ otherPhotoshootFolders })
export const Footer: React.FC = () => {
  return (
    <footer className="w-full" role="contentinfo">
      <div className="flex justify-center items-center my-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="block mx-auto rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#6921A7] [&:focus-visible>img]:invert"
          aria-label="Back to top"
        >
          <img
            className="transition-filter duration-170 ease-in-out hover:invert w-[80px]"
            src={ICONS.FOOTER_TOP}
            alt="Return to top"
          />
        </button>
      </div>

      <div className="py-0.5"></div>

      <p className="p-[5px] text-center text-red-500 text-fluid-base">
        <strong>Outros álbuns de fotos: indisponível no momento</strong><br />
        {/* {otherPhotoshootFolders.map((folder) => (
          <React.Fragment key={folder.href}>
            <Link to={folder.href} className="qwerty">
              {folder.text}
            </Link>
            <br />
          </React.Fragment>
        ))} */}
        <span className="text-white">-.-</span>
        <br />
      </p>
    </footer>
  );
};