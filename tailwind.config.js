module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        navbar: ['Pacifico'],
        body: ['Raleway']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
