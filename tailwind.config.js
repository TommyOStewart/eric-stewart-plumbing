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
          DEFAULT: '#B45309',
          hover: '#92400E',
          light: '#D97706'
        },
        steel: {
          DEFAULT: '#4b5563',
          dark: '#374151',
          light: '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'serif']
      },
      boxShadow: {
        'rugged': '0 4px 6px -1px rgba(0,0,0,0.3), 0 10px 20px -5px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.05)',
        'rugged-lg': '0 10px 25px -5px rgba(0,0,0,0.35), 0 20px 40px -10px rgba(0,0,0,0.25)',
        'inset-groove': 'inset 0 2px 4px 0 rgba(0,0,0,0.25)'
      },
      keyframes: {
        drip: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateY(18px)', opacity: '0' }
        },
        splash: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        wrenchTighten: {
          '0%': { transform: 'rotate(-35deg) translateX(6px)' },
          '35%': { transform: 'rotate(-35deg) translateX(6px)' },
          '55%': { transform: 'rotate(10deg) translateX(0)' },
          '70%': { transform: 'rotate(-5deg) translateX(0)' },
          '85%': { transform: 'rotate(3deg) translateX(0)' },
          '100%': { transform: 'rotate(0deg) translateX(0)' }
        },
        steamPuff: {
          '0%': { transform: 'translateY(0) scale(0.5)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-20px) scale(1.3)', opacity: '0' }
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
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        drip: 'drip 3.2s ease-in infinite',
        splash: 'splash 3.2s ease-out infinite',
        wrenchTighten: 'wrenchTighten 3.2s ease-in-out infinite',
        steamPuff: 'steamPuff 3.2s ease-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out',
        shine: 'shine 1.2s ease-in-out',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        floatSlow: 'floatSlow 4s ease-in-out infinite'
      },
      backgroundImage: {
        'brushed-steel': 'repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)',
        'diagonal-hatch': 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 10px)',
        'blueprint-grid': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-sm': '24px 24px'
      }
    },
  },
  plugins: [],
}
