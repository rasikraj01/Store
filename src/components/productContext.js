import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    let [products, setProducts] = useState([
        {
          name: 'iphone'
        },
        {
          name: 'oneplus'
        },
        {
          name: 'samsung'
        },
        {
          name: 'motorola'
        },
    
    ]);

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
  );
}
