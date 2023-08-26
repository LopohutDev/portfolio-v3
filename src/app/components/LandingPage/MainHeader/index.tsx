import React from "react";
// import headerImage from "../../../assets/images/testimg.jpg";
import headerImage from "../../../assets/images/headerimage.jpg";

const MainHeader = () => {
  return (
    <div>
      <div className="py-20">
        <p className="text-lg text-center md:text-2xl">
          -{">"} Hi, I'm Louie Jay, A...
        </p>
        <h1 className="text-3xl text-center md:text-6xl">
          {'{"'} <span className="text-yellow-300">_full stack developer</span>
          {'"}'}
        </h1>
      </div>
      <div
        className="w-full h-[65vh] bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${headerImage.src})` }}
      />
    </div>
  );
};

export default MainHeader;
