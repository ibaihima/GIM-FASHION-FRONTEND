import React, {useState, useEffect} from 'react';
import ClothesList from './ClothesList';

function Sweaters() {
    const [sweaters, setSweaters] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/cloths/sweaters")
      .then(res => res.json())
      .then((sweatersData) => {
          // console.log(clothsData)
          //console.log(sweatersData)
          setSweaters(sweatersData)
      })
    }, []);

    return(
        <div>
            <ClothesList clothes={sweaters}/>
        </div>
    )
}


export default Sweaters;