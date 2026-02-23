import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const SERVICE_AREAS = [
  {
    county: 'Miami-Dade',
    areas: [
      'Miami Beach', 'Brickell', 'Coral Gables', 'Coconut Grove',
      'Key Biscayne', 'Aventura', 'Sunny Isles', 'Doral',
      'Pinecrest', 'South Miami'
    ],
  },
  {
    county: 'Broward',
    areas: [
      'Fort Lauderdale', 'Hollywood', 'Weston', 'Plantation',
      'Coral Springs', 'Parkland', 'Pembroke Pines', 'Davie',
      'Hallandale Beach', 'Lauderdale-by-the-Sea'
    ],
  },
  {
    county: 'Palm Beach',
    areas: [
      'Boca Raton', 'Palm Beach', 'West Palm Beach', 'Delray Beach',
      'Jupiter', 'Wellington', 'Palm Beach Gardens', 'Boynton Beach'
    ],
  },
];

export default function ServiceAreas() {
  useSEO({
    title: 'Service Areas | NA Blinds | South Florida',
    description: 'NA Blinds serves Miami-Dade, Broward, and Palm Beach counties. Professional window treatment installation throughout South Florida.',
    canonicalUrl: 'https://www.nablinds.co/service-areas'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl">
          <p className="label-micro text-stone mb-6">Coverage</p>
          <h1 className="text-ink mb-6">SERVICE AREAS.</h1>
          <p className="body-large text-stone">
            We serve homes throughout South Florida's three coastal counties.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="pb-24 md:pb-32 section-wide">
        <div className="grid md:grid-cols-3 gap-12">
          {SERVICE_AREAS.map((region) => (
            <div key={region.county}>
              <h2 className="font-serif text-2xl text-ink mb-6">{region.county}</h2>
              <ul className="space-y-2">
                {region.areas.map((area) => (
                  <li key={area} className="text-stone">{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-stone">
              Don't see your area? We regularly work throughout South Florida.
              <br />
              <a href="tel:954-629-1373" className="text-ink hover:underline">
                Call 954.629.1373
              </a>
              {' '}to discuss your project.
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </div>
  );
}
