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
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
