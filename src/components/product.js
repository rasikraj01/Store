import React, {useEffect, useState} from 'react';

function Product(props) {

    const handleAddToCart = () => {
        props.handleCartUpdate({name : props.name})
    }
    return (
        <div>
            <p>
            {props.name}<br/>
            <button onClick={handleAddToCart}>Add to cart</button>
            </p>
        </div>
  );
}

export default Product;