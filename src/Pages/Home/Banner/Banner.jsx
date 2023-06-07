import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../assets/Banner/image1.jpg'
import slide2 from '../../../assets/Banner/image2.jpg'
import slide3 from '../../../assets/Banner/image3.jpg'

const Banner = () => {
    return (

        <Carousel>
        <div>
            <img src={slide1} />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src={slide2} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src={slide3} />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
        
  )
}

export default Banner;