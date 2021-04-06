module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // 18 column grid for gif display
        '18': 'repeat(18, minmax(0, 1fr))',
        // 20 column grid for gif display
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridRow: {
        'span-11': 'span 11 / span 11',
      },
      gridTemplateRows: {
        // 11 row grid
       '11': 'repeat(11, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
