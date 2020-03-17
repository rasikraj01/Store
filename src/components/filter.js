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

        
        // if(enabled_filters.length != 0) {
        //     enabled_filters.forEach((item) => {
        //         new_Data = data.filter((data) => {
        //             return data[item.key].includes(item.value)
        //         })
        //     })
        //     setProducts(new_Data)
        // }
        // else{
        //     setProducts(data)
        // }

        if(enabled_filters.length != 0) {
            enabled_filters.forEach((item) => {
                data.forEach((data) => {
                if (data[item.key].includes(item.value)){
                    if (new_Data.length === 0){
                        new_Data.push(data)
                    }else{
                        // check if item already present in new Data to avoid redundancy
                        let isItemAlreadyPresent = new_Data.findIndex((e) => {
                            return e.id === data.id
                        })
                        if(isItemAlreadyPresent === -1){
                            new_Data.push(data)
                        }
                    }
                }
                })
            })
            setProducts(new_Data)
        }
        else{
            setProducts(data)
        }

    }
    return (
        <div className="filter">
            <h2>Filter</h2>

            <div>
                <h3>Color</h3>
                <input type="checkbox" name="color" value="red" onClick={handlefilterupdate}/> <label>Red</label> <br/>
                <input type="checkbox" name="color" value="blue" onClick={handlefilterupdate}/> <label>Blue</label> <br/>
            </div>

            <div>
                <h3>Size</h3>
                <input type="checkbox" name="size" value="8" onClick={handlefilterupdate}/> <label>8</label> <br/>
                <input type="checkbox" name="size" value="9" onClick={handlefilterupdate}/> <label>9</label> <br/>
                <input type="checkbox" name="size" value="10" onClick={handlefilterupdate}/> <label>10</label> <br/>
            </div>

            <div>
                <h3>Designer</h3>
                <input type="checkbox" name="designer" value="apple" onClick={handlefilterupdate}/> <label>apple</label> <br/>
                <input type="checkbox" name="designer" value="oneplus" onClick={handlefilterupdate}/> <label>oneplus</label> <br/>
                <input type="checkbox" name="designer" value="samsung" onClick={handlefilterupdate}/> <label>samsung</label> <br/>
            </div>

        </div>
  );
}

export default Filter;
