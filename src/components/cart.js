import React, {useState} from 'react';
import CartItem from './cartitem';

function Cart(props) {
    let [toggle, setToggle] = useState(true)

    const handleToggle = () => setToggle(!toggle)

    return (
        <div>
            <button onClick={handleToggle}>Cart {props.cartItems.length}</button>
            <button onClick={props.handleClearCart}>Clear Cart</button>
            {
                (toggle) && 
                <div className="cart">
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
                <p>Total Amount : {props.totalAmount}</p>
                    <button>Checkout</button>
                </div>
            }
        </div>
  );
}

export default Cart;