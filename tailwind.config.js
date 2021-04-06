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
      gridColumnStart: {
       '13': '13',
       '14': '14',
       '15': '15',
       '16': '16',
       '17': '17',
       '18': '18',
       '19': '19',
      },
      gridRow: {
        'span-11': 'span 11 / span 11',
      },
      gridTemplateRows: {
        // 11 row grid
       '11': 'repeat(11, minmax(0, 1fr))',
      },
      gridRowStart: {
       '8': '8',
       '9': '9',
       '10': '10',
       '11': '11',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
