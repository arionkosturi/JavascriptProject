/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./src/*.{html,js}",
    "./src/components/*.{html,js}",
    "./src/*/*.{html,js}"
  ],  theme: {
    extend: {
      backgroundImage: {
        'live': "url('assets/img/live.jpg')",
      },
    },
  },
  plugins: [],

  darkMode:['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }',
    '&:is(.dark *)',
  ]], 
} 

