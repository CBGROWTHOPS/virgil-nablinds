import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useSEO({
    title: 'Contact | NA Blinds | South Florida',
    description: 'Start the conversation about your window treatment project. Contact NA Blinds for custom window solutions in Miami-Dade, Broward, and Palm Beach.',
    canonicalUrl: 'https://www.nablinds.co/contact'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <p className="label-micro text-stone mb-6">Received</p>
          <h1 className="text-ink mb-6">THANK YOU.</h1>
          <p className="body-large text-stone">
            We'll be in touch within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-paper">
      <section className="py-24 md:py-32 section-wide">
        <div className="max-w-2xl mx-auto">
          <p className="label-micro text-stone mb-6">Contact</p>
          <h1 className="text-ink mb-6">START THE CONVERSATION.</h1>
          <p className="body-large text-stone mb-12">
            Tell us about your space.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block label-micro text-stone mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent text-ink"
              />
            </div>
            <div>
              <label className="block label-micro text-stone mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent text-ink"
              />
            </div>
            <div>
              <label className="block label-micro text-stone mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project, your space, or any questions you have..."
                className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent text-ink resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center gap-3"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 border-t border-sand-light">
        <div className="section-wide">
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <p className="label-micro text-stone mb-4">Phone</p>
              <a 
                href="tel:954-629-1373" 
                className="text-ink text-lg hover:text-stone transition-colors"
              >
                954.629.1373
              </a>
            </div>
            <div>
              <p className="label-micro text-stone mb-4">Email</p>
              <a 
                href="mailto:info@nablinds.co" 
                className="text-ink text-lg hover:text-stone transition-colors"
              >
                info@nablinds.co
              </a>
            </div>
            <div>
              <p className="label-micro text-stone mb-4">Location</p>
              <address className="text-ink text-lg not-italic">
                10034 Spanish Isles Blvd<br />
                Boca Raton, FL 33498
              </address>
            </div>
            <div>
              <p className="label-micro text-stone mb-4">Service Areas</p>
              <p className="text-ink text-lg">
                Miami-Dade<br />
                Broward<br />
                Palm Beach
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
