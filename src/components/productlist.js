import React, {useState, useContext} from 'react';
import {ProductContext} from './productContext';
import Product from './product';


function ProductList(props) {
    let [search, setSearch] = useState('')
    let [products, setProducts] = useContext(ProductContext)

    let filterProducts = products.filter((item) => {
      return item.name.indexOf(search) !== -1
    })
    
    let handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <h2>Product List</h2>
            <input type="text" onChange={handleSearch} placeholder="Search Products"/><br/>
            {filterProducts.length} products <br/>
            {filterProducts.map((item, index) => {
                return <Product name={item.name} color={item.color} key={index} handleCartUpdate={props.handleCartUpdate}/>
            })}
        </div>
  );
}

export default ProductList;