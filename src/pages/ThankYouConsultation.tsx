import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ThankYouConsultation() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';

  useEffect(() => {
    document.title = 'Thank You | NA Blinds';

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }

    return () => {
      document.title = 'NA Blinds - Custom Window Treatments in South Florida | Miami, Broward, Palm Beach';
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <p className="label-micro text-stone mb-6">Received</p>
        <h1 className="text-ink mb-6">
          THANK YOU{name ? `, ${name.toUpperCase()}.` : '.'}
        </h1>
        <p className="body-large text-stone mb-10">
          We'll review your space and reach out within 24 hours to schedule your consultation.
        </p>
        <a
          href="tel:954-629-1373"
          className="inline-flex items-center gap-2 text-ink border border-ink px-6 py-3 mb-8 hover:bg-ink hover:text-paper transition-colors"
        >
          Call Now
        </a>
        <p className="text-stone text-sm mb-10">954.629.1373 · Monday–Saturday, 8am–6pm</p>
        <Link to="/" className="btn-primary inline-flex items-center gap-3">
          Return Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
