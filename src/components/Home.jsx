import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mobileImage from "/src/assets/home/background-home-mobile.jpg";
import tabletImage from "/src/assets/home/background-home-tablet.jpg";
import desktopImage from "/src/assets/home/background-home-desktop.jpg";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");

  const determineBackgroundImage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 500) {
      return mobileImage;
    } else if (screenWidth < 900) {
      return tabletImage;
    } else {
      return desktopImage;
    }
  };

  useEffect(() => {
    setBackgroundImage(determineBackgroundImage());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(determineBackgroundImage());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className=" min-h-screen lg:h-screen flex flex-col items-center justify-center w-full bg-cover lg:justify-start lg:items-start"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute top-[10%] text-white px-4 h-screen mr-2 flex -mt-10 flex-col justify-center items-center  md:w-[70%]  md:h-[40%] md:p-15 md:top-[25%] lg:w-[40%] lg:left-20 lg:top-[35%] lg:justify-start lg:items-start ">
        <h2 className="text-[18px] text-[#d0d6f9] font-custom -mt-60  leading-loose tracking-wider mb-0 md:-mt-20 lg:-mt-0 lg:mb-0 font-barlow lg:text-[28px] ">
          SO, YOU WANT TO TRAVEL TO{" "}
        </h2>
        <h1 className="text-[80px]  m-7 md: lg:m-0 lg:text-[120px]  tracking-widest font-bellefair ">
          SPACE
        </h1>
        <p className="text-[16px] text-[#D0D6F9] font-custom tracking-widest text-center lg:text-start lg:text-[18px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>

      <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mt-12 text-gray-900 font-bold text-3xl absolute top-[70%]  transition-transform duration-200 ease-in-out md:top-[60%] md:w-60 md:h-60 lg:top-[45%] lg:h-90 lg:w-90 font-bellefair lg:text-5xl lg:left-[70%] cursor-pointer">
        <Link
          to="/Destination"
          className="w-full h-full flex items-center justify-center"
        >
          EXPLORE!
        </Link>
        <div className="absolute w-full  h-full bg-white bg-opacity-20 z-[1] hover:scale-[1.2] rounded-full"></div>
      </div>
    </div>
  );
}

export default Home;
