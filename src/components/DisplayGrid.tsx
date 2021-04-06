import * as React from "react";
import GifPanel from "./GifPanel";

export interface DisplayGridProps {}

const DisplayGrid: React.FC<DisplayGridProps> = () => {
  return (
    <div className="grid grid-cols-20 grid-rows-11 w-3/4 border-2 border-solid border-blue-100 p-4">
      <div className="row-span-full col-start-1 col-span-11">
        <GifPanel
          gifDetails={{ id: "Hg1ok0WPJR1Qs", name: "Cat on motorbike" }}
        />
      </div>
      <div className="row-span-full col-start-12 col-span-1"></div>
      <div className="row-start-1 row-span-5 col-start-13 col-span-5">
        <GifPanel gifDetails={{ id: "26wGmnW1ZImXe", name: "Cat snuggle" }} />
      </div>
      <div className="row-start-6 row-span-1 col-start-13 col-span-5"></div>
      <div className="row-start-7 row-span-5 col-start-13 col-span-5">
        <GifPanel gifDetails={{ id: "e8D8XV9fWrpF6", name: "Cats cycling" }} />
      </div>
      <div className="row-span-full col-start-18 col-span-1"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel
          gifDetails={{ id: "mLfyMq5L49H4bJRa9L", name: "Cat animation" }}
        />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={{ id: "l3q2AMoPRflHphYM8", name: "cat lick" }} />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={{ id: "10rW4Xw9eO0RmU", name: "Cat massage" }} />
      </div>
      <div className="col-span-2"></div>
      <div className="row-span-2 col-span-2">
        <GifPanel gifDetails={{ id: "JQRKxN6GuhGhy", name: "Cat crowd" }} />
      </div>
    </div>
  );
};

export default DisplayGrid;
