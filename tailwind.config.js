/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#B91C1C',
          hover: '#991B1B',
          light: '#DC2626'
        },
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#0f2744',
          light: '#2d4a6f'
        },
        rust: {
          DEFAULT: '#C2660D',
          hover: '#9A4E08',
          light: '#EA8A22'
        },
        steel: {
          DEFAULT: '#4b5563',
          dark: '#374151',
          light: '#9ca3af'
        },
        // Dark industrial theme tokens
        charcoal: {
          DEFAULT: '#121417',
          light: '#1a1d22',
          lighter: '#23272e',
          border: '#2f343c'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'serif']
      },
      boxShadow: {
        'rugged': '0 4px 6px -1px rgba(0,0,0,0.4), 0 10px 20px -5px rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.04)',
        'rugged-lg': '0 10px 30px -5px rgba(0,0,0,0.5), 0 25px 50px -12px rgba(0,0,0,0.4)',
        'inset-groove': 'inset 0 2px 4px 0 rgba(0,0,0,0.3)',
        'glow-rust': '0 0 0 1px rgba(194,102,13,0.35), 0 8px 24px -4px rgba(194,102,13,0.25)'
      },
      keyframes: {
        dripOnce: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '8%': { opacity: '1' },
          '92%': { opacity: '1' },
          '100%': { transform: 'translateY(26px)', opacity: '0' }
        },
        splashOnce: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '88%': { opacity: '0' },
          '92%': { transform: 'scale(0.3)', opacity: '0.9' },
          '100%': { transform: 'scale(1.8)', opacity: '0' }
        },
        valveClose: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' }
        },
        ratchetTighten: {
          '0%':   { transform: 'rotate(0deg)' },
          '18%':  { transform: 'rotate(24deg)' },
          '30%':  { transform: 'rotate(6deg)' },
          '48%':  { transform: 'rotate(6deg)' },
          '66%':  { transform: 'rotate(28deg)' },
          '78%':  { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },

        sparkPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(0)', opacity: '0' },
          '88%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(0.4)', opacity: '0' }
        },


        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg)' },
          '75%': { transform: 'rotate(8deg)' }
        },
        shine: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(250%) skewX(-20deg)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        dripOnce: 'dripOnce 3.2s ease-in 1',
        splashOnce: 'splashOnce 3.2s ease-out 1',
        valveClose: 'valveClose 2.6s cubic-bezier(0.65, 0, 0.35, 1) 1',
        ratchetTighten: 'ratchetTighten 3.2s cubic-bezier(0.45, 0, 0.4, 1) 1',
        sparkPop: 'sparkPop 3.2s ease-out 1',

        wiggle: 'wiggle 0.5s ease-in-out',
        shine: 'shine 1.2s ease-in-out',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        floatSlow: 'floatSlow 4s ease-in-out infinite'
      },

      backgroundImage: {
        'brushed-steel': 'repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)',
        'diagonal-hatch': 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)',
        'blueprint-grid': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-sm': '24px 24px'
      }
    },
  },
  plugins: [],
}
