import React, { useState, useEffect } from 'react';
import ClothesList from './ClothesList';

function Bottoms() {
    const [bottoms, setBottoms] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/cloths/pants")
        .then(res => res.json())
        .then(bottomsData => {
            setBottoms(bottomsData)
        })
    }, []);

    return(
        <div>
            <div className= "filter">
            </div>
            <div> 
            <ClothesList clothes={bottoms}/>
            </div>
        </div>
    )
}


export default Bottoms;