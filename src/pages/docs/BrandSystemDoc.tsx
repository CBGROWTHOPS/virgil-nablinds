import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function BrandSystemDoc() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-sand-light">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-stone hover:text-ink transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Docs
          </Link>
          <h1 className="font-serif text-3xl text-ink">Brand System</h1>
          <p className="text-stone mt-2">
            Visual identity guidelines for the Virgil NA Blinds rebrand
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Color Palette */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Colors</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="h-24 bg-paper border border-sand-light mb-2"></div>
              <p className="font-medium text-ink text-sm">Paper</p>
              <p className="text-stone text-xs">#F5F3EF</p>
            </div>
            <div>
              <div className="h-24 bg-ink mb-2"></div>
              <p className="font-medium text-ink text-sm">Ink</p>
              <p className="text-stone text-xs">#1A1A1A</p>
            </div>
            <div>
              <div className="h-24 bg-sand mb-2"></div>
              <p className="font-medium text-ink text-sm">Sand</p>
              <p className="text-stone text-xs">#C9B99A</p>
            </div>
            <div>
              <div className="h-24 bg-stone mb-2"></div>
              <p className="font-medium text-ink text-sm">Stone</p>
              <p className="text-stone text-xs">#8A8A8A</p>
            </div>
          </div>

          <div className="bg-sand-light p-6 text-sm">
            <p className="font-medium text-ink mb-2">Usage Rules:</p>
            <ul className="text-stone space-y-1">
              <li>• Paper — Primary background</li>
              <li>• Ink — Headlines, primary text, buttons</li>
              <li>• Sand — Accents, large numbers, decorative elements</li>
              <li>• Stone — Secondary text, labels, borders</li>
              <li>• No teal, no glossy gradients, no competing hues</li>
            </ul>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Typography</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Type System</h2>
          
          <div className="space-y-8">
            <div className="border-b border-sand-light pb-8">
              <p className="label-micro text-stone mb-2">Headlines</p>
              <p className="headline-oversized text-ink">LIGHT.</p>
              <p className="text-stone text-sm mt-4">
                <code className="bg-sand-light px-2 py-1">.headline-oversized</code> — Playfair Display, 6-8rem, weight 500
              </p>
            </div>

            <div className="border-b border-sand-light pb-8">
              <p className="label-micro text-stone mb-2">Large Headlines</p>
              <p className="headline-large text-ink">DESIGN YOUR LIGHT.</p>
              <p className="text-stone text-sm mt-4">
                <code className="bg-sand-light px-2 py-1">.headline-large</code> — Playfair Display, 2.5-4rem, weight 500
              </p>
            </div>

            <div className="border-b border-sand-light pb-8">
              <p className="label-micro text-stone mb-2">Micro Labels</p>
              <p className="label-micro text-ink">COLLECTIONS</p>
              <p className="text-stone text-sm mt-4">
                <code className="bg-sand-light px-2 py-1">.label-micro</code> — Inter, 0.75rem, uppercase, tracking 0.2em
              </p>
            </div>

            <div className="border-b border-sand-light pb-8">
              <p className="label-micro text-stone mb-2">Body Text</p>
              <p className="body-large text-stone">
                We design how light lives inside your space. Custom window architecture for modern South Florida homes.
              </p>
              <p className="text-stone text-sm mt-4">
                <code className="bg-sand-light px-2 py-1">.body-large</code> — Inter, 1.125-1.25rem, line-height 1.7
              </p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Components</p>
          <h2 className="font-serif text-2xl text-ink mb-6">UI Patterns</h2>
          
          <div className="space-y-8">
            <div>
              <p className="font-medium text-ink mb-4">Buttons</p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">Primary Button</button>
                <button className="btn-secondary">Secondary Button</button>
              </div>
            </div>

            <div>
              <p className="font-medium text-ink mb-4">Link Arrow</p>
              <Link to="/collections" className="link-arrow">
                View Collections
                <span>→</span>
              </Link>
            </div>

            <div>
              <p className="font-medium text-ink mb-4">Section Pattern</p>
              <div className="bg-sand-light p-6 text-sm text-stone">
                <p>Every section follows: <strong className="text-ink">Label → Headline → Body → CTA</strong></p>
                <p className="mt-2">This creates consistent rhythm and reduces cognitive load.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Layout */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Layout</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Spacing & Structure</h2>
          
          <div className="bg-sand-light p-6 text-sm">
            <ul className="text-stone space-y-2">
              <li>• <strong className="text-ink">Section padding:</strong> <code>py-24 md:py-32</code></li>
              <li>• <strong className="text-ink">Wide margins:</strong> <code>.section-wide</code> (5% → 8% → 12%)</li>
              <li>• <strong className="text-ink">Max content width:</strong> 1200px</li>
              <li>• <strong className="text-ink">Grid gaps:</strong> gap-6 to gap-12</li>
              <li>• <strong className="text-ink">Generous whitespace:</strong> Protect negative space</li>
            </ul>
          </div>
        </section>

        {/* Brand Rules */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Rules</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Brand Behavior</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-medium text-ink mb-4">Always:</p>
              <ul className="text-stone text-sm space-y-2">
                <li>• Lead with concept</li>
                <li>• Show transformation visually</li>
                <li>• Use restraint</li>
                <li>• Repeat a single strong CTA</li>
                <li>• Protect whitespace</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-ink mb-4">Never:</p>
              <ul className="text-stone text-sm space-y-2">
                <li>• Lead with discount banners</li>
                <li>• Stack trust badges above the fold</li>
                <li>• Over-explain features early</li>
                <li>• Use generic contractor copy</li>
                <li>• Multiple competing CTAs</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pt-8 border-t border-sand-light">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-stone hover:text-ink transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
