import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PROCESS_STEPS = [
  { number: '01', title: 'MEASURE', description: 'On-site consultation' },
  { number: '02', title: 'CURATE', description: 'Expert material selection' },
  { number: '03', title: 'INSTALL', description: 'Professional execution' },
];

const TESTIMONIALS = [
  {
    quote: "They transformed how light moves through our condo. It's not just shades—it's architecture.",
    name: 'Sarah M.',
    location: 'Brickell, Miami',
  },
  {
    quote: "The attention to detail was exceptional. Every window feels intentional now.",
    name: 'Michael R.',
    location: 'Fort Lauderdale',
  },
];

export default function Meta() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Meta Landing Page',
        content_category: 'Landing Page',
      });
    }
  }, []);

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Meta Landing CTA',
      });
    }
  };

  return (
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full">
            {/* Before */}
            <div className="relative">
              <img
                src="/images/gallery/gallery-solar-office-harsh.png"
                alt="Before - Uncontrolled light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <span className="absolute bottom-6 left-6 label-micro text-paper/80">BEFORE</span>
            </div>
            {/* After */}
            <div className="relative">
              <img
                src="/images/gallery/gallery-solar-living-warm.png"
                alt="After - Designed light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/10" />
              <span className="absolute bottom-6 right-6 label-micro text-paper/80">AFTER</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
        </div>

        <div className="relative section-wide w-full py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-micro text-paper/60 mb-6">South Florida</p>
            <h1 className="headline-oversized text-paper mb-6">
              UPGRADE YOUR LIGHT.
            </h1>
            <p className="body-large text-paper/80 max-w-lg mx-auto mb-10">
              Custom window architecture for South Florida homes.
            </p>
            <Link
              to="/build-your-project"
              onClick={handleCTAClick}
              className="btn-primary bg-paper text-ink hover:bg-sand-light inline-flex items-center gap-3"
            >
              Schedule Design Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 md:py-32 section-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img
              src="/images/gallery/gallery-fullhome-mediterranean.png"
              alt="Transformed living space"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="max-w-md">
            <p className="label-micro text-stone mb-4">The Transformation</p>
            <h2 className="text-ink mb-6">FROM HARSH TO HARMONIOUS.</h2>
            <p className="body-large text-stone mb-6">
              The right window treatment doesn't just block light—it shapes how light lives in your space. 
              Control glare. Reduce heat. Create atmosphere.
            </p>
            <p className="text-stone">
              Every South Florida home deserves light that feels intentional, not accidental.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide">
          <p className="label-micro text-stone text-center mb-4">The Process</p>
          <h2 className="text-ink text-center mb-16">THREE STEPS. FLAWLESS RESULT.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="text-center">
                <span className="block text-5xl font-serif text-sand mb-4">{step.number}</span>
                <h3 className="text-ink text-lg font-medium tracking-wide mb-2">{step.title}</h3>
                <p className="text-stone text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 section-wide">
        <p className="label-micro text-stone text-center mb-16">What Clients Say</p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-xl md:text-2xl text-ink mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-stone text-sm">
                {testimonial.name} — {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-ink">
        <div className="section-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-large text-paper mb-6">DESIGN YOUR LIGHT.</h2>
            <p className="body-large text-paper/60 mb-10 max-w-xl mx-auto">
              Schedule your private consultation today.
            </p>
            <Link
              to="/build-your-project"
              onClick={handleCTAClick}
              className="btn-primary bg-paper text-ink hover:bg-sand-light inline-flex items-center gap-3"
            >
              Schedule Design Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-ink border-t border-paper/10">
        <div className="section-wide text-center">
          <p className="text-paper/40 text-xs">
            NA Blinds · Licensed & Insured · South Florida
          </p>
        </div>
      </footer>
    </div>
  );
}
