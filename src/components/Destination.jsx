import React, { useEffect, useState } from "react";
import mobileImage from "/src/assets/destination/background-destination-mobile.jpg";
import tabletImage from "/src/assets/destination/background-destination-tablet.jpg";
import desktopImage from "/src/assets/destination/background-destination-desktop.jpg";
import moon from "/src/assets/destination/image-moon.png";
import mars from "/src/assets/destination/image-mars.png";
import titan from "/src/assets/destination/image-titan.png";
import europa from "/src/assets/destination/image-europa.png";
import data from "../../data";
import "/src/index.css";

const Destination = () => {
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
  // Run only once on mount
  const [planetNumber, setPlanetNumber] = React.useState(0);
  let planetImages = [moon, mars, europa, titan];
  const handlePlanetChange = (index) => {
    setPlanetNumber(index);
  };
  return (
    <div
      className="h-svh flex flex-col items-center justify-center w-full overflow-hidden  bg-cover lg:justify-start lg:items-start px-5 lg:p-0 mb-4"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex flex-col justify-center items-center mt-4 font-barlow text-white md:items-start lg:mt-10 lg:mx-auto ">
        <h1 className="p-4 md:my-10 md:mx-5 lg:mb-[50px] lg:text-[28px] font-condensed lg:mt-12">
          PICK YOUR DESTINATION
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[140px] lg:items-start lg:justify-around">
          <div className="lg:w-[445px]">
            <img
              src={planetImages[planetNumber]}
              alt=""
              className="w-[170px] md:w-[300px] lg:w-[380px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[445px] lg:items-start">
            <div className="flex flex-row items-center justify-center my-3 text-[#D0D6F9] font-condensed text-[14px] lg:items-start lg:m-0 lg:">
              <div
                onClick={() => handlePlanetChange(0)}
                className={`dest-tab mx-3 md:mx-6 lg:ml-0 cursor-pointer ${
                  planetNumber === 0 ? "active" : ""
                }`}
              >
                MOON
              </div>
              <div
                onClick={() => handlePlanetChange(1)}
                className={`dest-tab mx-3 md:mx-6 cursor-pointer ${
                  planetNumber === 1 ? "active" : ""
                }`}
              >
                MARS
              </div>
              <div
                onClick={() => handlePlanetChange(2)}
                className={`dest-tab mx-3 md:mx-6 cursor-pointer ${
                  planetNumber === 2 ? "active" : ""
                }`}
              >
                EUROPA
              </div>
              <div
                onClick={() => handlePlanetChange(3)}
                className={`dest-tab mx-3 md:mx-6 cursor-pointer ${
                  planetNumber === 3 ? "active" : ""
                }`}
              >
                TITAN
              </div>
            </div>

            <h1 className="uppercase text-[56px] items-center lg:text-[100px] font-bellefair">
              {data.destinations[planetNumber].name}
            </h1>
            <p className="text-[15px] px-5 items-center text-center md:px-20 md:text-[16px] lg:text-start lg:p-0 lg:my-10 lg:mt-3 font-barlow lg:text-[18px] text-[#b4b4fa]">
              {data.destinations[planetNumber].description}
            </p>
            <hr className="bg-[#070707] border-[#afaeae] w-full my-2 lg:m-0" />
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="flex flex-col items-center my-1 lg:items-start">
                <p className="text-[14px] text-[#89898a] ">AVG. DISTANCE</p>
                <h3 className="text-[28px] font-bellefair uppercase">
                  {data.destinations[planetNumber].distance}
                </h3>
              </div>
              <div className="flex flex-col items-center my-1">
                <p className="text-[14px] text-[#89898a]">EST. TRAVEL TIME</p>
                <h3 className="text-[28px] font-bellefair uppercase">
                  {data.destinations[planetNumber].travel}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
