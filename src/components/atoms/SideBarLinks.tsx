

interface SidebarLink {
  to: string;
  src: string;
  alt: string;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  { to: '/photo', src: "../../src/assets/icons/camera.png", alt: 'Photo' },
  { to: '/video', src: "../../src/assets/icons/video.png", alt: 'Video' },
  { to: '/art', src: "../../src/assets/icons/paleta-de-pintura.png", alt: 'Art' },
  { to: '/design', src:"../../src/assets/icons/caneta.png", alt: 'Design' },
];