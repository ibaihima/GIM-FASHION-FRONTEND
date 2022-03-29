import React, {useState, useEffect} from 'react';
import Card from './Card.js';

function Sweaters() {
    const [sweaters, setSweaters] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/cloths/sweaters")
      .then(res => res.json())
      .then((sweatersData) => {
          // console.log(clothsData)
          console.log(sweatersData)
      })
    }, []);

    return(
        <div>
            <Card clothes={sweaters}/>
        </div>
    )
}


export default Sweaters;