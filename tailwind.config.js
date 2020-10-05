module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  fallback: 'index.html',
  theme: {
    extend: {
      colors: {
        'ocean': {
          50: '#F3F5FA',
          100: '#E6ECF5',
          200: '#C2CFE6',
          300: '#9DB1D7',
          400: '#5377BA',
          500: '#093D9C',
          600: '#08378C',
          700: '#05255E',
          800: '#041B46',
          900: '#03122F',
          },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
