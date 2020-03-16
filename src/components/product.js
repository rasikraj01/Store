import React, {} from 'react';

function Product(props) {

    const handleAddToCart = () => {
        props.handleCartUpdate({id: props.id, name : props.name, price : props.price})
    }
    return (
        <div>
            <p>
            {props.name}<br/>
            {props.price}<br/>
            {props.color.map((color, index) => {
                return `${color} `
            })}<br/>

            {props.size.map((size, index) => {
                return `${size} `
            })}<br/>
            <button onClick={handleAddToCart}>Add to cart</button>
            </p>
        </div>
  );
}

export default Product;