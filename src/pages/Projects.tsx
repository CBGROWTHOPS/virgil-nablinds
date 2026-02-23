import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const PROJECTS = [
  {
    id: 1,
    location: 'Brickell, Miami',
    type: 'High-Rise Condo',
    collection: 'SHEER',
    image: '/images/gallery/gallery-solar-living-warm.png',
  },
  {
    id: 2,
    location: 'Coral Gables',
    type: 'Single-Family Home',
    collection: 'SOFT',
    image: '/images/gallery/gallery-cellular-office-sunset.png',
  },
  {
    id: 3,
    location: 'Palm Beach',
    type: 'Waterfront Estate',
    collection: 'DARK',
    image: '/images/gallery/gallery-blackout-bedroom.png',
  },
  {
    id: 4,
    location: 'Sunny Isles',
    type: 'High-Rise Condo',
    collection: 'SMART',
    image: '/images/gallery/gallery-motorized-living.png',
  },
  {
    id: 5,
    location: 'Aventura',
    type: 'Modern Home',
    collection: 'SHEER',
    image: '/images/gallery/gallery-solar-condo-overcast.png',
  },
  {
    id: 6,
    location: 'Fort Lauderdale',
    type: 'Beach House',
    collection: 'SOFT',
    image: '/images/gallery/gallery-zebra-bedroom-boho.png',
  },
  {
    id: 7,
    location: 'Key Biscayne',
    type: 'Waterfront Condo',
    collection: 'SMART',
    image: '/images/gallery/gallery-motorized-bedroom.png',
  },
  {
    id: 8,
    location: 'Weston',
    type: 'Family Home',
    collection: 'DARK',
    image: '/images/gallery/gallery-drapes-master-southflorida.png',
  },
];

export default function Projects() {
  useSEO({
    title: 'Projects | NA Blinds | South Florida Installations',
    description: 'View our portfolio of window treatment installations across South Florida. High-rises, single-family homes, and waterfront estates.',
    canonicalUrl: 'https://www.nablinds.co/projects'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl">
          <p className="label-micro text-stone mb-6">Portfolio</p>
          <h1 className="text-ink mb-6">PROJECTS.</h1>
          <p className="body-large text-stone">
            A selection of recent installations across South Florida.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 section-wide">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`group ${index % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={`${project.type} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-ink">{project.location}</h3>
                  <p className="text-stone text-sm">{project.type}</p>
                </div>
                <Link
                  to={`/collections/${project.collection.toLowerCase()}`}
                  className="label-micro text-sand hover:text-ink transition-colors"
                >
                  {project.collection}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide text-center">
          <p className="text-stone text-sm">
            500+ homes completed across Miami-Dade, Broward & Palm Beach
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-micro text-stone mb-6">Your Space</p>
          <h2 className="text-ink mb-8">SEE YOUR PROJECT HERE.</h2>
          <p className="body-large text-stone mb-10">
            Every installation is a collaboration. Let's design how light lives in your space.
          </p>
          <Link
            to="/build-your-project"
            className="btn-primary inline-flex items-center gap-3"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
