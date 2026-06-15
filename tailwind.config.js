/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        sunset: {
          rose:    '#F4A0B0',
          pink:    '#E8688A',
          peach:   '#F9C784',
          orange:  '#F4845F',
          violet:  '#9B72CF',
          indigo:  '#6B4FA0',
          deep:    '#3D2B6E',
          night:   '#1A1035',
        }
      },
      keyframes: {
        'float': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
        'petal-fall': {
          '0%':   { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'heartbeat': {
          '0%,100%': { transform: 'scale(1)' },
          '14%':     { transform: 'scale(1.15)' },
          '28%':     { transform: 'scale(1)' },
          '42%':     { transform: 'scale(1.08)' },
          '56%':     { transform: 'scale(1)' },
        },
        'glow': {
          '0%,100%': { boxShadow: '0 0 20px rgba(244,160,176,0.3)' },
          '50%':     { boxShadow: '0 0 60px rgba(244,160,176,0.8), 0 0 100px rgba(155,114,207,0.4)' },
        }
      },
      animation: {
        'float':      'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'petal-fall': 'petal-fall linear infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'heartbeat':  'heartbeat 1.5s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
