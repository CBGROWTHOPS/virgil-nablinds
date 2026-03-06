import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    google?: typeof google;
    initGooglePlaces?: () => void;
  }
}

export interface PlaceResult {
  formattedAddress: string;
  streetNumber?: string;
  route?: string;
  locality?: string;
  administrativeArea?: string;
  postalCode?: string;
  country?: string;
  lat?: number;
  lng?: number;
}

interface AddressAutocompleteProps {
  value: string;
  onChange: (value: string, place?: PlaceResult) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
  /** Restrict to countries (e.g. ['us']) */
  countries?: string[];
  /** Bias toward a location (lat, lng, radius in meters) */
  locationBias?: { lat: number; lng: number; radius?: number };
}

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

function loadGooglePlacesScript(): Promise<void> {
  if (window.google?.maps?.places) return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (window.google?.maps?.places) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Places script'));
    document.head.appendChild(script);
  });
}

export function AddressAutocomplete({
  value,
  onChange,
  placeholder = 'Start typing your address...',
  className = '',
  id = 'address-autocomplete',
  required = false,
  countries = ['us'],
  locationBias,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_KEY) {
      setError('VITE_GOOGLE_PLACES_API_KEY is not set');
      return;
    }

    let mounted = true;

    loadGooglePlacesScript()
      .then(() => {
        if (!mounted || !inputRef.current || !window.google?.maps?.places) return;

        const options: google.maps.places.AutocompleteOptions = {
          types: ['address'],
          componentRestrictions: { country: countries },
          fields: ['address_components', 'formatted_address', 'geometry'],
        };

        if (locationBias) {
          const bounds = new google.maps.Circle({
            center: { lat: locationBias.lat, lng: locationBias.lng },
            radius: locationBias.radius ?? 50000,
          }).getBounds();
          if (bounds) options.bounds = bounds;
        }

        autocompleteRef.current = new google.maps.places.Autocomplete(
          inputRef.current,
          options
        );

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current?.getPlace();
          if (!place?.address_components) return;

          const formattedAddress = place.formatted_address ?? '';
          const components = place.address_components;
          const get = (type: string) =>
            components.find((c) => c.types.includes(type))?.long_name ?? '';
          const getShort = (type: string) =>
            components.find((c) => c.types.includes(type))?.short_name ?? '';

          const result: PlaceResult = {
            formattedAddress,
            streetNumber: get('street_number'),
            route: get('route'),
            locality: get('locality') || get('sublocality'),
            administrativeArea: getShort('administrative_area_level_1'),
            postalCode: get('postal_code'),
            country: get('country_code'),
          };

          if (place.geometry?.location) {
            result.lat = place.geometry.location.lat();
            result.lng = place.geometry.location.lng();
          }

          onChange(formattedAddress, result);
        });

      })
      .catch((e) => {
        setError(e instanceof Error ? e.message : 'Failed to load Places');
      });

    return () => {
      mounted = false;
      autocompleteRef.current = null;
    };
  }, [countries, locationBias?.lat, locationBias?.lng, locationBias?.radius]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className={className}
        aria-invalid={!!error}
      />
      {error && (
        <p className="mt-1 text-sm text-amber-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
