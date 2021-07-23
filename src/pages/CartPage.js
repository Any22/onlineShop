import React from 'react';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import styled from 'styled-components';
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CartPage = () => {
    const [itemCount, setItemCount] = React.useState(1);
    return(
        <Wrapper>
            <div >
            
            <Badge color="secondary" badgeContent={itemCount}>
            </Badge>
          
        <ButtonGroup>
            <Button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        </Wrapper>
        
    );
}
const Wrapper = styled.section`
  
`
export default CartPage;