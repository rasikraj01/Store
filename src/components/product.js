import React, {} from 'react';
import '../scss/productItem.scss';

function Product(props) {

    const handleAddToCart = () => {
        props.handleCartUpdate({id: props.id, name : props.name, price : props.price})
    }
    return (
        <div className="product">
            <img src={props.img} className="product_image"/>
            <h2 className="designer">{props.designer}</h2>
            <h3 className="name">{props.name}</h3>

            <h3 className="color">
            Color : <span>
                {props.color.map((color, index) => {
                    return `${color} `
                })}
            </span>
            </h3>

            <h3 className="size">
            Size : <span>
                {props.size.map((size, index) => {
                    return `${size} `
                })}
            </span>
            </h3>

            <h3 className="price">{props.price}</h3>

            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
  );
}

export default Product;