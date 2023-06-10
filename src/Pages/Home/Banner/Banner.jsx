import React from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import slide1 from '../../../assets/Banner/image1.jpg'
import slide2 from '../../../assets/Banner/image2.jpg'
import slide3 from '../../../assets/Banner/image3.jpg'
import slide4 from '../../../assets/Banner/image4.jpg'

const Banner = () => {
    return (

    //     <Carousel>
    //     <div>
    //         <img src={slide1} />
    //         <p className="legend" style={{fontSize: "19px"}}> <marquee>The Most Popular Sports in the world is Cricket. We try to teach newbies with our best coaches. If You are interested, Go to our classes & see all the classes</marquee>  </p>
    //     </div>
    //     <div>
    //         <img src={slide2} />
    //         <p className="legend text-5xl" style={{fontSize: "30px"}}> Batting Course fees: 10000/- Taka Only <br /> Check out our classes sections for details</p>
    //     </div>
    //     <div>
    //         <img src={slide3} />
    //         <p className="legend" style={{fontSize: "30px"}}> Bowling Course fees: 9500/- Taka Only <br /> Check out our classes sections for details</p>
    //     </div>
    //     <div>
    //         <img src={slide4} />
    //         <p className="legend" style={{fontSize: "30px"}}> Fielding Course fees: 6500/- Taka Only <br /> Check out our classes sections for details. </p>
    //     </div>
    // </Carousel>

   
        <AwesomeSlider>
          <div className='w-full'>
          <h2 className='absolute tracking-tight  text-white lg:text-[32px] lg:ml-32 lg:mr-20 lg:py-[300px]' style={{ textShadow: "4px 4px 8px #000000" }}>The Most Popular Sports in the world is Cricket. <br />  We try to teach newbies with our best coaches. <br /> If You are interested, Go to our classes section <br />  & see all the Available Course </h2>
            <img className='w-full' src={slide1} alt="" />
    
          </div>
          <div className='w-full'>
          <img className='w-full' src={slide2} alt="" />
          </div>
          <div className='w-full'>
          <img className='w-full' src={slide3} alt="" />
          </div>
          <div className='w-full'>
          <img className='w-full' src={slide4} alt="" />
          </div>
        </AwesomeSlider>
    
      
   
  )
}

export default Banner;