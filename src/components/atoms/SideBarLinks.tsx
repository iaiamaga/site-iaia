import camera from '../../assets/icons/camera.png';
import video from '../../assets/icons/video.png';
import paleta from '../../assets/icons/paleta-de-pintura.png';
import caneta from '../../assets/icons/caneta.png';

interface SidebarLink {
  to: string;
  src: string;
  alt: string;
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  { to: '/photo', src: camera, alt: 'Photo' },
  { to: '/video', src: video, alt: 'Video' },
  { to: '/art', src: paleta, alt: 'Art' },
  { to: '/design', src: caneta, alt: 'Design' },
];