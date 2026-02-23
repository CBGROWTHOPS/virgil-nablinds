import { Link } from 'react-router-dom';
import { ArrowLeft, Home, ArrowRight } from 'lucide-react';

export default function ConversionPathDoc() {
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
          <h1 className="font-serif text-3xl text-ink">Conversion Path</h1>
          <p className="text-stone mt-2">
            Single funnel strategy: Build Your Project intake form
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Philosophy */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Philosophy</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Single Path, Single CTA</h2>
          
          <div className="bg-sand-light p-6 mb-6">
            <p className="text-ink font-medium mb-2">Previous Approach (Removed):</p>
            <ul className="text-stone text-sm space-y-1">
              <li>• Phone CTA in header</li>
              <li>• Consultation form</li>
              <li>• Contact form</li>
              <li>• Mobile sticky CTA bar</li>
              <li>• Consultation popup</li>
              <li>• Multiple "Get Quote" buttons</li>
            </ul>
          </div>

          <div className="bg-ink text-paper p-6">
            <p className="font-medium mb-2">New Approach:</p>
            <p className="text-paper/80 text-sm">
              One conversion path: <strong className="text-paper">"Build Your Project"</strong>
              <br />
              Appears as the single CTA across all pages. Feels like commissioning work, not requesting a quote.
            </p>
          </div>
        </section>

        {/* Funnel Steps */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Flow</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Intake Form Steps</h2>
          
          <div className="space-y-4">
            {[
              { step: 1, title: 'Property Type', options: ['High-Rise Condo', 'Single-Family Home', 'Townhouse', 'Other'] },
              { step: 2, title: 'Light Priority', options: ['Privacy', 'Heat Control', 'Ambiance', 'Complete Darkness', 'Not Sure'] },
              { step: 3, title: 'Window Count', options: ['1-3', '4-8', '9-15', '16+'] },
              { step: 4, title: 'Control Mode', options: ['Manual', 'Motorized', 'Smart Home', 'Not Sure'] },
              { step: 5, title: 'Contact Info', options: ['Name', 'Email', 'Phone', 'Address', 'Notes'] },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 border border-sand-light">
                <span className="text-3xl font-serif text-sand">{item.step}</span>
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-stone text-sm mt-1">{item.options.join(' · ')}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Placement */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Placement</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Where CTAs Appear</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-light">
                  <th className="text-left py-3 font-medium text-ink">Location</th>
                  <th className="text-left py-3 font-medium text-ink">CTA Text</th>
                  <th className="text-left py-3 font-medium text-ink">Style</th>
                </tr>
              </thead>
              <tbody className="text-stone">
                <tr className="border-b border-sand-light">
                  <td className="py-3">Header (desktop)</td>
                  <td className="py-3">Start Project →</td>
                  <td className="py-3">Link with arrow</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3">Header (mobile menu)</td>
                  <td className="py-3">Start Project</td>
                  <td className="py-3">Full-width button</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3">Homepage hero</td>
                  <td className="py-3">Schedule Design Consultation</td>
                  <td className="py-3">Primary button</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3">CTASection component</td>
                  <td className="py-3">Build Your Project</td>
                  <td className="py-3">Primary button</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3">Footer</td>
                  <td className="py-3">Design Your Light →</td>
                  <td className="py-3">Link with arrow</td>
                </tr>
                <tr className="border-b border-sand-light">
                  <td className="py-3">Collection pages</td>
                  <td className="py-3">Schedule Consultation</td>
                  <td className="py-3">Primary button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Lead Flow */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Backend</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Lead Flow</h2>
          
          <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
            <span className="bg-ink text-paper px-3 py-2">Form Submit</span>
            <ArrowRight className="w-4 h-4 text-stone" />
            <span className="bg-sand-light text-ink px-3 py-2">Webhook</span>
            <ArrowRight className="w-4 h-4 text-stone" />
            <span className="bg-sand-light text-ink px-3 py-2">GoHighLevel CRM</span>
            <ArrowRight className="w-4 h-4 text-stone" />
            <span className="bg-sand-light text-ink px-3 py-2">Follow-up</span>
          </div>

          <div className="bg-sand-light p-6 text-sm">
            <p className="font-medium text-ink mb-2">Data Captured:</p>
            <ul className="text-stone space-y-1">
              <li>• Property type (high-rise, single-family, etc.)</li>
              <li>• Light priority (privacy, heat, ambiance, darkness)</li>
              <li>• Window count range</li>
              <li>• Control preference (manual, motorized, smart)</li>
              <li>• Contact: name, email, phone, address</li>
              <li>• Optional notes</li>
            </ul>
          </div>
        </section>

        {/* Confirmation */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Post-Submit</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Confirmation Experience</h2>
          
          <div className="border border-sand-light p-8 text-center">
            <p className="label-micro text-stone mb-4">Received</p>
            <p className="font-serif text-2xl text-ink mb-4">THANK YOU, [NAME].</p>
            <p className="text-stone">
              We'll review your space and reach out within 24 hours to schedule your consultation.
            </p>
          </div>
          <p className="text-stone text-sm mt-4">
            No spammy "get instant quote" energy. Clean, confident confirmation.
          </p>
        </section>

        {/* Tracking */}
        <section className="mb-16">
          <p className="label-micro text-stone mb-4">Analytics</p>
          <h2 className="font-serif text-2xl text-ink mb-6">Conversion Tracking</h2>
          
          <div className="bg-sand-light p-6 text-sm">
            <p className="text-stone mb-4">On successful form submission:</p>
            <ul className="text-stone space-y-1">
              <li>• <strong className="text-ink">Meta Pixel:</strong> <code>fbq('track', 'Lead')</code></li>
              <li>• <strong className="text-ink">Google Ads:</strong> <code>gtag('event', 'conversion', ...)</code></li>
              <li>• <strong className="text-ink">GoHighLevel:</strong> Webhook submission</li>
            </ul>
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
