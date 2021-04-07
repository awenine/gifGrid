import { GifRequestData } from "../types/types";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const REQUEST_LIMIT = 7;

export const getGifs = (searchTerm: string): Promise<GifRequestData> => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=${REQUEST_LIMIT}`
  )
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(`${err.message} while fetching gifs`);
    });
};
