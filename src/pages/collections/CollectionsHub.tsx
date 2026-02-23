import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../../data/collections';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../utils/seo';

export default function CollectionsHub() {
  useSEO({
    title: 'Collections | NA Blinds | South Florida',
    description: 'Explore our curated collections: Sheer, Soft, Dark, and Smart. Architectural window solutions designed for how you want light to live in your space.',
    canonicalUrl: 'https://www.nablinds.co/collections'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl">
          <p className="label-micro text-stone mb-6">Collections</p>
          <h1 className="text-ink mb-6">
            <span className="block">CURATED</span>
            <span className="block">LIGHT.</span>
          </h1>
          <p className="body-large text-stone max-w-xl">
            Four distinct approaches to controlling light, each designed around how you want to live in your space.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="pb-24 md:pb-32 section-wide">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {COLLECTIONS.map((collection, index) => (
            <Link
              key={collection.slug}
              to={`/collections/${collection.slug}`}
              className="card-collection group block"
            >
              <div className={`aspect-[4/5] overflow-hidden mb-6 ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
                <img
                  src={collection.heroImage}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-2">
                    {collection.name}
                  </h2>
                  <p className="text-stone text-sm">
                    — {collection.tagline}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone group-hover:text-ink group-hover:translate-x-1 transition-all mt-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide max-w-3xl mx-auto text-center">
          <p className="label-micro text-stone mb-6">Philosophy</p>
          <h2 className="text-ink mb-8">NOT PRODUCTS. EXPERIENCES.</h2>
          <p className="body-large text-stone">
            We organize our offerings by outcome, not category. Whether you need to see through softly, 
            create diffused atmosphere, achieve complete privacy, or automate your daily light transitions — 
            there's a collection designed for exactly how you want to live.
          </p>
        </div>
      </section>

      <CTASection variant="light" />
    </div>
  );
}
