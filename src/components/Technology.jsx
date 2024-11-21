import React, { useEffect, useState } from "react";
import mobileImage from "/src/assets/technology/background-technology-mobile.jpg";
import tabletImage from "/src/assets/technology/background-technology-tablet.jpg";
import desktopImage from "/src/assets/technology/background-technology-desktop.jpg";
import launchL from "/src/assets/technology/image-launch-vehicle-landscape.jpg";
import launchP from "/src/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleP from "/src/assets/technology/image-space-capsule-portrait.jpg";
import capsuleL from "/src/assets/technology/image-space-capsule-landscape.jpg";
import spaceportL from "/src/assets/technology/image-spaceport-landscape.jpg";
import spaceportP from "/src/assets/technology/image-spaceport-portrait.jpg";
import data from "../../data";
import "/src/index.css";

const Technology = () => {
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
  }, []); // Run only once on mount

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(determineBackgroundImage());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Add and remove resize event listener

  const [technologyNumber, setTechnologyNumber] = useState(0);
  const technologyImages = [
    { mobile: launchL, tablet: launchL, desktop: launchP },
    { mobile: capsuleL, tablet: capsuleL, desktop: capsuleP },
    { mobile: spaceportL, tablet: spaceportL, desktop: spaceportP },
  ];

  const handleTechnologyChange = (index) => {
    setTechnologyNumber(index);
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center w-full bg-cover lg:justify-start lg:items-start"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div
        className="h-screen flex-wrap flex mt-10 flex-col items-center justify-center w-full bg-cover lg:justify-start lg:items-start overflow-hidden"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="flex flex-col justify-start items-center text-white text-center md:items-start md:-mt-80 lg:mt-10 lg:mx-auto lg:items-start lg:justify-start lg:ml-48  ">
          <h1 className="p-4 font-condensed -mt-32 md:mt-80 mb-10 md:text-[20px] md:mb-18 lg:text-[28px] lg:mt-28 text-[#929399] ">
            SPACE LAUNCH 101
          </h1>
          <div className="flex flex-col-reverse justify-center items-center md:flex-col-reverse lg:flex-row lg:gap-[10px] lg:items-start lg:justify-between">
            <div className="flex flex-col-reverse justify-center items-center md:flex-col-reverse lg:justify-start lg:w-[50%] lg:items-start lg:flex-row-reverse lg:gap-20 lg:mt-2">
              <div className="flex flex-col mt-6 lg:items-start lg:mt-0">
                <h2 className="my-4 font-condensed text-[#929399] lg:mt-0">
                  THE TERMINOLOGY...
                </h2>
                <h1 className="uppercase font-bellefair mb-4 text-[30px] items-center md:text-[40px] lg:text-start lg:my-0 lg:text-[50px]">
                  {data.technology[technologyNumber].name}
                </h1>
                <p className="text-[15px] font-barlow items-center text-center px-8 md:px-36 md: md:text-[16px] lg:text-start text-[#929399] lg:p-0 lg:my-10 lg:mt-3 lg:text-[18px]">
                  {data.technology[technologyNumber].description}
                </p>
              </div>
              <div className="flex flex-row lg:flex-col items-center justify-center mt-10  lg:items-start lg:m-0 lg:">
                <div
                  onClick={() => handleTechnologyChange(0)}
                  className={`technology-tab w-[58px] h-[58px] p-5 flex justify-center items-center  bg-transparent rounded-full border-2 border-[#707070] hover:border-white cursor-pointer mr-3 lg:ml-0 lg:mb-14 ${
                    technologyNumber === 0 ? "active" : ""
                  }`}
                >
                  1
                </div>
                <div
                  onClick={() => handleTechnologyChange(1)}
                  className={`technology-tab w-[58px] h-[58px] p-5 flex justify-center items-center bg-transparent rounded-full mx-8 border-2 border-[#707070] hover:border-white cursor-pointer mr-3 lg:ml-0 lg:mb-14 ${
                    technologyNumber === 1 ? "active" : ""
                  }`}
                >
                  2
                </div>
                <div
                  onClick={() => handleTechnologyChange(2)}
                  className={`technology-tab w-[58px] h-[58px] p-5 text-center bg-transparent mx-8 rounded-full border-2 border-[#707070] hover:border-white cursor-pointer mr-3 lg:ml-0 lg:mb-8 ${
                    technologyNumber === 2 ? "active" : ""
                  }`}
                >
                  3
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] -mt-6 border-b-[1px] border-[#707070] w-[102%] flex items-center justify-center md:border-none mx-2 md:ml-3 md:mt-0 lg:-mt-24 lg:mx-0 lg:border-b-[1px] lg:border-[#707070] lg:-mr-16 lg:h-[400px] lg:">
              <img
                src={
                  technologyImages[technologyNumber][
                    backgroundImage === desktopImage ? "desktop" : "tablet"
                  ]
                }
                alt=""
                className="w-[101%] md:w-[101%] lg:w-full lg:h-[100%]  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
