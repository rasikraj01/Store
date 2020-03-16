import React, {} from 'react';

function Product(props) {

    const handleAddToCart = () => {
        props.handleCartUpdate({name : props.name})
    }
    return (
        <div>
            <p>
            {props.name}<br/>
            {props.color.map((color, index) => {
                return color
            })}<br/>
            <button onClick={handleAddToCart}>Add to cart</button>
            </p>
        </div>
  );
}

export default Product;