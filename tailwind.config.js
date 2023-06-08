const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: '#3098E8',
        black: '#262626',
        white: '#F5F5F5'
      }
    }
  },
  plugins: []
};
