/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif:  ['"EB Garamond"', '"Garamond"', 'Georgia', 'serif'],
        italic: ['"EB Garamond"', 'Georgia', 'serif'],
        sans:   ['"Lato"', 'sans-serif'],
        mono:   ['"Courier Prime"', 'Courier', 'monospace'],
      },
      colors: {
        parchment: {
          50:  '#FDFAF4',
          100: '#F7F0DC',
          200: '#EDE0C4',
          300: '#DEC9A0',
          400: '#C8A97A',
          500: '#A8845A',
          600: '#7A5C38',
          700: '#5C3F1E',
          800: '#3E2710',
          900: '#1E1008',
        },
        ink: {
          light: '#4A3728',
          DEFAULT: '#2C1F14',
          dark:  '#150D07',
        },
        sepia: {
          light: '#C4A882',
          DEFAULT: '#8B6340',
          dark:  '#5C3F20',
        },
      },
      backgroundImage: {
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'float-gentle': {
          '0%,100%': { transform: 'translateY(0px) rotate(-0.5deg)' },
          '50%':     { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        'fade-ink': {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '0.9' },
        },
        'page-turn': {
          '0%':   { transform: 'rotateY(0deg)',   opacity: 1 },
          '100%': { transform: 'rotateY(-8deg)',  opacity: 0 },
        },
        'ink-write': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'dust': {
          '0%':   { transform: 'translateY(0)   rotate(0deg)',   opacity: 0 },
          '10%':  { opacity: 0.6 },
          '90%':  { opacity: 0.3 },
          '100%': { transform: 'translateY(-80vh) rotate(180deg)', opacity: 0 },
        },
        'candle': {
          '0%,100%': { opacity: 0.85, transform: 'scaleY(1)' },
          '50%':     { opacity: 1,    transform: 'scaleY(1.05)' },
        },
      },
      animation: {
        'float-gentle': 'float-gentle 5s ease-in-out infinite',
        'fade-ink':     'fade-ink 4s ease-in-out infinite',
        'ink-write':    'ink-write 4s linear infinite',
        'dust':         'dust linear infinite',
        'candle':       'candle 2s ease-in-out infinite',
      },
      boxShadow: {
        'paper': '0 1px 3px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.18), inset 0 0 60px rgba(200,169,122,0.08)',
        'paper-hover': '0 4px 24px rgba(0,0,0,0.22), 0 12px 40px rgba(0,0,0,0.14)',
        'paper-final': '0 2px 8px rgba(0,0,0,0.2), 0 8px 32px rgba(92,63,32,0.3), inset 0 0 80px rgba(200,169,122,0.12)',
      },
      screens: { xs: '375px' },
    },
  },
  plugins: [],
}
