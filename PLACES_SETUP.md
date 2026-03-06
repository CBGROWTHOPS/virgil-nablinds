# Google Places Address Autocomplete Setup

The `AddressAutocomplete` component uses the Google Places API to autofill address fields as users type.

## 1. Enable Places API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create one)
3. Open **APIs & Services → Library**
4. Search for **Places API** and enable it
5. Optionally enable **Maps JavaScript API** if you hit issues (Places often needs it)

## 2. Create an API Key

1. Go to **APIs & Services → Credentials**
2. Click **Create credentials → API key**
3. (Recommended) Click **Edit API key** and restrict it:
   - **Application restrictions**: HTTP referrers (e.g. `https://www.nablinds.co/*`, `http://localhost:*`)
   - **API restrictions**: Restrict to **Places API** (and Maps JavaScript API if enabled)

## 3. Add the Key to Your Project

Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit `.env` and set:

```
VITE_GOOGLE_PLACES_API_KEY=your_actual_api_key_here
```

The `.env` file is gitignored. Do not commit API keys.

## 4. Usage

The component is already wired into the Build Your Project form. To use it elsewhere:

```tsx
import { AddressAutocomplete } from '../components/AddressAutocomplete';

<AddressAutocomplete
  value={address}
  onChange={(value, place) => {
    setAddress(value);
    // place has: formattedAddress, streetNumber, locality, postalCode, lat, lng, etc.
  }}
  placeholder="Start typing your address..."
  countries={['us']}
  locationBias={{ lat: 26.3683, lng: -80.1289, radius: 80000 }}
/>
```

## Copy to Other Projects

Copy `src/components/AddressAutocomplete.tsx` and add `@types/google.maps` as a dev dependency. Ensure your build tool (Vite, Next.js, etc.) supports `VITE_*` or equivalent env vars for the API key.
