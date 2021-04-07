import React, { useState } from "react";
import { getGifs } from "../services/APIClient";
import { GifRequestData } from "../types/types";
import { arrayShuffleRight } from "../utilities/arrayShuffle";
import DisplayGrid from "./DisplayGrid";
import Form from "./Form";

export interface DashboardProps {}

export interface GifDisplayData {
  id: string;
  title: string;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifInfo, setGifInfo] = useState<GifDisplayData[]>([]);

  function handleSearch(input: string): void {
    setSearchTerm(input);
    loadGifs(input);
  }

  function rotateButtonHandler(): void {
    setGifInfo(arrayShuffleRight(gifInfo));
  }

  function loadGifs(searchTerm: string) {
    getGifs(searchTerm).then((fetchedGifs: GifRequestData) => {
      setGifInfo(
        fetchedGifs.data.map((gifObject) => ({
          id: gifObject.id,
          title: gifObject.title,
        }))
      );
    });
  }

  return (
    <div className="flex flex-col items-center">
      <Form handleSearch={handleSearch} />
      <DisplayGrid gifInfo={gifInfo} />
      <button
        onClick={rotateButtonHandler}
        className="bg-yellow-400 p-2 border-1 rounded-sm m-3 w-44 transition duration-100 ease-in-out hover:bg-yellow-200"
      >
        Rotate GIFs
      </button>
      {gifInfo.length
        ? `Here are some gifs tagged with "${searchTerm}"`
        : `Sorry, couldn't find anything... Try another search!`}
    </div>
  );
};

export default Dashboard;
