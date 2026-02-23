/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'paper': '#F5F3EF',
        'ink': '#1A1A1A',
        'sand': '#C9B99A',
        'stone': '#8A8A8A',
        'sand-light': '#E8E2D9',
        'ink-light': '#3A3A3A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'micro': '0.2em',
        'wide-custom': '0.1em',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '800px',
      },
      spacing: {
        'gutter': '8%',
        'gutter-lg': '12%',
      },
    },
  },
  plugins: [],
};
