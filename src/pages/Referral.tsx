import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, DollarSign, Clock, MapPin, Check } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { submitToWebhook } from '../utils/webhook';

const BENEFITS = [
  {
    icon: DollarSign,
    title: 'Referral commission',
    description: 'Earn on every completed install from your referrals.',
  },
  {
    icon: Check,
    title: 'Preferred pricing',
    description: 'Your clients receive professional pricing on custom treatments.',
  },
  {
    icon: Clock,
    title: 'Fast service',
    description: 'We handle consultation, measurement, design, and installation.',
  },
  {
    icon: MapPin,
    title: 'South Florida coverage',
    description: 'Miami-Dade, Broward, and Palm Beach—no job too far.',
  },
];

const STEPS = [
  { number: '1', title: 'Send a client', description: 'Refer homeowners who need blinds, shades, or motorized treatments.' },
  { number: '2', title: 'We handle the rest', description: 'Consultation, measurement, design, and installation—all on us.' },
  { number: '3', title: 'You earn', description: 'Receive your referral commission after the job is complete.' },
];

export default function Referral() {
  const [activeTab, setActiveTab] = useState<'partner' | 'referral'>('partner');
  const [formData, setFormData] = useState({
    partnerName: '',
    companyName: '',
    email: '',
    phone: '',
    clientName: '',
    clientPhone: '',
    clientAddress: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useSEO({
    title: 'Partner Program | Referral Income for Design Professionals | NA Blinds',
    description: 'Earn referral income by connecting your clients with custom window blinds, shades, and motorized treatments. For real estate agents, designers, contractors, and property professionals in South Florida.',
    canonicalUrl: 'https://www.nablinds.co/referral',
  });

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitToWebhook({
      name: formData.partnerName,
      email: formData.email,
      phone: formData.phone || undefined,
      message: `[Partner Program Sign-Up]\nCompany: ${formData.companyName || 'N/A'}\n\nInterested in becoming a referral partner.`,
      formName: 'Referral Partner Sign-Up',
    });

    setIsSubmitting(false);

    if (success) {
      navigate(`/thank-you?email=${encodeURIComponent(formData.email)}`);
    } else {
      alert('Something went wrong. Please try again or call us at 954-629-1373.');
    }
  };

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const referralDetails = [
      formData.companyName && `Company: ${formData.companyName}`,
      `Client Name: ${formData.clientName}`,
      formData.clientPhone && `Client Phone: ${formData.clientPhone}`,
      formData.clientAddress && `Client Address: ${formData.clientAddress}`,
      formData.notes && `Notes: ${formData.notes}`,
    ]
      .filter(Boolean)
      .join('\n');

    const success = await submitToWebhook({
      name: formData.partnerName,
      email: formData.email,
      phone: formData.phone || undefined,
      message: `[Client Referral]\n${referralDetails}`,
      formName: 'Client Referral',
    });

    setIsSubmitting(false);

    if (success) {
      navigate(`/thank-you?email=${encodeURIComponent(formData.email)}`);
    } else {
      alert('Something went wrong. Please try again or call us at 954-629-1373.');
    }
  };

  const inputClass = 'w-full p-4 border border-stone/25 focus:border-ink focus:outline-none bg-transparent text-ink';
  const labelClass = 'block label-micro text-stone mb-2';

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative py-24 md:py-32 section-wide">
        <div className="max-w-4xl">
          <p className="label-micro text-stone mb-6">Partner Program</p>
          <h1 className="text-ink mb-6">
            EARN $200 FOR EVERY CLIENT YOU REFER FOR CUSTOM WINDOW BLINDS.
          </h1>
          <p className="body-large text-stone max-w-2xl mb-10">
            For professionals who work with homeowners in South Florida. Real estate agents, interior designers, contractors, builders, property managers, and smart home installers—we handle consultation, measurement, design, and installation. You earn when the job is done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setActiveTab('partner')}
              className={`inline-flex items-center gap-3 px-6 py-4 font-medium text-sm tracking-wide uppercase transition-all ${
                activeTab === 'partner' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Become a Referral Partner
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('referral')}
              className={`inline-flex items-center gap-3 px-6 py-4 font-medium text-sm tracking-wide uppercase transition-all ${
                activeTab === 'referral' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Send a Client
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-sand-light section-wide">
        <p className="label-micro text-stone mb-6">Benefits</p>
        <h2 className="text-ink mb-12">WHY PARTNER WITH US.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item) => (
            <div key={item.title}>
              <item.icon className="w-8 h-8 text-ink mb-4" strokeWidth={1.5} />
              <h3 className="text-ink font-medium mb-2">{item.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 section-wide">
        <p className="label-micro text-stone mb-6">How It Works</p>
        <h2 className="text-ink mb-12">THREE STEPS. SIMPLE.</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl">
          {STEPS.map((step) => (
            <div key={step.number}>
              <span className="block text-6xl font-serif text-sand mb-4">{step.number}</span>
              <h3 className="text-ink text-lg font-medium tracking-wide mb-3">{step.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 bg-sand-light section-wide">
        <div className="max-w-2xl mx-auto">
          <p className="label-micro text-stone mb-6">Get Started</p>
          <h2 className="text-ink mb-6">
            {activeTab === 'partner' ? 'BECOME A REFERRAL PARTNER.' : 'SEND A CLIENT.'}
          </h2>

          {activeTab === 'partner' ? (
            <form onSubmit={handlePartnerSubmit} className="space-y-6">
              <div>
                <label className={labelClass}>Your name</label>
                <input
                  type="text"
                  required
                  value={formData.partnerName}
                  onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                  className={inputClass}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className={labelClass}>Company name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className={inputClass}
                  placeholder="Your company or brokerage"
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                  placeholder="Best number to reach you"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary inline-flex items-center gap-3">
                {isSubmitting ? 'Submitting...' : 'Become a Referral Partner'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleReferralSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Your name</label>
                  <input
                    type="text"
                    required
                    value={formData.partnerName}
                    onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Your company</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Your email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Your phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-sand-light">
                <p className="label-micro text-stone mb-4">Client details</p>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Client name</label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Client phone</label>
                    <input
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Client address</label>
                    <input
                      type="text"
                      value={formData.clientAddress}
                      onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
                      className={inputClass}
                      placeholder="City, county, or full address"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Project scope, timeline, or special requests"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary inline-flex items-center gap-3">
                {isSubmitting ? 'Submitting...' : 'Send Client Referral'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 border-y border-sand-light">
        <div className="section-wide">
          <p className="text-center text-stone text-sm">
            Professional installation · Custom blinds and motorized shades · Serving Miami-Dade, Broward & Palm Beach · Licensed & Insured · BBB A+ Rated
          </p>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-24 md:py-32 bg-ink section-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-large text-paper mb-6">DESIGN YOUR LIGHT.</h2>
          <p className="body-large text-paper/60 mb-10 max-w-xl mx-auto">
            Explore custom window solutions for your own home.
          </p>
          <Link
            to="/build-your-project"
            className="btn-primary bg-paper text-ink hover:bg-sand-light inline-flex items-center gap-3"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
