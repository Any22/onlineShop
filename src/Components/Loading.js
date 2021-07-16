import React from 'react';
import styled from 'styled-components';
const Loading =() => {
    return (
      <Wrapper>
        <div className="section-center">
        <h2>Loading.......! </h2>
        </div>
      </Wrapper>
    );

  
};
const Wrapper = styled.section`
margin-top:350px;
text-align: center;
`
export default Loading;