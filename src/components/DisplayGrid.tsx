import * as React from "react";
import GifPanel from "./GifPanel";

export interface DisplayGridProps {}

const DisplayGrid: React.SFC<DisplayGridProps> = () => {
  return (
    <div>
      DisplayGrid renders
      <GifPanel />
    </div>
  );
};

export default DisplayGrid;
