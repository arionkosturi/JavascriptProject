/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],  theme: {
    extend: {
      backgroundImage: {
        'live': "url('assets/img/live.jpg')",
      },
    },
  },
  plugins: [],

  darkMode: 'class', 
}

