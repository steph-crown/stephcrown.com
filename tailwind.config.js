/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        MSMedium: ['MSMedium', 'sans-serif'],
        MSMediumWide: ['MSMediumWide', 'sans-serif'],
        MSMediumRegular: ['MSMediumRegular', 'sans-serif'],
        MSMediumItalic: ['MSMediumItalic', 'monospace'],
        MSXenonMediumItalic: ['MSXenonMediumItalic', 'monospace'],
      },
      colors: {
        portfolio: {
          bg: '#151515',
          card: '#1B1B1D',
          fg: '#FFFFFF',
          muted: '#777778',
        },
        'bg/5': {
          dark: 'rgba(255, 255, 255, 0.05)',
          light: 'rgba(0, 0, 0, 0.05)',
        },
        'bg/100': {
          dark: '#1a1a1a',
          light: '#fafaf8',
        },
        'bg/container': {
          dark: '#2a2a2a',
          light: '#ffffff',
        },
        'navbg/100': {
          dark: '#1f1f1f',
          light: '#ffffff',
        },
        navborder: {
          dark: '#3a3a3a',
          light: '#ddd',
        },
        'fg/100': {
          dark: '#ffffff',
          light: '#333333',
        },
        'fg/80': {
          dark: 'rgba(255, 255, 255, 0.80)',
          light: 'rgba(51, 51, 51, 0.80)',
        },
        'fg/70': {
          dark: 'rgba(255, 255, 255, 0.70)',
          light: 'rgba(51, 51, 51, 0.70)',
        },
        'fg/60': {
          dark: 'rgba(255, 255, 255, 0.60)',
          light: '#666666',
        },
        'fg/50': {
          dark: 'rgba(255, 255, 255, 0.50)',
          light: 'rgba(51, 51, 51, 0.50)',
        },
        'fg/40': {
          dark: 'rgba(255, 255, 255, 0.40)',
          light: 'rgba(51, 51, 51, 0.40)',
        },
        'fg/20': {
          dark: 'rgba(255, 255, 255, 0.20)',
          light: 'rgba(51, 51, 51, 0.20)',
        },
      },
      screens: {
        xs: '300px',
      },
      lineHeight: {
        1.8: '1.8',
      },
      letterSpacing: {
        0.5: '0.5px',
        0.3: '0.3px',
      },
      boxShadow: {
        clean: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
