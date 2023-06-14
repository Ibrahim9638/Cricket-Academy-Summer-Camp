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
        <div
            className="absolute tracking-tight ml-10 mt-[120px] font-extrabold  text-red-700 
            lg:text-[28px] lg:ml-36 lg:mr-20 lg:py-[400px] lg:mt-[-100px]"
            style={{ textShadow: "4px 4px 8px #000000" }}
          >
            <p className="lg:text-5xl lg:mb-4">Summer Vacation Offer</p> 
            <p>Course Information:</p>
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Batting Course  </p>
            <p className="lg:ml-32 ml-1"> 10000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fast Bowling Course  </p>
            <p className="lg:ml-[70px] ml-1">8000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Spin Bowling Course  </p>
            <p className="lg:ml-[67px] ml-1">7000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fielding Course  </p>
            <p className="lg:ml-[123px] ml-1">5000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fitness Trainer course  </p>
            <p className="lg:ml-[55px] ml-1">4000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 lg:flex">
            <p>Mind Training Course  </p>
            <p className="lg:ml-[55px] ml-1">3000/- Taka Only</p>
            </div>
            
        </div>
          <img className="w-full" src={slide1} alt="" />
        </div>

        <div className="w-full">
        <div
            className="absolute tracking-tight ml-10 mt-[120px] font-extrabold  text-red-700 
            lg:text-[28px] lg:ml-36 lg:mr-20 lg:py-[400px] lg:mt-[-100px]"
            style={{ textShadow: "4px 4px 8px #000000" }}
          >
            <p className="lg:text-5xl lg:mb-4">Summer Vacation Offer</p> 
            <p>Course Information:</p>
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Batting Course  </p>
            <p className="lg:ml-32 ml-1"> 10000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fast Bowling Course  </p>
            <p className="lg:ml-[70px] ml-1">8000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Spin Bowling Course  </p>
            <p className="lg:ml-[67px] ml-1">7000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fielding Course  </p>
            <p className="lg:ml-[123px] ml-1">5000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fitness Trainer course  </p>
            <p className="lg:ml-[55px] ml-1">4000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 lg:flex">
            <p>Mind Training Course  </p>
            <p className="lg:ml-[55px] ml-1">3000/- Taka Only</p>
            </div>
            
        </div>
          <img className="w-full" src={slide2} alt="" />
        </div>
        <div className="w-full">
        <div
            className="absolute tracking-tight ml-10 mt-[120px] font-extrabold  text-red-700 
            lg:text-[28px] lg:ml-36 lg:mr-20 lg:py-[400px] lg:mt-[-100px]"
            style={{ textShadow: "4px 4px 8px #000000" }}
          >
            <p className="lg:text-5xl lg:mb-4">Summer Vacation Offer</p> 
            <p>Course Information:</p>
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Batting Course  </p>
            <p className="lg:ml-32 ml-1"> 10000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fast Bowling Course  </p>
            <p className="lg:ml-[70px] ml-1">8000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Spin Bowling Course  </p>
            <p className="lg:ml-[67px] ml-1">7000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fielding Course  </p>
            <p className="lg:ml-[123px] ml-1">5000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fitness Trainer course  </p>
            <p className="lg:ml-[55px] ml-1">4000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 lg:flex">
            <p>Mind Training Course  </p>
            <p className="lg:ml-[55px] ml-1">3000/- Taka Only</p>
            </div>
            
        </div>
          <img className="w-full" src={slide3} alt="" />
        </div>
        <div className="w-full">
        <div
            className="absolute tracking-tight ml-10 mt-[120px] font-extrabold  text-red-700 
            lg:text-[28px] lg:ml-36 lg:mr-20 lg:py-[400px] lg:mt-[-100px]"
            style={{ textShadow: "4px 4px 8px #000000" }}
          >
            <p className="lg:text-5xl lg:mb-4">Summer Vacation Offer</p> 
            <p>Course Information:</p>
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Batting Course  </p>
            <p className="lg:ml-32 ml-1"> 10000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fast Bowling Course  </p>
            <p className="lg:ml-[70px] ml-1">8000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Spin Bowling Course  </p>
            <p className="lg:ml-[67px] ml-1">7000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fielding Course  </p>
            <p className="lg:ml-[123px] ml-1">5000/- Taka Only</p>
            </div>

            <div className="text-white lg:text-[23px] lg:mb-2 flex">
            <p>Fitness Trainer course  </p>
            <p className="lg:ml-[55px] ml-1">4000/- Taka Only</p>
            </div>
          
            <div className="text-white lg:text-[23px] lg:mb-2 lg:flex">
            <p>Mind Training Course  </p>
            <p className="lg:ml-[55px] ml-1">3000/- Taka Only</p>
            </div>
            
        </div>
          <img className="w-full" src={slide4} alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
