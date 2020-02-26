import React, {useEffect, useState} from 'react';

function Filter() {
    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            Filters<br/>
            <input type="checkbox" name="red" defaultChecked={false} value="red" onChange={handleChange}/> Red<br/>
            <input type="checkbox" name="red" defaultChecked={false} value="blue" onChange={handleChange}/> Blue<br/>
        </div>
  );
}

export default Filter;