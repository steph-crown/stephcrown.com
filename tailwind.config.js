/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        MSMedium: ['MSMedium', 'sans-serif'],
        MSMediumWide: ['MSMediumWide', 'sans-serif'],
        MSMediumRegular: ['MSMediumRegular', 'sans-serif'],
      },
      colors: {
        'bg/5': {
          dark: 'rgba(255, 255, 255, 0.05)',
          light: 'rgba(0, 0, 0, 0.05)',
        },
        'bg/100': {
          dark: '#161616',
          light: '#FFFFFF',
        },
        'navbg/100': {
          dark: '#1C1C1C',
          light: '#F7F7F5',
        },
        navborder: {
          dark: '#282828',
          light: '#E6E6E3',
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
