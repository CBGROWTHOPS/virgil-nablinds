import { Link } from 'react-router-dom';
import {
  FileText,
  Palette,
  GitBranch,
  Layout,
  ArrowRight,
  Home,
  CheckCircle,
  BarChart3,
  Webhook,
  Mail,
  Search,
  MapPin,
  Database,
} from 'lucide-react';

export default function DocsHub() {
  const rebrandDocs = [
    {
      title: 'Brand System',
      description: 'Visual identity: typography, colors, spacing, and component patterns',
      icon: Palette,
      link: '/docs/brand-system',
      color: 'bg-ink',
    },
    {
      title: 'Conversion Path',
      description: 'Single conversion funnel: Build Your Project intake form and lead flow',
      icon: GitBranch,
      link: '/docs/conversion-path',
      color: 'bg-sand',
    },
    {
      title: 'Site Architecture',
      description: 'Page structure, Collections system, routing, and redirects',
      icon: Layout,
      link: '/docs/site-architecture',
      color: 'bg-stone',
    },
  ];

  const technicalDocs = [
    {
      title: 'Analytics & Tracking',
      description: 'Facebook Pixel, Google Ads, Google Tag Manager, Microsoft Clarity',
      icon: BarChart3,
      link: '/docs/analytics',
      color: 'bg-blue-600',
    },
    {
      title: 'Microsoft Clarity',
      description: 'Session recording and heatmap setup',
      icon: BarChart3,
      link: '/docs/clarity',
      color: 'bg-sky-500',
    },
    {
      title: 'GoHighLevel Webhook',
      description: 'CRM integration and lead submission system',
      icon: Webhook,
      link: '/docs/webhook',
      color: 'bg-green-600',
    },
    {
      title: 'Contact Form Flow',
      description: 'Form submission, validation, and conversion tracking',
      icon: Mail,
      link: '/docs/contact-form',
      color: 'bg-purple-600',
    },
    {
      title: 'Thank You Page',
      description: 'Post-conversion page and next steps',
      icon: CheckCircle,
      link: '/docs/thank-you',
      color: 'bg-teal-600',
    },
    {
      title: 'SEO System',
      description: 'Dynamic meta tags and structured data',
      icon: Search,
      link: '/docs/seo',
      color: 'bg-orange-500',
    },
    {
      title: 'Geolocation',
      description: 'Automatic city detection and personalized content',
      icon: MapPin,
      link: '/docs/geolocation',
      color: 'bg-red-500',
    },
    {
      title: 'Supabase Database',
      description: 'Database setup and configuration',
      icon: Database,
      link: '/docs/database',
      color: 'bg-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-paper">
      <div className="border-b border-sand-light">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-ink" />
            <h1 className="font-serif text-3xl text-ink">
              Internal Documentation
            </h1>
          </div>
          <p className="text-stone text-lg">
            System documentation for the Virgil NA Blinds rebrand
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-stone bg-sand-light px-4 py-3 border-l-2 border-sand">
            <span className="font-medium">INTERNAL ONLY</span>
            <span>— Not visible on the public website</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Rebrand Documentation */}
        <div className="mb-16">
          <p className="label-micro text-stone mb-2">Rebrand</p>
          <h2 className="font-serif text-2xl text-ink mb-6">
            Virgil Rebrand — February 2026
          </h2>

          <div className="space-y-4 mb-8">
            {rebrandDocs.map((section) => (
              <Link
                key={section.link}
                to={section.link}
                className="group flex items-center justify-between p-6 bg-white border border-sand-light hover:border-ink transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-paper" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink group-hover:text-ink/80 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-stone text-sm mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-stone group-hover:text-ink group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          <div className="bg-sand-light p-6">
            <h3 className="font-medium text-ink mb-4">Brand Direction Summary</h3>
            <div className="space-y-3 text-stone text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
                <p><strong className="text-ink">Positioning:</strong> Light architecture studio, not window treatment company</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
                <p><strong className="text-ink">Collections:</strong> SHEER, SOFT, DARK, SMART — organized by outcome</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
                <p><strong className="text-ink">Conversion:</strong> Single path — Build Your Project intake form</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
                <p><strong className="text-ink">Removed:</strong> Promo banners, sticky CTAs, badge stacking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Documentation */}
        <div className="mb-16">
          <p className="label-micro text-stone mb-2">Technical</p>
          <h2 className="font-serif text-2xl text-ink mb-6">
            Systems & Integrations
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {technicalDocs.map((section) => (
              <Link
                key={section.link}
                to={section.link}
                className="group flex items-start gap-4 p-5 bg-white border border-sand-light hover:border-ink transition-colors"
              >
                <div className={`w-10 h-10 ${section.color} flex items-center justify-center flex-shrink-0`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-ink group-hover:text-ink/80 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-stone text-sm mt-1">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Documentation Standards */}
        <div className="bg-white border border-sand-light p-8 mb-12">
          <h2 className="font-serif text-xl text-ink mb-4">
            Documentation Standards
          </h2>
          <div className="space-y-3 text-stone text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
              <p><strong className="text-ink">Always update documentation</strong> when making functional changes</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
              <p><strong className="text-ink">Document the 'why'</strong> not just the 'what' — explain business context</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
              <p><strong className="text-ink">Include failure points</strong> and common mistakes to avoid</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" />
              <p><strong className="text-ink">Keep it operational</strong> — write for someone managing the site without you</p>
            </div>
          </div>
        </div>

        <div className="text-center">
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
