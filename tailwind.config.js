/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        '750px': {'min': '750px', 'max': '762px'},
        '780px': {'min': '762px'},
        '420px': {'min': '420px','max': '1024px'}
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        Heebo: ['Heebo', 'sans-serif'],
        Rubik:['Rubik Doodle Shadow','sans-serif'],
        Preahvihear:['Preahvihear','sans-serif']
      }
    },
  },
  plugins: [],
}

