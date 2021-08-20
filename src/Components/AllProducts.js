import React from 'react';
import { useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import styled from 'styled-components';
// import CartPage from '../pages/CartPage';
// import { Link } from 'react-router-dom';
// https://www.codegrepper.com/code-examples/javascript/usehistory+react+router+dom
const AllProducts = ({products}) => {
  const history =useHistory();
  // let handleClick  = () => { 
    // history.push("/cartpage");
    // alert("button has been clicked")
    // console.log("think done!");
  // }
  // const routeChange = () =>{ 
  //   let path = `/cartpage`; 
  //   history.push(path);
  // }

    return (
      <Wrapper>
       <div className="allProducts">
       {products.map((product)=>( 
        <div className="singleProduct" key={product.id}>
          <img src={product.image} alt={product.title}/> 
          <p>{product.title}</p><br/>
          <h4> ${product.price}</h4><br/>
          <button color="primary" className="btn"
                onClick={()=>history.push('/cartpage')}
                  >
                  Add to cart
                </button>
          {/* <Link to="/cartpage" className="btn btn-primary">Sign up</Link> */}
          {/* <div className="spaceBetweenButtons"></div>
          <button id="productDetail">Product details</button> */}
        </div>
       ))}
    </div> 
    </Wrapper>
    )
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

  .singleProduct{
    border : #d3d3d3 solid 2px;
    padding: 20px 0px;
    font-size: 14px;
    text-align: center;
}
    
  button{
    border-radius: 14px;
    background-color:#4c8bf8;
    color:white;
    border:#4c8bf8;
    padding:8px;
  }
// .spaceBetweenButtons
//   {
//     width:16px;
//     height:auto;
//     display:inline-block;
// }
// Adding responsiveness
  @media(min-width:350px){
    .products-container {
      grid-template-rows: repeat(1, 1fr);
  }
  .singleProduct{
    padding:20px 0px;
  }
}
  @media (min-width: 992px) {
    .products-container {
      grid-template-rows: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
 export default AllProducts;