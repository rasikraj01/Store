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
                <div class="cart">
                    {
                        props.cartItems.map((item, index) => {
                            return <CartItem name={item.name}/>
                        })
                    }
                    <button>Checkout</button>
                </div>
            }
        </div>
  );
}

export default Cart;