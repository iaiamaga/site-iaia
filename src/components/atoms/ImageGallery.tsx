
export interface GalleryImage {
  src: string; // The source for the displayed thumbnail/image
  href: string; // The URL for the full resolution image when clicked
  title: string;
  description: string;
  alt: string;
}


/**
 * To add a new image to the gallery, add a new object to this array.
 */
export const GALLERY_IMAGES: GalleryImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1484328253245-ae744358d2a6?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1484328253245-ae744358d2a6',
        title: 'City Motion',
        description: 'A vibrant street scene capturing the blur of city life at night.',
        alt: 'Long exposure shot of city traffic with light trails.'
    },
    {
        src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        title: 'Misty Mornings',
        description: 'A breathtaking view of mountains shrouded in mist at sunrise.',
        alt: 'Misty mountains at sunrise with a lake in the foreground.'
    },
    {
        src: 'https://images.unsplash.com/photo-1503794656495-65a883733924?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1503794656495-65a883733924',
        title: 'Neon Dreams',
        description: 'Colorful reflections on a rain-slicked city street.',
        alt: 'A city street at night with neon signs reflected in puddles.'
    },
    {
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        title: 'Candid Smile',
        description: 'A portrait capturing a moment of genuine happiness.',
        alt: 'Portrait of a smiling woman with curly hair.'
    },
    {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        title: 'Urban Explorer',
        description: 'Finding beauty in the overlooked corners of the city.',
        alt: 'A person standing in a colorful, graffiti-covered alleyway.'
    },
    {
        src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop',
        href: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
        title: 'Downtown Fashion',
        description: 'Street style against a modern architectural backdrop.',
        alt: 'A stylish woman in a pink coat walking down a city street.'
    }
];
