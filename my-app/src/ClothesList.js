import React from 'react';
import Card from './Card';

function ClothesList ({ clothes }) {

    return(
        <div>
            <div className="card_container">
                {clothes.map(cloth => {
                    return <Card cloth={cloth} key={cloth.id}/>
                })}
            </div>
        </div>
    )
}

export default ClothesList;