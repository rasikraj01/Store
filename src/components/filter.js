import React, {useState, useContext} from 'react';

import { ProductContext } from './productContext';
import { data } from './data';

import '../scss/filter.scss'

function Filter() {
    
    let [products, setProducts] = useContext(ProductContext);
    let [filter, setFilter] = useState([])


    let handlefilterupdate = async (e) => {
        const x = (e => {
                return {
                    is_filter_enable:true,
                    key:e.target.name,
                    value:e.target.value
                }
        })(e)

        await setFilter((e)=> {
            if(filter.length===0){
                filter.push(x);

            }
            else{
                let newFilterData=filter.map((fd) => {
                    if(fd.key===x.key && fd.value===x.value){
                        fd.is_filter_enable= !fd.is_filter_enable;
                        return fd
                    }
                    return fd;
                })
                let isDataPresent=newFilterData.findIndex(item => 
                    (item.key===x.key && item.value===x.value)
                )
                if (isDataPresent === -1 ){
                    filter.push(x)
                }
            }
            
            return filter
        })

        let new_Data = []

        let enabled_filters = filter.filter((item) => {
            if(item.is_filter_enable)
                    return item
        })

        
        let refact = enabled_filters.reduce((acc, cur) => {
            let current = acc[cur.key]
            if(acc[cur.key] === undefined){
                acc[cur.key] = [cur.value]
            }
            else{
                acc[cur.key].push(cur.value)
            }
            return acc
        }, {})

        console.log(refact)

        // DEVTA FUNCTION
        let multiPropsFilter = (products, filters) => {
            const filterKeys = Object.keys(filters);
            return products.filter(product => {
              return filterKeys.every(key => {
                if (!filters[key].length) return true;
                // Loops again if product[key] is an array (for material attribute).
                if (Array.isArray(product[key])) {
                  return product[key].some(keyEle => filters[key].includes(keyEle));
                }
                return filters[key].includes(product[key]);
              });
            });
        };

        setProducts(multiPropsFilter(data, refact))
        

    }
    return (
        <div className="filter">
            <h2>Filter</h2>

            <div>
                <h3>Color</h3>
                <input type="checkbox" name="color" value="black" onClick={handlefilterupdate}/> <label>Black</label> <br/>
                <input type="checkbox" name="color" value="white" onClick={handlefilterupdate}/> <label>White</label> <br/>
                <input type="checkbox" name="color" value="brown" onClick={handlefilterupdate}/> <label>Brown</label> <br/>
                <input type="checkbox" name="color" value="green" onClick={handlefilterupdate}/> <label>Green</label> <br/>
                <input type="checkbox" name="color" value="red" onClick={handlefilterupdate}/> <label>Red</label> <br/>
                <input type="checkbox" name="color" value="blue" onClick={handlefilterupdate}/> <label>Blue</label> <br/>
            </div>

            <div>
                <h3>Size</h3>
                <input type="checkbox" name="size" value="4" onClick={handlefilterupdate}/> <label>4</label> <br/>
                <input type="checkbox" name="size" value="5" onClick={handlefilterupdate}/> <label>5</label> <br/>
                <input type="checkbox" name="size" value="6" onClick={handlefilterupdate}/> <label>6</label> <br/>
                <input type="checkbox" name="size" value="7" onClick={handlefilterupdate}/> <label>7</label> <br/>
                <input type="checkbox" name="size" value="8" onClick={handlefilterupdate}/> <label>8</label> <br/>
                <input type="checkbox" name="size" value="9" onClick={handlefilterupdate}/> <label>9</label> <br/>
                <input type="checkbox" name="size" value="10" onClick={handlefilterupdate}/> <label>10</label> <br/>
            </div>

            <div>
                <h3>Designer</h3>
                <input type="checkbox" name="designer" value="gucci" onClick={handlefilterupdate}/> <label>Gucci</label> <br/>
                <input type="checkbox" name="designer" value="prada" onClick={handlefilterupdate}/> <label>Prada</label> <br/>
                <input type="checkbox" name="designer" value="balenciaga" onClick={handlefilterupdate}/> <label>Balenciaga</label> <br/>
                <input type="checkbox" name="designer" value="fendi" onClick={handlefilterupdate}/> <label>Fendi</label> <br/>
                <input type="checkbox" name="designer" value="berluti" onClick={handlefilterupdate}/> <label>Berluti</label> <br/>
            </div>

        </div>
  );
}

export default Filter;
