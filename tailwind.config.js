const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        'rose': {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        'fresh': {
          // https://www.schemecolor.com/cool-and-fresh.php
          100: '#D6FEC1',
          200: '#AFFFB5',
          300: '#EFFFFB',
          400: '#C4FFFF',
          500: '#AFE8FF',
          600: '#ACFFD4',
        }
      },
      'fontFamily': {
        noto: ['Noto Sans JP']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
