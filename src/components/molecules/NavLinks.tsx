import{ ICONS } from "../atoms/Icons"
import type { ReactNode } from "react";

interface NavLink {
  to: string;
  src?: string;        // opcional agora
  icon?: ReactNode;    // troca SVGRectElement por ReactNode
  alt: string;
  className: string;
}

export const NAV_LINKS: NavLink[] = [
  { to: '/', src: ICONS.NAV_MAIN, alt: 'Main', className: 'w-[252px] h-[252px]' },
  { to: '/photo', icon: ICONS.NAV_GALLERY, alt: 'Gallery', className: 'w-[52px] h-[52px]' },
  { to: '/recc', icon: ICONS.NAV_STUFF, alt: 'Stuff', className: 'w-[52px] h-[52px]' },
  { to: '/about', icon: ICONS.NAV_ABOUT, alt: 'About', className: 'w-[52px] h-[52px]' },
 // { to: '/xtra', src: ICONS.NAV_EXTRAS, alt: 'Extras', className: 'w-[52px] h-[52px]' },
]