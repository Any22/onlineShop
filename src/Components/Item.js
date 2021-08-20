import React from 'react';
import styled from 'styled-components';
const Item = ({products,value}) =>{
 return(
  <Wrapper>
    <div className="single-item">
    {products.filter(product =>product.category === value).map((product)=>( 
        <div key={product.id}>
         <h3>{product.title}</h3>
         <img src={product.image} alt={product.title}/>
         <p>{product.description}</p>   
        </div>
      ))}
    </div>
  </Wrapper>
  );
}