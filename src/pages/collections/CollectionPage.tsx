import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { getCollectionBySlug, COLLECTIONS } from '../../data/collections';
import CTASection from '../../components/CTASection';
import { useSEO } from '../../utils/seo';

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const collection = getCollectionBySlug(slug || '');

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  const currentIndex = COLLECTIONS.findIndex((c) => c.slug === slug);
  const nextCollection = COLLECTIONS[(currentIndex + 1) % COLLECTIONS.length];
  const prevCollection = COLLECTIONS[(currentIndex - 1 + COLLECTIONS.length) % COLLECTIONS.length];

  useSEO({
    title: `${collection.name} Collection | NA Blinds | South Florida`,
    description: `${collection.tagline}. ${collection.philosophy}`,
    canonicalUrl: `https://www.nablinds.co/collections/${collection.slug}`,
    ogImage: collection.heroImage,
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${collection.textureImage}')` }}
        >
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative section-wide w-full py-16 md:py-24">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-paper/70 text-sm mb-8 hover:text-paper transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Collections
          </Link>
          <h1 className="headline-oversized text-paper mb-4">
            {collection.name}.
          </h1>
          <p className="body-large text-paper/80 max-w-md">
            {collection.tagline}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-micro text-stone mb-6">Philosophy</p>
          <p className="body-large text-ink leading-relaxed">
            {collection.philosophy}
          </p>
        </div>
      </section>

      {/* Materials/Products */}
      <section className="pb-24 md:pb-32 section-wide">
        <p className="label-micro text-stone mb-10">Material Variations</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.products.map((product) => (
            <div key={product.slug} className="group">
              <div className="aspect-square overflow-hidden mb-4 bg-sand-light">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-ink mb-1">{product.name}</h3>
              <p className="text-stone text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Installed Environments */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide">
          <p className="label-micro text-stone mb-10">Installed Environments</p>
          <div className="grid md:grid-cols-3 gap-6">
            {collection.environments.map((env, index) => (
              <div key={index}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={env.src}
                    alt={env.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {env.location && (
                  <p className="text-stone text-sm">{env.location}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details (collapsed) */}
      <section className="py-16 section-wide border-b border-sand-light">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer py-4">
            <p className="label-micro text-stone">Technical Specifications</p>
            <span className="text-stone text-sm group-open:hidden">View Details</span>
            <span className="text-stone text-sm hidden group-open:inline">Hide Details</span>
          </summary>
          <div className="py-8 text-stone text-sm leading-relaxed max-w-2xl">
            <p className="mb-4">
              All products in the {collection.name} collection are available with the following options:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Custom sizing to exact window measurements</li>
              <li>• Inside or outside mount configurations</li>
              <li>• Manual, motorized, or smart home compatible operation</li>
              <li>• Multiple fabric opacities and colors</li>
              <li>• Child-safe cordless options</li>
            </ul>
            <p className="mt-4">
              Detailed specifications provided during your design consultation.
            </p>
          </div>
        </details>
      </section>

      {/* Navigation to Other Collections */}
      <section className="py-16 section-wide">
        <div className="flex justify-between items-center">
          <Link
            to={`/collections/${prevCollection.slug}`}
            className="group flex items-center gap-3 text-stone hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="label-micro">{prevCollection.name}</span>
          </Link>
          <Link
            to={`/collections/${nextCollection.slug}`}
            className="group flex items-center gap-3 text-stone hover:text-ink transition-colors"
          >
            <span className="label-micro">{nextCollection.name}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ink text-center">
        <div className="section-wide max-w-2xl mx-auto">
          <p className="label-micro text-paper/40 mb-6">Ready to Explore</p>
          <h2 className="headline-large text-paper mb-8">
            Experience {collection.name}.
          </h2>
          <Link
            to="/build-your-project"
            className="btn-primary bg-paper text-ink hover:bg-sand-light inline-flex items-center gap-3"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
