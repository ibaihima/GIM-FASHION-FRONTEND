import React, { useState, useEffect } from 'react';
import Card from './Card';

function Bottoms() {
    const [bottoms, setBottoms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/cloths/pants")
        .then(res => res.json())
        .then(bottomsData => {
            console.log('Bottoms incoming!')
            console.log(bottomsData)
            // setSneakers(sneakersData)
        })
    }, []);

    return(
        <div>
            <div className= "filter">
            </div>
            <div> 
            <Card clothes={bottoms}/>
            </div>
        </div>
    )
}


export default Bottoms;