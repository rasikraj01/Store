import React, { useState } from 'react';

import Cart from './components/cart';
import ProductList from './components/productlist';
import Filter from'./components/filter';

import {ProductProvider} from './components/productContext';

function App() {
  
	let [cartItems, setCartItems] = useState([])

	const handleCartUpdate = (newItem) => {
		// add logic to handle multiple items
		setCartItems([...cartItems, newItem])
	}

	const handleClearCart = () => {
		setCartItems([])
	}

	return (
	<ProductProvider>
    	<div className="App">
    		<Filter/>
    		<ProductList handleCartUpdate={handleCartUpdate}/>
    		<Cart cartItems={cartItems} handleClearCart={handleClearCart} handleCartUpdate={handleCartUpdate}/>
    	</div>
	</ProductProvider>
	);
}

export default App;
