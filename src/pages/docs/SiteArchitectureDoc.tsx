import { Link } from 'react-router-dom';
import { ArrowLeft, Home, ArrowRight } from 'lucide-react';

export default function SiteArchitectureDoc() {
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
          <h1 className="font-serif text-3xl text-ink">Site Architecture</h1>
          <p className="text-stone mt-2">
            Page structure, routing, and Collections system
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Page Structure */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Pages</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Active Routes</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-light">
                  <th className="text-left py-3 font-medium text-ink">Route</th>
                  <th className="text-left py-3 font-medium text-ink">Page</th>
                  <th className="text-left py-3 font-medium text-ink">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-stone">
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/</td>
                  <td className="py-3">Home</td>
                  <td className="py-3">Hero, collections grid, process preview, CTA</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/collections</td>
                  <td className="py-3">CollectionsHub</td>
                  <td className="py-3">Overview of all 4 collections</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/collections/:slug</td>
                  <td className="py-3">CollectionPage</td>
                  <td className="py-3">Individual collection lookbook</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/motorized</td>
                  <td className="py-3">Motorized</td>
                  <td className="py-3">AUTOMATED LIGHT — smart/motorized focus</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/process</td>
                  <td className="py-3">Process</td>
                  <td className="py-3">MEASURE / CURATE / INSTALL</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/projects</td>
                  <td className="py-3">Projects</td>
                  <td className="py-3">Portfolio / installations gallery</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/about</td>
                  <td className="py-3">About</td>
                  <td className="py-3">Light architecture philosophy</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/contact</td>
                  <td className="py-3">Contact</td>
                  <td className="py-3">Minimal contact form</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/build-your-project</td>
                  <td className="py-3">BuildYourProject</td>
                  <td className="py-3">Conversion intake form (standalone)</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-mono text-xs">/service-areas</td>
                  <td className="py-3">ServiceAreas</td>
                  <td className="py-3">Miami-Dade, Broward, Palm Beach</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Collections System */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Collections</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Experience-Based Organization</h2>
          
          <div className="bg-sand-light p-6 mb-6 text-sm">
            <p className="text-ink font-medium mb-2">Previous: Category-Based</p>
            <p className="text-stone">Blinds → Shades → Shutters → Drapes</p>
          </div>

          <div className="bg-ink text-paper p-6 mb-6 text-sm">
            <p className="font-medium mb-2">New: Outcome-Based</p>
            <p className="text-paper/80">SHEER → SOFT → DARK → SMART</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-light">
                  <th className="text-left py-3 font-medium text-ink">Collection</th>
                  <th className="text-left py-3 font-medium text-ink">Tagline</th>
                  <th className="text-left py-3 font-medium text-ink">Products Included</th>
                </tr>
              </thead>
              <tbody className="text-stone">
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-medium text-ink">SHEER</td>
                  <td className="py-3">See through softly</td>
                  <td className="py-3">Solar shades, sheer shades, light-filtering, woven wood</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-medium text-ink">SOFT</td>
                  <td className="py-3">Diffused atmosphere</td>
                  <td className="py-3">Cellular, roman, roller, zebra shades</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-medium text-ink">DARK</td>
                  <td className="py-3">Complete privacy</td>
                  <td className="py-3">Blackout shades, blackout drapes, shutters</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3 font-medium text-ink">SMART</td>
                  <td className="py-3">Silent automation</td>
                  <td className="py-3">Motorized shades, blinds, drapery tracks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Redirects */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Redirects</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Legacy Route Handling</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-light">
                  <th className="text-left py-3 font-medium text-ink">Old Route</th>
                  <th className="text-left py-3 font-medium text-ink"></th>
                  <th className="text-left py-3 font-medium text-ink">New Route</th>
                </tr>
              </thead>
              <tbody className="text-stone">
                {[
                  ['/products/*', '/collections'],
                  ['/gallery', '/projects'],
                  ['/motorized-blinds', '/motorized'],
                  ['/services', '/process'],
                  ['/consultation', '/build-your-project'],
                  ['/faq', '/'],
                  ['/testimonials', '/projects'],
                  ['/guides', '/collections'],
                  ['/trade', '/contact'],
                ].map(([old, newRoute]) => (
                  <tr key={old} className="border-b border-sand-light">
                    <td className="py-3 font-mono text-xs">{old}</td>
                    <td className="py-3"><ArrowRight className="w-4 h-4 text-stone" /></td>
                    <td className="py-3 font-mono text-xs">{newRoute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Removed Components */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Removed</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Deprecated Components</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-sand-light p-4">
              <p className="font-medium text-ink text-sm mb-2">PromoBar.tsx</p>
              <p className="text-stone text-xs">Discount banner at top of page</p>
            </div>
            <div className="bg-sand-light p-4">
              <p className="font-medium text-ink text-sm mb-2">MobileStickyCTA.tsx</p>
              <p className="text-stone text-xs">Fixed bottom call bar on mobile</p>
            </div>
            <div className="bg-sand-light p-4">
              <p className="font-medium text-ink text-sm mb-2">ConsultationPopup.tsx</p>
              <p className="text-stone text-xs">Exit-intent popup modal</p>
            </div>
            <div className="bg-sand-light p-4">
              <p className="font-medium text-ink text-sm mb-2">Trust badge grids</p>
              <p className="text-stone text-xs">Moved to footer only (single line)</p>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Structure</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Key Files</h2>
          
          <div className="bg-sand-light p-6 font-mono text-xs text-stone space-y-1">
            <p>src/</p>
            <p className="pl-4">├── components/</p>
            <p className="pl-8">├── Header.tsx <span className="text-ink"># Minimal nav</span></p>
            <p className="pl-8">├── Footer.tsx <span className="text-ink"># Dark, single CTA</span></p>
            <p className="pl-8">└── CTASection.tsx <span className="text-ink"># "DESIGN YOUR LIGHT"</span></p>
            <p className="pl-4">├── data/</p>
            <p className="pl-8">└── collections.ts <span className="text-ink"># SHEER, SOFT, DARK, SMART</span></p>
            <p className="pl-4">├── pages/</p>
            <p className="pl-8">├── Home.tsx</p>
            <p className="pl-8">├── Motorized.tsx</p>
            <p className="pl-8">├── Process.tsx</p>
            <p className="pl-8">├── Projects.tsx</p>
            <p className="pl-8">├── BuildYourProject.tsx</p>
            <p className="pl-8">└── collections/</p>
            <p className="pl-12">├── CollectionsHub.tsx</p>
            <p className="pl-12">└── CollectionPage.tsx</p>
            <p className="pl-4">├── index.css <span className="text-ink"># Typography system</span></p>
            <p className="pl-4">└── tailwind.config.js <span className="text-ink"># Color palette</span></p>
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
