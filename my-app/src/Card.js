import React from 'react'

function Card ( { cloth, item_button_content, handleButtonClick } ) {

    function handleClick(){
        handleButtonClick(cloth)
    }

    return(
        <div className='card_container'> 
            <div className="scene">
                <div className="card">
                    <div className="card__face card__face--front">
                        <img src={cloth.image1} alt={cloth.name} />
                    </div>
                    <div className="card__face card__face--back">
                        <img src={cloth.image2} alt={cloth.name} />
                    </div>

                </div>
                
            </div>
            <div className='card_details'>
                <h2>
                    {cloth.name}
                </h2>
                <p>
                    ${cloth.price}
                </p>
                <button onClick={handleClick}>{item_button_content}</button>
            </div>
        </div>
    )
}
export default Card;