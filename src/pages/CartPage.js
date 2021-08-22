import React from 'react';
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
 import styled from 'styled-components';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

const CartPage = () => {
    // const [itemCount, setItemCount] = React.useState(1);
    return(
        <Wrapper>
          <div class="wrapper">
          <div class="div-1">
            <h3><b>0 items in your cart</b></h3>
            <p class="instructions">Go ahead and add something!</p>
          </div>
    <div class="div-2">
     <label>Subtotal<p>$0:00</p></label>
     <div class="divider"></div>
     <label>Delivery<p>$0:00</p></label><br/>
     <div class="divider"></div>  
     <label>Taxes<p>$0:00</p></label><br/><br/>
     <div class="total-divider"></div><br/>
     <label><b>Est. Total</b><p>$0:00</p></label>
    </div>
    </div> 
    </Wrapper>
      );
    }
 const Wrapper = styled.section`
 .wrapper{
  display: flex;
  height: 500px;
}
h3,.instructions{
  position:relative;
  left :120px;
  top:140px;
}
.div-1{
  border: #bebebe solid 0.5px;
  width: 70%;
  height: 80%;
}
.divider{
  height:30px;
}
.total-divider{
  border-top:#bebebe solid 0.5px;
}
.div-2{
  position:relative;
  left:30px;
  border-bottom: #bebebe solid 0.5px;
  width: 30%;
  height: 80%;
}
 `
export default CartPage;