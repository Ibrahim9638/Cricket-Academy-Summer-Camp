import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import slide1 from "../../../assets/Banner/image1.jpg";
import slide2 from "../../../assets/Banner/image2.jpg";
import slide3 from "../../../assets/Banner/image3.jpg";
import slide4 from "../../../assets/Banner/image4.jpg";

const Banner = () => {
  return (
    <div>
      <AwesomeSlider>
        <div className="w-full">
          <h2
            className="absolute tracking-tight  text-white lg:text-[32px] lg:ml-32 lg:mr-20 lg:py-[300px]"
            style={{ textShadow: "4px 4px 8px #000000" }}
          >
            The Most Popular Sports in the world is Cricket. <br /> We try to
            teach newbies with our best coaches. <br /> If You are interested,
            Go to our classes section <br /> & see all the Available Course{" "}
          </h2>
          <img className="w-full" src={slide1} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full" src={slide2} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full" src={slide3} alt="" />
        </div>
        <div className="w-full">
          <img className="w-full" src={slide4} alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
