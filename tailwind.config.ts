import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ember: '#b78a3a',
        ash: '#0b0b10',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        body: ['var(--font-inter)'],
      },
      backgroundImage: {
        phoenix:
          'radial-gradient(circle at top, rgba(183,138,58,0.3) 0%, rgba(11,11,16,1) 45%, rgba(7,7,12,1) 100%)',
      },
      boxShadow: {
        glow: '0 0 25px rgba(183, 138, 58, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
