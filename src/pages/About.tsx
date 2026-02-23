import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

export default function About() {
  useSEO({
    title: 'About | NA Blinds | Light Architecture for South Florida',
    description: 'We design how light lives inside your space. Over 10 years of architectural window solutions for modern South Florida homes.',
    canonicalUrl: 'https://www.nablinds.co/about'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl">
          <p className="label-micro text-stone mb-6">About</p>
          <h1 className="text-ink mb-6">
            <span className="block">LIGHT</span>
            <span className="block">ARCHITECTURE.</span>
          </h1>
          <p className="body-large text-stone">
            We don't install window treatments. We design how light lives inside your space.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-micro text-stone mb-6">Philosophy</p>
              <h2 className="text-ink mb-8">CONTROL IS DESIGN.</h2>
              <div className="space-y-6 body-clean text-stone">
                <p>
                  South Florida light is unlike anywhere else. Intense, relentless, beautiful. 
                  We've spent over a decade learning exactly how to shape it.
                </p>
                <p>
                  Every window presents a choice: how much light enters, when it enters, 
                  and how it transforms a room. These aren't just functional decisions. 
                  They're design decisions.
                </p>
                <p>
                  We approach each project as light architecture — considering how you 
                  live, how your space moves through the day, and what atmosphere you 
                  want to create.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-ink/10 overflow-hidden">
              <img
                src="/images/gallery/gallery-solar-living-warm.png"
                alt="Light through window treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-micro text-stone mb-6">Approach</p>
          <h2 className="text-ink mb-8">OUTCOME OVER PRODUCT.</h2>
          <p className="body-large text-stone mb-12">
            We don't start with product categories. We start with how you want to feel in your space. 
            Privacy, ambiance, heat control, complete darkness — the outcome drives the solution.
          </p>
          <Link to="/collections" className="link-arrow">
            Explore Our Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl md:text-5xl font-serif text-ink mb-2">500+</span>
              <span className="label-micro text-stone">Homes Completed</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-serif text-ink mb-2">10+</span>
              <span className="label-micro text-stone">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-serif text-ink mb-2">A+</span>
              <span className="label-micro text-stone">BBB Rating</span>
            </div>
            <div>
              <span className="block text-4xl md:text-5xl font-serif text-ink mb-2">3</span>
              <span className="label-micro text-stone">Counties Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-3xl mx-auto">
          <p className="label-micro text-stone mb-6 text-center">Team</p>
          <h2 className="text-ink mb-8 text-center">PEOPLE, NOT SALESPEOPLE.</h2>
          <p className="body-large text-stone text-center mb-6">
            When you work with NA Blinds, you work directly with experienced professionals 
            who understand both design and installation. No handoffs, no miscommunication, 
            no surprises.
          </p>
          <p className="body-clean text-stone text-center">
            We're a small team by choice. It allows us to maintain quality, build relationships, 
            and stand behind every project personally.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
