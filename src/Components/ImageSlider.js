import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import home from '../Images/home.jpg';
import electronics from '../Images/electronics.jpg';

// const slideImages=[
//     '../Images/store.jpg',
//     '../Images/elertric.jpg',
//     '../Images/home.jpg'
// ];
export const ImageSlider = () => {
     return (
        <Wrapper>
        <div className="slide-container">
         <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${home})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${electronics})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          {/* <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div> */}
        </Slide>
      </div>
    </Wrapper> 
    );
}
 const Wrapper = styled.each-`
 div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
 }
 span{
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
 }
 `
 
 