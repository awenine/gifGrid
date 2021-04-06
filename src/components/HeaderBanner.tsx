import * as React from "react";

export interface HeaderBannerProps {}

const HeaderBanner: React.FC<HeaderBannerProps> = () => {
  return (
    <div className="w-full p-8 text-lg font-mono text-center transition duration-500 ease-in-out bg-red-100 md:bg-red-300 sm:bg-red-500 hover:text-purple-600 hover:bg-blue-300 shadow-md hover:shadow-xl">
      gifGrid
    </div>
  );
};

export default HeaderBanner;
