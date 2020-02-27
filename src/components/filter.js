import React, {useState, useContext} from 'react';
import { ProductContext } from './productContext';
import { data } from './data';


function Filter() {

    let [products, setProducts] = useContext(ProductContext);
    let [filter, setFilter] = useState({
        color:{
            red  : false,
            blue : false
        },
        designer: {
            gucci : false,
            prada : false
        }
    })

    const handleChange = (e) => {
        let newfilter = Object.assign({}, filter);
        newfilter[e.target.name][e.target.value] = !filter[e.target.name][e.target.value];
        setFilter(newfilter)

    }

    return (
        <div>
            Filters<br/>
            <label>Color</label><br/>
            <input type="checkbox" name="color" defaultChecked={false} value="red" onChange={handleChange}/> Red<br/>
            <input type="checkbox" name="color" defaultChecked={false} value="blue" onChange={handleChange}/> Blue<br/>
            <br/>
            <label>Designer</label><br/>
            <input type="checkbox" name="designer" defaultChecked={false} value="gucci" onChange={handleChange}/> gucci<br/>
            <input type="checkbox" name="designer" defaultChecked={false} value="prada" onChange={handleChange}/> prada<br/>

        </div>
  );
}

export default Filter;


// if (e.target.checked){

//     console.log(e.target.value)
//     let filteredProducts = data.filter((item) => {
//         return item.color === e.target.value
//     })
//     setProducts(filteredProducts)
// }else{
//     setProducts(data)
// }