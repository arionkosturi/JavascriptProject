/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./src/*.{html,js}",
    "./src/*/*.{html,js}"
  ],  theme: {
    extend: {
      backgroundImage: {
        'live': "url('assets/img/live.jpg')",
      },
    },
  },
  plugins: [],

  darkMode: 'class', 
}

