import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { useSEO } from '../utils/seo';

const COLLECTIONS = [
  {
    slug: 'sheer',
    name: 'SHEER',
    tagline: 'See through softly',
    image: '/solar-shades-room.png',
  },
  {
    slug: 'soft',
    name: 'SOFT',
    tagline: 'Diffused atmosphere',
    image: '/cellular-shades-room.png',
  },
  {
    slug: 'dark',
    name: 'DARK',
    tagline: 'Complete privacy',
    image: '/blackout-shades-room.png',
  },
  {
    slug: 'smart',
    name: 'SMART',
    tagline: 'Silent automation',
    image: '/motorized-shades-room.png',
  },
];

const PROCESS_STEPS = [
  {
    number: '1',
    title: 'MEASURE',
    description: 'Precise on-site consultation and assessment.',
  },
  {
    number: '2',
    title: 'CURATE',
    description: 'Expert selection of premium materials and systems.',
  },
  {
    number: '3',
    title: 'INSTALL',
    description: 'Flawless, professional execution by certified technicians.',
  },
];

export default function Home() {
  useSEO({
    title: 'NA Blinds | Architectural Window Solutions | South Florida',
    description: 'Custom window architecture for modern South Florida homes. We design how light lives inside your space. Premium installation in Miami-Dade, Broward & Palm Beach.',
    canonicalUrl: 'https://www.nablinds.co/'
  });

  return (
    <div className="bg-paper">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/roller_shade__011.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-ink/30" />
        </div>

        <div className="relative section-wide w-full py-20">
          <div className="max-w-4xl">
            <h1 className="text-paper mb-6">
              <span className="block headline-oversized">LIGHT.</span>
              <span className="block headline-oversized">CONTROLLED.</span>
            </h1>
            <p className="body-large text-paper/80 max-w-lg mb-10">
              Custom window architecture for modern South Florida homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/build-your-project"
                className="btn-primary bg-paper text-ink hover:bg-sand-light"
              >
                Schedule Design Consultation
              </Link>
              <Link
                to="/collections"
                className="group inline-flex items-center gap-2 px-6 py-4 text-paper text-sm font-medium tracking-wide uppercase hover:text-sand transition-colors"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Statement */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-ink mb-6">NOT BLINDS. CONTROL.</h2>
          <p className="body-large text-stone">
            We design how light lives inside your space.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-24 md:pb-32 section-wide">
        <div className="flex items-center justify-between mb-10">
          <p className="label-micro text-stone">Collections</p>
          <Link
            to="/collections"
            className="link-arrow"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.slug}
              to={`/collections/${collection.slug}`}
              className="card-collection group block"
            >
              <div className="aspect-[4/5] overflow-hidden mb-4 min-h-[280px] md:min-h-[360px]">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="collection-title text-ink">
                {collection.name}
              </h3>
              <p className="collection-tagline mt-1">
                — {collection.tagline}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide">
          <p className="label-micro text-stone text-center mb-10">Before / After</p>
          <h2 className="text-ink text-center mb-16">UNCONTROLLED VS DESIGNED</h2>
          <BeforeAfterSlider
            beforeImage="/images/gallery/uncontrolled-windows.png"
            afterImage="/images/gallery/designed-controlled-windows.png"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 section-wide">
        <p className="label-micro text-stone text-center mb-10">Process</p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <span className="block text-6xl md:text-7xl font-serif text-sand mb-4">
                {step.number}
              </span>
              <h3 className="text-ink text-lg font-medium tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-stone text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/process"
            className="link-arrow"
          >
            Learn About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Curated Trust */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide">
          <p className="text-center text-stone text-sm">
            Installed in 500+ South Florida homes · Licensed & Insured · BBB A+ Rated
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
