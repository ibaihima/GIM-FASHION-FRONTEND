import React, { useState, useEffect } from 'react';
import ClothesList from './ClothesList';

function Sneakers() {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/cloths/sneakers")
        .then(res => res.json())
        .then((sneakersData) => {
            console.log('Sneakers incoming!')
            //console.log(sneakersData)
            setSneakers(sneakersData)
        })
    }, []);

    return(
        <div>
            <div className= "filter">
            </div>
            <div> 
            <ClothesList clothes={sneakers}/>
            </div>
        </div>
    )
}


export default Sneakers;