import * as React from "react";

export interface GifPanelProps {
  gifDetails: {
    id: string;
    name: string;
  };
}

const GifPanel: React.FC<GifPanelProps> = ({ gifDetails }) => {
  return (
    <div className="h-full w-full bg-purple-400 overflow-hidden flex">
      <img
        src={`https://media.giphy.com/media/${gifDetails.id}/giphy.gif`}
        alt={gifDetails.name}
      />
    </div>
  );
};

export default GifPanel;
