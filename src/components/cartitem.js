import React, {useState} from 'react';

function CartItem(props) {

    return (
        <div className="cartItem">
            <h5>{props.name}</h5>
            <h5>x{props.quantity} </h5> 
            <h5>$ {props.price}</h5> 
        </div>
  );
}

export default CartItem;