import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const collectionsLinks = [
    { name: 'Sheer', path: '/collections/sheer' },
    { name: 'Soft', path: '/collections/soft' },
    { name: 'Dark', path: '/collections/dark' },
    { name: 'Smart', path: '/collections/smart' },
  ];

  const companyLinks = [
    { name: 'Process', path: '/process' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-ink text-paper">
      <div className="section-wide py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-medium text-paper">
                NA Blinds
              </span>
            </Link>
            <p className="text-paper/60 text-sm leading-relaxed max-w-sm mb-8">
              Architectural window solutions for modern South Florida homes. 
              We design how light lives inside your space.
            </p>
            <Link
              to="/build-your-project"
              className="group inline-flex items-center gap-2 text-sand text-sm font-medium tracking-wide hover:text-paper transition-colors"
            >
              Design Your Light
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="label-micro text-paper/40 mb-5">Collections</h3>
            <ul className="space-y-3">
              {collectionsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-paper/70 hover:text-paper transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="label-micro text-paper/40 mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-paper/70 hover:text-paper transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-paper/10">
              <p className="text-paper/40 text-xs leading-relaxed">
                10034 Spanish Isles Blvd<br />
                Boca Raton, FL 33498
              </p>
              <a 
                href="tel:954-629-1373" 
                className="text-paper/60 hover:text-paper text-sm mt-3 block transition-colors"
              >
                954.629.1373
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-xs text-paper/40">
            <p>© {new Date().getFullYear()} NA Blinds</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-paper/60 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-paper/60 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-paper/40 text-xs">
            Licensed & Insured · BBB A+ Rated · 500+ Installations
          </p>
        </div>
      </div>
    </footer>
  );
}
