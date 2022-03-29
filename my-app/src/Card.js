import React from 'react'

function Card ( {cloth} ) {
    
    return(
        <div className="scene">
            <div className="card">
                <div className="card__face card__face--front">
                    <img src={cloth.image1} alt={cloth.name}/>
                </div>
                <div className="card__face card__face--back">
                    <img src={cloth.image2} alt={cloth.name}/>
                </div>
            </div>
        </div>
    )
}
export default Card;