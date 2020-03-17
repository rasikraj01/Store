import React, { useState } from 'react';

import Cart from './components/cart';
import ProductList from './components/productlist';
import Filter from'./components/filter';

import {ProductProvider} from './components/productContext';

import './scss/app.scss';

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
				

				if (indexOfItem === -1){
					newItem.quantity = 1
					return [newItem, ...cartItems]
				}else{
					cartItems[indexOfItem].quantity += 1
					return cartItems
				}
			}
		})
	}

	const handleClearCart = () => {
		setCartItems([])
		setTotalAmount(0)
	}

	return (
	<ProductProvider>
    	<div className="App">
			<nav>
				<h1 className="storeName">LUXUS</h1>
				<Cart 
					cartItems={cartItems}  
					totalAmount={totalAmount}
					handleClearCart={handleClearCart} 
					handleCartUpdate={handleCartUpdate}
				/>
			</nav>
    		<Filter/>
    		<ProductList handleCartUpdate={handleCartUpdate}/>
			
    	</div>
	</ProductProvider>
	);
}

export default App;
