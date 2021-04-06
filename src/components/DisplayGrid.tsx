import * as React from "react";
import { GifDisplayData } from "./Dashboard";
import GifPanel from "./GifPanel";

export interface DisplayGridProps {
  gifInfo: GifDisplayData[];
}

const DisplayGrid: React.FC<DisplayGridProps> = ({ gifInfo }) => {
  return (
    <div className="w-80vw h-44vw grid grid-cols-20 grid-rows-11 border-2 border-solid border-blue-100 p-4">
      <div className="row-span-full col-start-1 col-span-11">
        <GifPanel
          gifDetails={gifInfo[0] || {id:'', title:''}}
        />
      </div>
      <div className="row-span-full col-start-12 col-span-1"></div>
      <div className="row-start-1 row-span-5 col-start-13 col-span-5">
        <GifPanel gifDetails={gifInfo[1] || {id:'', title:''}} />
      </div>
      <div className="row-start-6 row-span-1 col-start-13 col-span-5"></div>
      <div className="row-start-7 row-span-5 col-start-13 col-span-5">
        <GifPanel gifDetails={gifInfo[6] || {id:'', title:''}} />
      </div>
      <div className="row-span-full col-start-18 col-span-1"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel
          gifDetails={gifInfo[2] || {id:'', title:''}}
        />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={gifInfo[3] || {id:'', title:''}} />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={gifInfo[4] || {id:'', title:''}} />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={gifInfo[5] || {id:'', title:''}} />
      </div>
    </div>
  );
};

export default DisplayGrid;
