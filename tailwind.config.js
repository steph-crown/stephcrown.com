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
        MSMediumItalic: ['MSMediumItalic', 'monospace'],
        MSXenonMediumItalic: ['MSXenonMediumItalic', 'monospace'],
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
          dark: '#181818',
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
        'fg/80': {
          dark: 'rgba(255, 255, 255, 0.80)',
          light: 'rgba(0, 0, 0, 0.80)',
        },
        'fg/70': {
          dark: 'rgba(255, 255, 255, 0.70)',
          light: 'rgba(0, 0, 0, 0.70)',
        },
        'fg/60': {
          dark: 'rgba(255, 255, 255, 0.60)',
          light: 'rgba(0, 0, 0, 0.60)',
        },
        'fg/50': {
          dark: 'rgba(255, 255, 255, 0.50)',
          light: 'rgba(0, 0, 0, 0.50)',
        },
        'fg/40': {
          dark: 'rgba(255, 255, 255, 0.40)',
          light: 'rgba(0, 0, 0, 0.40)',
        },
        'fg/20': {
          dark: 'rgba(255, 255, 255, 0.20)',
          light: 'rgba(0, 0, 0, 0.20)',
        },
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [],
}
