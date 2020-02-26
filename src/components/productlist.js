import React, {useEffect, useState, useContext} from 'react';
import {ProductContext} from './productContext';
import Product from './product';


function ProductList(props) {
    let [search, setSearch] = useState('')
    let products = useContext(ProductContext)

    let filterProducts = products.filter((item) => {
      return item.name.indexOf(search) !== -1
    })
    
    let handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleSearch}/>
            {filterProducts.map((item, index) => {
                return <Product name={item.name} color={item.color} key={index} handleCartUpdate={props.handleCartUpdate}/>
            })}
        </div>
  );
}

export default ProductList;