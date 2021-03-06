import * as React from "react";
import ReactTooltip from "react-tooltip";

export interface GifPanelProps {
  gifDetails: {
    id: string;
    title: string;
  };
}

const GifPanel: React.FC<GifPanelProps> = ({ gifDetails }) => {
  return (
    <div className="h-full w-full bg-purple-400 overflow-hidden flex">
      <img
        data-tip={`${gifDetails.title}`}
        data-background-color="lightgreen"
        className="object-cover object-center w-full"
        src={`https://media.giphy.com/media/${
          gifDetails.id || "ycfHiJV6WZnQDFjSWH"
        }/giphy.gif`}
        alt={gifDetails.title || "GIF not loaded"}
      />
      <ReactTooltip className="bg-red-300" />
    </div>
  );
};

export default GifPanel;
