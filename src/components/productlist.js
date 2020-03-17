import React, {useState, useContext} from 'react';
import {ProductContext} from './productContext';
import Product from './product';

import '../scss/productList.scss';


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
        <div className="products">
            {/* <h2>Products</h2> */}
            <input type="text" className="search" onChange={handleSearch} placeholder="Search"/><br/>
            <p className="productNo"> {filterProducts.length} Products found</p> <br/>
            <div className="productList">
                {filterProducts.map((item, index) => {
                    return <Product
                        id={item.id}
                        name={item.name}
                        designer={item.designer}
                        price={item.price}
                        color={item.color}
                        size={item.size}
                        img={item.img}
                        key={index}
                        handleCartUpdate={props.handleCartUpdate}/>
                })}
            </div>
        </div>
  );
}

export default ProductList;