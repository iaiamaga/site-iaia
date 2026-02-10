import{ ICONS } from "./Icons"

interface NavLink {
  to: string;
  src: string;
  alt: string;
  className: string;
}

export const NAV_LINKS: NavLink[] = [
  { to: '/', src: ICONS.NAV_MAIN, alt: 'Main', className: 'h-[90px]' },
  { to: '/photo', src: ICONS.NAV_GALLERY, alt: 'Gallery', className: 'h-[80px]' },
  { to: '/recc', src: ICONS.NAV_STUFF, alt: 'Stuff', className: 'h-[80px]' },
  { to: '/about', src: ICONS.NAV_ABOUT, alt: 'About', className: 'h-[80px]' },
  { to: '/xtra', src: ICONS.NAV_EXTRAS, alt: 'Extras', className: 'h-[80px]' },
]