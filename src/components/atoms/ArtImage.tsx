export interface ArtImage {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export const ART_IMAGES: ArtImage[] = [
    {
        src: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop',
        alt: 'Colorful abstract art',
        title: 'Color Wave',
        description: 'An abstract blend of vibrant, flowing colors.'
    },
    {
        src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop',
        alt: 'Marble texture art',
        title: 'Liquid Gold',
        description: 'A luxurious mix of white marble and gold accents.'
    },
    {
        src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=800&auto=format&fit=crop',
        alt: 'Abstract paper art',
        title: 'Paper Fields',
        description: 'Layers of colorful paper creating a dream-like landscape.'
    },
    {
        src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
        alt: 'Classic painting of flowers',
        title: 'Floral Still Life',
        description: 'A modern take on a classic artistic subject.'
    },
];