import React, {useState, createContext} from 'react';
import {data} from './data.js';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    let [products, setProducts] = useState(data);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
  );
}
