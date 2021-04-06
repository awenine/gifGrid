import * as React from "react";
import GifPanel from "./GifPanel";

export interface DisplayGridProps {}

const DisplayGrid: React.FC<DisplayGridProps> = () => {
  return (
    <div className="grid grid-cols-20 grid-rows-11 w-80 h-44">
      <div className="bg-red-200 row-span-full col-start-1 col-span-11">
        <GifPanel />
      </div>
      <div className="bg-blue-200 row-span-full col-start-11 col-span-1"></div>
      <div className="bg-red-200 row-start-1 row-span-5 col-start-12 col-span-5">
        <GifPanel />
      </div>
      <div className="bg-blue-200 row-start-6 row-span-1 col-start-12 col-span-5"></div>
      <div className="bg-red-200 row-start-7 row-span-5 col-start-12 col-span-5">
        <GifPanel />
      </div>
      <div className="bg-blue-200 row-span-full col-start-17 col-span-1"></div>
      <div className="bg-red-200 row-span-2 col-span-2">
        <GifPanel />
      </div>
      <div className="bg-blue-200 col-span-2"></div>
      <div className="bg-red-200 row-span-2 col-span-2">
        <GifPanel />
      </div>
      <div className="bg-blue-200 col-span-2"></div>
      <div className="bg-red-200 row-span-2 col-span-2">
        <GifPanel />
      </div>
      <div className="bg-blue-200 col-span-2"></div>
      <div className="bg-red-200 row-span-2 col-span-2">
        <GifPanel />
      </div>
    </div>
  );
};

export default DisplayGrid;
