import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const MODES = [
  {
    id: 'manual',
    title: 'MANUAL MODE',
    description: 'Traditional operation with cordless lift or wand control. Simple, reliable, no power required.',
    image: '/images/configurator/configurator-control-manual.png',
  },
  {
    id: 'automated',
    title: 'AUTOMATED MODE',
    description: 'Remote control operation. Raise, lower, and adjust with the press of a button. Battery or hardwired options.',
    image: '/images/configurator/configurator-control-motorised.png',
  },
  {
    id: 'smart',
    title: 'SMART MODE',
    description: 'Voice control, app scheduling, and home automation integration. Works with Alexa, Google Home, and Apple HomeKit.',
    image: '/motorized-shades-room.png',
  },
];

const DAILY_SCENES = [
  {
    time: 'MORNING',
    description: 'Shades rise automatically at sunrise. Natural light fills your space as you wake.',
    image: '/images/gallery/gallery-motorized-living.png',
  },
  {
    time: 'AFTERNOON',
    description: 'Solar shades lower automatically during peak sun. Heat blocked, view preserved.',
    image: '/images/gallery/gallery-solar-condo-overcast.png',
  },
  {
    time: 'EVENING',
    description: 'Blackout shades descend at sunset. Privacy and darkness on schedule.',
    image: '/images/gallery/gallery-motorized-condo-dusk.png',
  },
];

export default function Motorized() {
  useSEO({
    title: 'Motorized & Smart Shades | Automated Light | NA Blinds',
    description: 'Silent, intelligent window automation for modern South Florida homes. Remote control, voice activation, and smart home integration. Experience automated light.',
    canonicalUrl: 'https://www.nablinds.co/motorized'
  });

  return (
    <div className="bg-paper">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/motorized-shades-room.png')` }}
        >
          <div className="absolute inset-0 bg-ink/40" />
        </div>
        <div className="relative section-wide w-full py-20">
          <div className="max-w-3xl">
            <p className="label-micro text-paper/60 mb-6">Smart Collection</p>
            <h1 className="text-paper mb-6">
              <span className="block headline-oversized">AUTOMATED</span>
              <span className="block headline-oversized">LIGHT.</span>
            </h1>
            <p className="body-large text-paper/80 max-w-lg mb-10">
              Silent motors. Intelligent scheduling. Effortless daily transitions from morning to night.
            </p>
            <Link
              to="/build-your-project"
              className="btn-primary bg-paper text-ink hover:bg-sand-light"
            >
              Experience Motorized
            </Link>
          </div>
        </div>
      </section>

      {/* Control Modes */}
      <section className="py-24 md:py-32 section-wide">
        <p className="label-micro text-stone mb-10 text-center">Control Modes</p>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {MODES.map((mode) => (
            <div key={mode.id} className="text-center">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-sand-light">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-ink mb-3">{mode.title}</h3>
              <p className="text-stone text-sm leading-relaxed">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Transitions */}
      <section className="py-24 md:py-32 bg-sand-light">
        <div className="section-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label-micro text-stone mb-6">Daily Use</p>
            <h2 className="text-ink mb-6">LIGHT THAT MOVES WITH YOU.</h2>
            <p className="body-large text-stone">
              Schedule your shades to move automatically throughout the day. 
              Wake to natural light, stay cool at midday, sleep in complete darkness.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {DAILY_SCENES.map((scene) => (
              <div key={scene.time}>
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={scene.image}
                    alt={scene.time}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="label-micro text-ink mb-2">{scene.time}</h3>
                <p className="text-stone text-sm leading-relaxed">
                  {scene.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Integration */}
      <section className="py-24 md:py-32 section-wide">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-micro text-stone mb-6">Smart Integration</p>
            <h2 className="text-ink mb-6">WORKS WITH YOUR HOME.</h2>
            <p className="body-large text-stone mb-8">
              Our motorized systems integrate seamlessly with the platforms you already use. 
              Control with your voice, schedule through an app, or connect to your existing smart home system.
            </p>
            <ul className="space-y-4 text-stone">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-ink rounded-full mt-2" />
                <span>Amazon Alexa voice commands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-ink rounded-full mt-2" />
                <span>Google Home integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-ink rounded-full mt-2" />
                <span>Apple HomeKit compatibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-ink rounded-full mt-2" />
                <span>Lutron & Control4 systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-ink rounded-full mt-2" />
                <span>Sunrise/sunset scheduling</span>
              </li>
            </ul>
          </div>
          <div className="aspect-square bg-sand-light overflow-hidden">
            <img
              src="/images/gallery/gallery-motorized-bedroom.png"
              alt="Smart home integration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-ink">
        <div className="section-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="label-micro text-paper/40 mb-6">Benefits</p>
            <h2 className="headline-large text-paper mb-6">BEYOND CONVENIENCE.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-paper font-medium mb-3">Energy Savings</h3>
              <p className="text-paper/60 text-sm leading-relaxed">
                Automated solar shades reduce heat gain, lowering cooling costs in South Florida summers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-paper font-medium mb-3">UV Protection</h3>
              <p className="text-paper/60 text-sm leading-relaxed">
                Schedule shades to close during peak sun, protecting furniture and flooring from fading.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-paper font-medium mb-3">Security</h3>
              <p className="text-paper/60 text-sm leading-relaxed">
                Simulate occupancy while traveling. Shades move on schedule even when you're away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </div>
  );
}
