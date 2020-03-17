import React, {useState} from 'react';

import CartItem from './cartitem';

import '../scss/cart.scss';

function Cart(props) {
    let [toggle, setToggle] = useState(true)

    const handleToggle = () => setToggle(!toggle)

    return (
        <div className="cart">
            <button onClick={handleToggle} className="toggleButton">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span>{props.cartItems.length}</span>
            </button>
            {
                (toggle) && 
                <div className="cartDetail">
                    <h3>YOUR CART</h3>
                    <div className="actions">
                        <button className="clearCart" onClick={props.handleClearCart}>Clear Cart</button>
                        <button onClick={handleToggle}>X</button>
                    </div>
                    {
                        props.cartItems.map((item, index) => {
                            return <CartItem
                                name={item.name} 
                                price={item.price} 
                                key={index} 
                                quantity={item.quantity}
                            />
                        })
                    }
                    <br/>
                <p className="totalAmt">Total Amount : $ {props.totalAmount}</p>
                    <h3 className="checkout">Checkout</h3>
                </div>
            }
        </div>
  );
}

export default Cart;