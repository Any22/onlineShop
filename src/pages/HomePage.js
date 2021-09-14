import React from 'react';
import './HomePage.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import images from '../utilities/sliderImages';
const HomePage = () => {
  return (
    <div className="section">
      <AliceCarousel autoPlay animationType={"fadeout"} autoPlayInterval={2000} infinite>
        {images}
      </AliceCarousel>
    </div>                
  );
}
 
 export default HomePage ;