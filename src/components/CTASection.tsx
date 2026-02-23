import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'light';
}

export default function CTASection({ variant = 'default' }: CTASectionProps) {
  const isLight = variant === 'light';

  return (
    <section className={`py-24 md:py-32 section-wide ${isLight ? 'bg-paper' : 'bg-ink'}`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className={`label-micro mb-6 ${isLight ? 'text-stone' : 'text-paper/40'}`}>
          Next Step
        </p>
        <h2 className={`headline-large mb-6 ${isLight ? 'text-ink' : 'text-paper'}`}>
          DESIGN YOUR LIGHT.
        </h2>
        <p className={`body-large mb-10 max-w-xl mx-auto ${isLight ? 'text-stone' : 'text-paper/60'}`}>
          Schedule your private consultation today.
        </p>
        <Link
          to="/build-your-project"
          className={`group inline-flex items-center gap-3 px-8 py-4 font-medium text-sm tracking-wide uppercase transition-all ${
            isLight 
              ? 'bg-ink text-paper hover:bg-ink-light' 
              : 'bg-paper text-ink hover:bg-sand-light'
          }`}
        >
          Build Your Project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
