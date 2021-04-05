import * as React from "react";

export interface HeaderBannerProps {}

const HeaderBanner: React.SFC<HeaderBannerProps> = () => {
  return (
    <div className="p-8 font-mono text-center transition duration-500 ease-in-out bg-red-100 md:bg-red-300 sm:bg-red-500 hover:text-purple-600 hover:bg-blue-300 shadow-md hover:shadow-xl">
      HeaderBanner Renders
    </div>
  );
};

export default HeaderBanner;
