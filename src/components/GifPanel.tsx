import * as React from "react";

export interface GifPanelProps {}

const GifPanel: React.FC<GifPanelProps> = () => {
  return (
    <div className="h-full w-full bg-purple-400 overflow-hidden flex">
      <img
        src="https://media.giphy.com/media/Hg1ok0WPJR1Qs/giphy.gif"
        alt="Test Gif"
      />
    </div>
  );
};

export default GifPanel;
