import React, {useState, useContext} from 'react';

import { ProductContext } from './productContext';
import { data } from './data';


function Filter() {
    let [products, setProducts] = useContext(ProductContext);
    let [filter, setFilter] = useState([])

    // let [filter, setfilter] = useState([])

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
            
            console.log('filter');
            console.log(filter)
            return filter
        })

        const new_Data = []

        let enabled_filters = filter.filter((item) => {
            if(item.is_filter_enable)
                    return item
        })
        console.log('en');
        
        console.log(enabled_filters)
        
        if(enabled_filters.length != 0){
            enabled_filters.forEach((item) => {
                data.forEach((data) => {
                if (data[item.key].includes(item.value)) new_Data.push(data)
                })
            })
            setProducts(new_Data)
        }
        else{
            setProducts(data)
        }

    }
    return (
        <div>
            Filter<br/>
            Color <br/>
            <input type="checkbox" name="color" value="red" onClick={handlefilterupdate}/> red <br/>
            <input type="checkbox" name="color" value="blue" onClick={handlefilterupdate}/> Blue <br/>

            Size <br/>
            <input type="checkbox" name="size" value="8" onClick={handlefilterupdate}/> 8 <br/>
            <input type="checkbox" name="size" value="9" onClick={handlefilterupdate}/> 9 <br/>
            <input type="checkbox" name="size" value="9" onClick={handlefilterupdate}/> 10 <br/>
        </div>
  );
}

export default Filter;
