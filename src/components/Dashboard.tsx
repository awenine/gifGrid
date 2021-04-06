import { CLIEngine } from 'eslint';
import React, { useState } from 'react';
import { getGifs } from '../services/APIClient';
import { GifRequestData } from '../types/types';
import DisplayGrid from './DisplayGrid';
import Form from './Form';


export interface DashboardProps {}

export interface GifDisplayData {
  id: string;
  title: string;
}
 
const Dashboard: React.FC<DashboardProps> = () => {
  const [test, setTest] = useState("");
  const [gifInfo, setGifInfo] = useState<GifDisplayData[]>([]);

  function handleSearch(input:string): void {
    setTest(input);
    loadGifs(input)
  }

  function loadGifs(searchTerm:string) {
    getGifs(searchTerm)
      .then((fetchedGifs: GifRequestData) => {
        console.log('in loadGifs:',fetchedGifs)
        setGifInfo(fetchedGifs.data.map((gifObject) => (
          {
            id: gifObject.id,
            title: gifObject.title,
          }
        )))
      })
  }

  return ( 
    <div className="flex flex-col items-center">
      <Form handleSearch={handleSearch} />
      <DisplayGrid gifInfo={gifInfo}/>
      {gifInfo.length ? `Here are some gifs tagged with "${test}"` : `Sorry, couldn't find anything... Try another search!`}
    </div>
   );
}
 
export default Dashboard;