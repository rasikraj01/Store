import React, { useState } from 'react';

import Cart from './components/cart';
import ProductList from './components/productlist';
import Filter from'./components/filter';

import {ProductProvider} from './components/productContext';

function App() {
  
	let [cartItems, setCartItems] = useState([])
	let [totalAmount , setTotalAmount] = useState(0)

	const handleCartUpdate = (newItem) => {
		setTotalAmount((totalAmount) => {
			return totalAmount + newItem.price
		})

		setCartItems((cartItems) => {
			if (cartItems.length === 0){
				newItem.quantity = 1
				return [newItem]
			}else{
				let indexOfItem = cartItems.findIndex((e) => {
					return e.id === newItem.id
				})
				console.log(indexOfItem);
				

				if (indexOfItem === -1){
					newItem.quantity = 1
					return [newItem, ...cartItems]
				}else{
					cartItems[indexOfItem].quantity += 1
					console.log(cartItems);
					
					return cartItems
				}
			}
		})
	}

	const handleClearCart = () => {
		setCartItems([])
	}

	return (
	<ProductProvider>
    	<div className="App">
    		<Filter/>
    		<ProductList handleCartUpdate={handleCartUpdate}/>
			<Cart 
				cartItems={cartItems}  
				totalAmount={totalAmount}
				handleClearCart={handleClearCart} 
				handleCartUpdate={handleCartUpdate}
			/>
    	</div>
	</ProductProvider>
	);
}

export default App;
