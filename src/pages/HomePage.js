import React from 'react';
import home from '../Images/home.jpg';

// import buynow from '../Images/buynow.jpeg';
// import elertric from '../Images/elertric.jpg';
// import { Slide } from 'react-slideshow-image';
// import buynow from '../Images/buynow.jpeg';
import styled from 'styled-components';
//  import { ImageSlider } from '../Components/ImageSlider';
const HomePage = () => {
    return (
        <Wrapper>
          <div className="section">
            <div style={{'backgroundImage': `url(${home})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          {/* <div className="section">
            <div style={{'backgroundImage': `url(${buynow})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="section">
            <div style={{'backgroundImage': `url(${elertric})`}}>
              <span>Slide 3</span>
            </div>
          </div> */}
          {/* </Slide> */}
        </Wrapper>              
    );
}
 const Wrapper = styled.section`
 div{
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-repeat:repeat;
    width:100%;
    height: 450px;
 }
 span{
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
}
 
 `
 export default HomePage ;