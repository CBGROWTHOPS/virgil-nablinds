import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'MEASURE',
    subtitle: 'Precise on-site consultation',
    description: 'We visit your space to understand how you live with light. Exact measurements, window assessments, and product recommendations tailored to your architecture and lifestyle.',
    details: [
      'In-home consultation at your convenience',
      'Precise digital measurements',
      'Light assessment throughout the day',
      'HOA and building requirement review',
    ],
  },
  {
    number: '02',
    title: 'CURATE',
    subtitle: 'Expert selection of materials',
    description: 'We guide you through fabric options, opacity levels, and control systems. Sample materials in your actual space. No guesswork, no showroom surprises.',
    details: [
      'In-home fabric and material samples',
      'Opacity and light-filtering demonstrations',
      'Color coordination guidance',
      'Motorization and smart home options',
    ],
  },
  {
    number: '03',
    title: 'INSTALL',
    subtitle: 'Professional execution',
    description: 'Our certified technicians handle everything. Clean, precise installation with attention to detail. We don\'t leave until everything operates perfectly.',
    details: [
      'Certified installation technicians',
      'Clean, respectful workmanship',
      'Full operation testing',
      'Usage and care instruction',
    ],
  },
];

export default function Process() {
  useSEO({
    title: 'The Design Process | NA Blinds | South Florida',
    description: 'Our three-step approach: Measure, Curate, Install. Professional window treatment consultation and installation for South Florida homes.',
    canonicalUrl: 'https://www.nablinds.co/process'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl">
          <p className="label-micro text-stone mb-6">How We Work</p>
          <h1 className="text-ink mb-6">THE DESIGN PROCESS.</h1>
          <p className="body-large text-stone max-w-xl">
            Three steps from consultation to completion. No pressure, no surprises, no shortcuts.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 md:pb-32">
        {PROCESS_STEPS.map((step, index) => (
          <div 
            key={step.number} 
            className={`py-24 md:py-32 ${index % 2 === 1 ? 'bg-sand-light' : ''}`}
          >
            <div className="section-wide">
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-2">
                  <span className="text-7xl md:text-8xl font-serif text-sand">
                    {step.number}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-serif text-4xl md:text-5xl text-ink mb-2">
                    {step.title}
                  </h2>
                  <p className="text-stone text-lg mb-6">
                    — {step.subtitle}
                  </p>
                  <p className="body-clean text-stone leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="md:col-span-4 md:col-start-9">
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone text-sm">
                        <span className="w-1.5 h-1.5 bg-sand rounded-full mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Authority */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide text-center">
          <p className="text-stone text-sm">
            Installed in 500+ South Florida homes · Licensed & Insured · 10+ Years Experience
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-micro text-stone mb-6">Our Commitment</p>
          <h2 className="text-ink mb-8">NO PRESSURE. NO OBLIGATION.</h2>
          <p className="body-large text-stone mb-10">
            Your consultation is free. We provide a detailed quote with no hidden fees. 
            If you decide to move forward, we handle everything from ordering to installation. 
            If not, there's no cost and no follow-up pressure.
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

      <CTASection />
    </div>
  );
}
