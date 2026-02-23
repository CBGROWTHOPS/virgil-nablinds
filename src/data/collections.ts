export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  philosophy: string;
  heroImage: string;
  textureImage: string;
  products: CollectionProduct[];
  environments: EnvironmentImage[];
};

export type CollectionProduct = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type EnvironmentImage = {
  src: string;
  alt: string;
  location?: string;
};

export const COLLECTIONS: Collection[] = [
  {
    slug: 'sheer',
    name: 'SHEER',
    tagline: 'See through softly',
    philosophy: 'Light filtered, view preserved. The Sheer collection allows natural light to fill your space while reducing glare and protecting your interiors. Perfect for living areas where connection to the outdoors matters.',
    heroImage: '/solar-shades-room.png',
    textureImage: '/images/products/solar-shades-product.jpg',
    products: [
      {
        slug: 'solar-shades',
        name: 'Solar Shades',
        description: 'Block heat and UV while keeping your view. Essential for South Florida sun.',
        image: '/images/products/shades/solar-shades.png',
      },
      {
        slug: 'sheer-shades',
        name: 'Sheer Shades',
        description: 'Gentle light diffusion. Between sheer and opaque with one pull.',
        image: '/images/products/shades/sheer-shades.png',
      },
      {
        slug: 'light-filtering-blinds',
        name: 'Light-Filtering Blinds',
        description: 'Soft diffused light while maintaining privacy.',
        image: '/images/products/blinds/light-filtering-blinds.png',
      },
      {
        slug: 'woven-wood-shades',
        name: 'Woven Wood Shades',
        description: 'Natural texture with bamboo or grasses. Warm, organic aesthetic.',
        image: '/images/products/shades/woven-wood-shades.png',
      },
    ],
    environments: [
      { src: '/images/gallery/gallery-solar-living-warm.png', alt: 'Solar shades in living room', location: 'Brickell, Living Room' },
      { src: '/images/gallery/gallery-roller-coastal-living.png', alt: 'Light-filtering shades in coastal home', location: 'Coral Gables, Living Room' },
      { src: '/images/gallery/gallery-solar-condo-overcast.png', alt: 'Solar shades in high-rise', location: 'Miami Beach, High-Rise' },
    ],
  },
  {
    slug: 'soft',
    name: 'SOFT',
    tagline: 'Diffused atmosphere',
    philosophy: 'Gentle, even illumination that transforms harsh light into ambient warmth. The Soft collection creates calm, comfortable spaces where light becomes atmosphere.',
    heroImage: '/cellular-shades-room.png',
    textureImage: '/images/products/cellular-shades-product.jpg',
    products: [
      {
        slug: 'cellular-shades',
        name: 'Cellular Shades',
        description: 'Honeycomb insulation. Energy-efficient for South Florida heat.',
        image: '/images/products/shades/cellular-shades.png',
      },
      {
        slug: 'roman-shades',
        name: 'Roman Shades',
        description: 'Elegant fabric folds. Tailored finish for bedrooms and dining rooms.',
        image: '/roman-shades-room.png',
      },
      {
        slug: 'roller-shades',
        name: 'Roller Shades',
        description: 'Clean, minimalist design. Wide fabric and opacity options.',
        image: '/images/products/shades/roller-shades.png',
      },
      {
        slug: 'zebra-shades',
        name: 'Zebra Shades',
        description: 'Alternating sheer and solid bands. Modern look with flexible control.',
        image: '/zebra-shades-product.png',
      },
    ],
    environments: [
      { src: '/images/gallery/gallery-cellular-office-sunset.png', alt: 'Cellular shades in office', location: 'Boca Raton, Office' },
      { src: '/images/gallery/gallery-roman-bedroom-trad.png', alt: 'Roman shades in bedroom', location: 'Palm Beach, Bedroom' },
      { src: '/images/gallery/gallery-zebra-bedroom-boho.png', alt: 'Zebra shades in bedroom', location: 'Fort Lauderdale, Bedroom' },
    ],
  },
  {
    slug: 'dark',
    name: 'DARK',
    tagline: 'Complete privacy',
    philosophy: 'Total control over light and visibility. The Dark collection delivers complete blackout capability for bedrooms, media rooms, and spaces where privacy and darkness are essential.',
    heroImage: '/blackout-shades-room.png',
    textureImage: '/images/products/blackout-shades-product.jpg',
    products: [
      {
        slug: 'blackout-shades',
        name: 'Blackout Shades',
        description: 'Complete darkness. Bedrooms, nurseries, and media rooms.',
        image: '/images/products/shades/blackout-shades.png',
      },
      {
        slug: 'blackout-drapes',
        name: 'Blackout Drapes',
        description: 'Total light blockage with elegant fabric. Bedrooms and media rooms.',
        image: '/images/products/drapes/blackout-drapes.png',
      },
      {
        slug: 'room-darkening-blinds',
        name: 'Room-Darkening Blinds',
        description: 'Significant light blockage for better sleep.',
        image: '/images/products/blinds/room-darkening-blinds.png',
      },
      {
        slug: 'plantation-shutters',
        name: 'Plantation Shutters',
        description: 'Wide louvers, timeless style. Full privacy with adjustable light.',
        image: '/plantation-shutters-closed.png',
      },
    ],
    environments: [
      { src: '/images/gallery/gallery-blackout-bedroom.png', alt: 'Blackout shades in bedroom', location: 'Coconut Grove, Master Bedroom' },
      { src: '/images/gallery/gallery-shutters-minimal.png', alt: 'Shutters in modern room', location: 'Aventura, Living Room' },
      { src: '/images/gallery/gallery-drapes-master-southflorida.png', alt: 'Blackout drapes in bedroom', location: 'Weston, Bedroom' },
    ],
  },
  {
    slug: 'smart',
    name: 'SMART',
    tagline: 'Silent automation',
    philosophy: 'Intelligent light control at your fingertips. The Smart collection brings motorization and home automation to your windows, creating effortless daily transitions from morning to night.',
    heroImage: '/motorized-shades-room.png',
    textureImage: '/images/products/motorized-shades-product.jpg',
    products: [
      {
        slug: 'motorized-shades',
        name: 'Motorized Shades',
        description: 'Remote and voice control. Convenience for any shade type.',
        image: '/images/products/shades/motorized-shades.png',
      },
      {
        slug: 'motorized-blinds',
        name: 'Motorized Blinds',
        description: 'Remote, app, and voice control. Ideal for hard-to-reach windows.',
        image: '/images/products/blinds/motorized-blinds.png',
      },
      {
        slug: 'motorized-drapery-tracks',
        name: 'Motorized Drapery',
        description: 'Motorized operation for drapes. Luxury and convenience combined.',
        image: '/images/products/drapes/motorized-drapery-tracks.png',
      },
    ],
    environments: [
      { src: '/images/gallery/gallery-motorized-living.png', alt: 'Motorized shades in living room', location: 'Sunny Isles, Living Room' },
      { src: '/images/gallery/gallery-motorized-bedroom.png', alt: 'Motorized shades in bedroom', location: 'Key Biscayne, Master Suite' },
      { src: '/images/gallery/gallery-motorized-condo-dusk.png', alt: 'Motorized shades at dusk', location: 'Downtown Miami, High-Rise' },
    ],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export function getAllCollections(): Collection[] {
  return COLLECTIONS;
}
