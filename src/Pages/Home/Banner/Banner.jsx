import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../assets/Banner/image1.jpg'
import slide2 from '../../../assets/Banner/image2.jpg'
import slide3 from '../../../assets/Banner/image3.jpg'
import slide4 from '../../../assets/Banner/image4.jpg'

const Banner = () => {
    return (

        <Carousel>
        <div>
            <img src={slide1} />
            <p className="legend" style={{fontSize: "19px"}}> <marquee>The Most Popular Sports in the world is Cricket. We try to teach newbies with our best coaches.</marquee>  </p>
        </div>
        <div>
            <img src={slide2} />
            <p className="legend" style={{fontSize: "19px"}}> <marquee> Batting is one of the three main functions of a cricket team. We try to teach newbies with our best coaches.</marquee>  </p>
        </div>
        <div>
            <img src={slide3} />
            <p className="legend" style={{fontSize: "19px"}}> <marquee> Bowling is directing the ball towards the batsmen and the stumps which are covered. We try to teach newbies with our best coaches.</marquee>  </p>
        </div>
        <div>
            <img src={slide4} />
            <p className="legend" style={{fontSize: "19px"}}> <marquee>The modern game demands that fielders have excellent ground fielding skills. We try to teach newbies with our best coaches.</marquee>  </p>
        </div>
    </Carousel>
        
  )
}

export default Banner;