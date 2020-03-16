import React, {useState} from 'react';

function CartItem(props) {

    return (
        <div>
            {props.name} {props.price} {props.quantity}
        </div>
  );
}

export default CartItem;