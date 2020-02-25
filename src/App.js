import React, { useState } from 'react';

import Cart from './components/cart';
import ProductList from './components/productlist';
import Search from './components/search';
import Filter from'./components/filter';

import {ProductProvider} from './components/productContext';

function App() {
  
  let [cartItems, setCartItems] = useState([{name: 'item1'}])

  const handleCartUpdate = (newItem) => {
    // add logic to handle multiple items
    setCartItems([...cartItems, newItem])
  }

  return (
    <ProductProvider>
      <div className="App">
        {/* <Search/> */}
        <ProductList handleCartUpdate={handleCartUpdate}/>
        <Cart cartItems={cartItems}/>
      </div>
    </ProductProvider>
  );
}

export default App;
