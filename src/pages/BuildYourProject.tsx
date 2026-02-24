import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { submitConfiguratorToWebhook } from '../utils/configuratorWebhook';

type PropertyType = 'high-rise' | 'single-family' | 'townhouse' | 'other';
type LightPriority = 'privacy' | 'heat-control' | 'ambiance' | 'darkness' | 'not-sure';
type WindowCount = '1-3' | '4-8' | '9-15' | '16+';
type HasMeasurements = 'yes' | 'no' | 'not-yet';
type ControlMode = 'manual' | 'motorized' | 'smart' | 'not-sure';

interface FormState {
  step: number;
  propertyType: PropertyType | '';
  lightPriority: LightPriority | '';
  windowCount: WindowCount | '';
  hasMeasurements: HasMeasurements | '';
  controlMode: ControlMode | '';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

const PROPERTY_TYPES = [
  { id: 'high-rise', label: 'High-Rise Condo', description: 'Apartment or condo building' },
  { id: 'single-family', label: 'Single-Family Home', description: 'Standalone residence' },
  { id: 'townhouse', label: 'Townhouse', description: 'Multi-level attached home' },
  { id: 'other', label: 'Other', description: 'Commercial or unique property' },
];

const LIGHT_PRIORITIES = [
  { id: 'privacy', label: 'Privacy', description: 'Control visibility from outside' },
  { id: 'heat-control', label: 'Heat Control', description: 'Reduce heat and glare' },
  { id: 'ambiance', label: 'Ambiance', description: 'Soften and filter light' },
  { id: 'darkness', label: 'Complete Darkness', description: 'Full blackout capability' },
  { id: 'not-sure', label: 'Not Sure Yet', description: 'Need guidance' },
];

const WINDOW_COUNTS = [
  { id: '1-3', label: '1–3 Windows' },
  { id: '4-8', label: '4–8 Windows' },
  { id: '9-15', label: '9–15 Windows' },
  { id: '16+', label: '16+ Windows' },
];

const MEASUREMENTS_OPTIONS = [
  { id: 'yes', label: 'Yes, I have measurements', description: 'I\'ve measured my windows' },
  { id: 'no', label: 'No, I\'d like you to measure', description: 'Schedule a professional measure' },
  { id: 'not-yet', label: 'Not yet', description: 'I\'ll get them before we finalize' },
];

const CONTROL_MODES = [
  { id: 'manual', label: 'Manual', description: 'Cordless lift or wand' },
  { id: 'motorized', label: 'Motorized', description: 'Remote control operation' },
  { id: 'smart', label: 'Smart Home', description: 'App and voice control' },
  { id: 'not-sure', label: 'Not Sure', description: 'Discuss during consultation' },
];

export default function BuildYourProject() {
  const navigate = useNavigate();
  const [state, setState] = useState<FormState>({
    step: 1,
    propertyType: '',
    lightPriority: '',
    windowCount: '',
    hasMeasurements: '',
    controlMode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: 'Engineer Your Light | Start Your Project | NA Blinds',
    description: 'Begin your window treatment project. Tell us about your space and how you want to control light. Free consultation for South Florida homes.',
    canonicalUrl: 'https://www.nablinds.co/build-your-project',
  });

  const totalSteps = 6;

  const updateState = (updates: Partial<FormState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => {
    if (state.step < totalSteps) {
      updateState({ step: state.step + 1 });
    }
  };

  const goBack = () => {
    if (state.step > 1) {
      updateState({ step: state.step - 1 });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const measurementsNote = state.hasMeasurements
      ? `Measurements: ${state.hasMeasurements === 'yes' ? 'Customer has measurements' : state.hasMeasurements === 'no' ? 'Customer would like us to measure' : 'Not yet'}.`
      : '';
    const additionalNotes = [measurementsNote, state.notes].filter(Boolean).join(' ').trim() || undefined;

    const success = await submitConfiguratorToWebhook({
      projectScope: state.propertyType,
      windowCountRange: state.windowCount,
      productVariation: 'not-sure',
      groups: [],
      productCategory: '',
      productType: state.lightPriority,
      colour: '',
      controlType: state.controlMode,
      knowsDimensions: state.hasMeasurements === 'yes',
      firstName: state.firstName,
      lastName: state.lastName,
      mobile: state.phone,
      email: state.email,
      suburb: state.address,
      additionalNotes,
    });

    if (success) {
      navigate(`/thank-you-consultation?email=${encodeURIComponent(state.email)}&name=${encodeURIComponent(state.firstName)}`);
    } else {
      alert('Something went wrong. Please try again or call us at 954-629-1373.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-block mb-8">
            <span className="font-serif text-xl text-ink">NA Blinds</span>
          </Link>
          <p className="label-micro text-stone mb-4">Step {state.step} of {totalSteps}</p>
          <div className="flex gap-2 mb-8">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1 ${i < state.step ? 'bg-ink' : 'bg-sand-light'}`}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Property Type */}
        {state.step === 1 && (
          <div className="animate-fade-in">
            <h1 className="headline-large text-ink mb-4">ENGINEER YOUR LIGHT.</h1>
            <p className="body-large text-stone mb-10">What type of property is this?</p>
            <div className="space-y-3">
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    updateState({ propertyType: type.id as PropertyType });
                    setTimeout(goNext, 200);
                  }}
                  className={`w-full p-5 text-left border transition-all ${
                    state.propertyType === type.id
                      ? 'border-ink bg-sand-light'
                      : 'border-sand-light hover:border-stone'
                  }`}
                >
                  <span className="block font-medium text-ink">{type.label}</span>
                  <span className="block text-stone text-sm mt-1">{type.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Light Priority */}
        {state.step === 2 && (
          <div className="animate-fade-in">
            <h2 className="headline-large text-ink mb-4">LIGHT PRIORITY.</h2>
            <p className="body-large text-stone mb-10">What's most important for your space?</p>
            <div className="space-y-3">
              {LIGHT_PRIORITIES.map((priority) => (
                <button
                  key={priority.id}
                  type="button"
                  onClick={() => {
                    updateState({ lightPriority: priority.id as LightPriority });
                    setTimeout(goNext, 200);
                  }}
                  className={`w-full p-5 text-left border transition-all ${
                    state.lightPriority === priority.id
                      ? 'border-ink bg-sand-light'
                      : 'border-sand-light hover:border-stone'
                  }`}
                >
                  <span className="block font-medium text-ink">{priority.label}</span>
                  <span className="block text-stone text-sm mt-1">{priority.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Window Count */}
        {state.step === 3 && (
          <div className="animate-fade-in">
            <h2 className="headline-large text-ink mb-4">WINDOW COUNT.</h2>
            <p className="body-large text-stone mb-10">How many windows need treatment?</p>
            <div className="grid grid-cols-2 gap-3">
              {WINDOW_COUNTS.map((count) => (
                <button
                  key={count.id}
                  type="button"
                  onClick={() => {
                    updateState({ windowCount: count.id as WindowCount });
                    setTimeout(goNext, 200);
                  }}
                  className={`p-5 text-center border transition-all ${
                    state.windowCount === count.id
                      ? 'border-ink bg-sand-light'
                      : 'border-sand-light hover:border-stone'
                  }`}
                >
                  <span className="block font-medium text-ink">{count.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Measurements */}
        {state.step === 4 && (
          <div className="animate-fade-in">
            <h2 className="headline-large text-ink mb-4">MEASUREMENTS.</h2>
            <p className="body-large text-stone mb-10">Do you have window measurements?</p>
            <div className="space-y-3">
              {MEASUREMENTS_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    updateState({ hasMeasurements: option.id as HasMeasurements });
                    setTimeout(goNext, 200);
                  }}
                  className={`w-full p-5 text-left border transition-all ${
                    state.hasMeasurements === option.id
                      ? 'border-ink bg-sand-light'
                      : 'border-sand-light hover:border-stone'
                  }`}
                >
                  <span className="block font-medium text-ink">{option.label}</span>
                  <span className="block text-stone text-sm mt-1">{option.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Control Mode */}
        {state.step === 5 && (
          <div className="animate-fade-in">
            <h2 className="headline-large text-ink mb-4">CONTROL MODE.</h2>
            <p className="body-large text-stone mb-10">How would you like to operate your shades?</p>
            <div className="space-y-3">
              {CONTROL_MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => {
                    updateState({ controlMode: mode.id as ControlMode });
                    setTimeout(goNext, 200);
                  }}
                  className={`w-full p-5 text-left border transition-all ${
                    state.controlMode === mode.id
                      ? 'border-ink bg-sand-light'
                      : 'border-sand-light hover:border-stone'
                  }`}
                >
                  <span className="block font-medium text-ink">{mode.label}</span>
                  <span className="block text-stone text-sm mt-1">{mode.description}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Contact */}
        {state.step === 6 && (
          <div className="animate-fade-in">
            <h2 className="headline-large text-ink mb-4">ALMOST THERE.</h2>
            <p className="body-large text-stone mb-10">
              Tell us how to reach you. We'll be in touch within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block label-micro text-stone mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={state.firstName}
                    onChange={(e) => updateState({ firstName: e.target.value })}
                    className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent"
                  />
                </div>
                <div>
                  <label className="block label-micro text-stone mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={state.lastName}
                    onChange={(e) => updateState({ lastName: e.target.value })}
                    className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block label-micro text-stone mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={state.email}
                  onChange={(e) => updateState({ email: e.target.value })}
                  className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent"
                />
              </div>
              <div>
                <label className="block label-micro text-stone mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={state.phone}
                  onChange={(e) => updateState({ phone: e.target.value })}
                  placeholder="954-XXX-XXXX"
                  className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent"
                />
              </div>
              <div>
                <label className="block label-micro text-stone mb-2">Property Address or Area</label>
                <input
                  type="text"
                  required
                  value={state.address}
                  onChange={(e) => updateState({ address: e.target.value })}
                  placeholder="e.g., Brickell, Miami or full address"
                  className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent"
                />
              </div>
              <div>
                <label className="block label-micro text-stone mb-2">Additional Notes (Optional)</label>
                <textarea
                  value={state.notes}
                  onChange={(e) => updateState({ notes: e.target.value })}
                  rows={3}
                  placeholder="Tell us more about your project..."
                  className="w-full p-4 border border-sand-light focus:border-ink focus:outline-none bg-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-6"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Project'}
              </button>
            </form>
          </div>
        )}

        {/* Navigation */}
        {state.step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="mt-10 inline-flex items-center gap-2 text-stone hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
      </div>
    </div>
  );
}
