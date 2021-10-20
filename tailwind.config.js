module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'logoBG1': "url('/src/img/jaller-logo.svg')" ,
        'logoBG2': "url('/src/img/jaller-logo2.svg')" ,
        'logoBG3': "url('/src/img/jaller-logo3.svg')" ,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
