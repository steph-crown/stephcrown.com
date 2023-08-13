/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg/100': {
          dark: '#161616',
          light: '#FFFFFF',
        },
        'fg/100': {
          dark: '#FFFFFF',
          light: '#161616',
        },
        'fg/50': {
          dark: 'rgba(255, 255, 255, 0.50)',
          light: 'rgba(0, 0, 0, 0.50)',
        },
      },
    },
  },
  plugins: [],
}
