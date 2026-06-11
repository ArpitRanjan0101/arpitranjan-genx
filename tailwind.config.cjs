/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Inter',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ],
        caveat: ['Caveat', 'cursive'],
        signature: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        ink: {
          950: '#05070d'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 18px 60px rgba(0,0,0,0.55)',
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(60% 60% at 50% 30%, rgba(99,102,241,0.22) 0%, rgba(0,0,0,0) 60%)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(60%)' },
        },
        grain: {
          '0%': { transform: 'translate(0,0)' },
          '25%': { transform: 'translate(-2%,2%)' },
          '50%': { transform: 'translate(-1%,-1%)' },
          '75%': { transform: 'translate(2%,1%)' },
          '100%': { transform: 'translate(0,0)' },
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(255, 255, 255, 0), 0 0 30px rgba(255, 255, 255, 0.3)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 1.2s ease-in-out infinite',
        grain: 'grain 8s steps(2,end) infinite',
        'slide-in-up': 'slide-in-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'fade-scale-in': 'fade-scale-in 0.5s ease-out',
      }
    },
  },
  plugins: [],
}
