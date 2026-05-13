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
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 1.2s ease-in-out infinite',
        grain: 'grain 8s steps(2,end) infinite',
      }
    },
  },
  plugins: [],
}

