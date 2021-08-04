import React from 'react';
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

export const  CartBtn = () => {
    const [itemCount, setItemCount] = React.useState();
    return (
        setItemCount(1),
        <Badge color="secondary" badgeContent={itemCount}>
        <ShoppingCartIcon />{" "}
        </Badge>   
    );
  }
  
  
  