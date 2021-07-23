import React from 'react';
import styled from 'styled-components';
const SelectedProducts = ({products,value}) =>{
 return(
  <Wrapper>
    <div className="products">
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
const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    grid-template-columns: auto auto ;
    grid-gap:20px;
  }
  `
export default SelectedProducts;