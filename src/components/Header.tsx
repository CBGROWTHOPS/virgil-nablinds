import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Motorized', path: '/motorized' },
    { name: 'Process', path: '/process' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
      <div className="section-wide py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 touch-manipulation">
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-ink">
              NA Blinds
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`label-micro transition-colors ${
                  isActive(link.path) ? 'text-ink' : 'text-stone hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/build-your-project"
              className="group flex items-center gap-2 label-micro text-ink hover:text-ink/70 transition-colors"
            >
              Start Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-ink touch-manipulation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-sand-light pt-6" aria-label="Mobile navigation">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 label-micro transition-colors ${
                    isActive(link.path) ? 'text-ink' : 'text-stone hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-sand-light">
                <Link
                  to="/build-your-project"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
