// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'roboto':['Roboto','sans-serif'],
        'work-sans':['Work Sans','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}