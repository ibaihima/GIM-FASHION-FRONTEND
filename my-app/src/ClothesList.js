import React from 'react';
import Card from './Card';

function ClothesList ({ clothes, handleButtonClick }) {
    
    const add_button_content = "Add to Cart"


    return(
        <div>
            <div className="all_cards">
                {clothes.map(cloth => {
                    return <Card cloth={cloth} key={cloth.id} item_button_content={add_button_content} handleButtonClick={handleButtonClick}/>
                })}
            </div>
        </div>
    )
}

export default ClothesList;