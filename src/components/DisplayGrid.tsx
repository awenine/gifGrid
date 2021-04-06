import * as React from "react";
import GifPanel from "./GifPanel";

export interface DisplayGridProps {}

const DisplayGrid: React.SFC<DisplayGridProps> = () => {
  return (
    <div id="grid-container" className="grid grid-cols-20 w-80 h-44">
      <div className="col-span-11 grid grid-rows-11 bg-pink-300">
        <GifPanel />
      </div>
      <div className="bg-green-300"/>
      <div className="col-span-5 grid grid-rows-11 bg-pink-300">
        <div className="row-start-1 row-end-5">
          <GifPanel />
        </div>
        <div className="row-start-5 row-end-6 bg-blue-300"/>
        <div className="row-span-5">
          <GifPanel />
        </div>
      </div>
      <div className="bg-green-300"/>
      <div className="col-span-2 grid grid-rows-11 bg-pink-300">
        <GifPanel />
        <div className="row-span-1 bg-blue-300"/>
        <GifPanel />
        <div className="row-span-1 bg-blue-300"/>
        <GifPanel />
        <div className="row-span-1 bg-blue-300"/>
        <GifPanel />
      </div>
    </div>
  );
};

export default DisplayGrid;
