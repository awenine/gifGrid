# gifGrid

A search app for displaying themed GIFs (from the GIPHY API) in a grid layout.

A deployed version of this app is available here: [gifGrid](https://vigilant-wozniak-6713fc.netlify.app/)

<img alt="gifGrid screenshot" title="the app showing 'cat' GIFs 🐈"  src="./public/gifGrid-screenshot-cats.png" width="60%" style="align=center border=2px solid blue">

## Technology

This project makes use of:

- [Create React App](https://github.com/facebook/create-react-app)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [React Tooltip](https://www.npmjs.com/package/react-tooltip)
- [React Testing Library](https://testing-library.com/)

## Set up

After cloning the repository, run: `npm install`
To use the API, you will need to apply for a free API key from GIPHY (details of how to do so are available [here](https://developers.giphy.com/docs/api#quick-start-guide)).
After you have this, create a `.env` file and input the API key.
The `.env` file's contents should be as follows:

    REACT_APP_GIPHY_API_KEY="API key here"

An `example.env` file is included for reference.

## Notes

- The gif frames initially show a default loading GIF, and return to this when no GIFs are found.
- GIFs are cropped to a square regardless of their original proportions.
- The 'rotate' button moves the order of the fetched GIFs, allowing them all to be seen at differing sizes.
- Hovering over a gif shows its title and user (if available).

## TODO & Further Features

- Allow pagination / more variation of GIFs from the same search term (currently limited to the top 7)
- More information displayed via the tooltips
- Responsively switch the grid layout from landscape to portrait (ie largest at top, medium on second row, small on third row) using media queries.
