/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F1EA',
          50: '#FDFCF9',
          100: '#F5F1EA',
          200: '#EDE5D4',
          300: '#DDD0B8',
        },
        charcoal: {
          DEFAULT: '#0E0E0E',
          50: '#2A2A2A',
          100: '#1A1A1A',
          200: '#0E0E0E',
        },
        gold: {
          DEFAULT: '#C6A86B',
          light: '#D4BC8A',
          dark: '#A88A50',
        },
        forest: '#2C4A35',
        maroon: '#5C1A1A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      lineHeight: {
        editorial: '1.15',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
    },
  },
  plugins: [],
};
