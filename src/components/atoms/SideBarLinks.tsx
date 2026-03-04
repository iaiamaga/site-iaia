import { ICONS }from "../atoms/Icons";
import type { ReactNode } from "react";

interface SidebarLink {
    to: string;
    src?: string;        // opcional agora
    icon?: ReactNode;    // troca SVGRectElement por ReactNode
    alt: string;
    className: string;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  { to: '/photo', icon: ICONS.SIDEBAR_PHOTO, alt: 'Photo', className: 'w-[64px] h-[64px]' },
  { to: '/video', icon: ICONS.SIDEBAR_VIDEO, alt: 'Video', className: 'w-[64px] h-[64px]' },
  { to: '/art', icon: ICONS.SIDEBAR_ART, alt: 'Art', className: 'w-[64px] h-[64px]' },
  { to: '/design', icon: ICONS.SIDEBAR_DESIGN, alt: 'Design', className: 'w-[64px] h-[64px]' },
];