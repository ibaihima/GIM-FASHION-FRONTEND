import React from "react"
import Card from "./Card"

function ShoppingCart( { userItems, handleRemoveFromCart } ){
    const delete_button_content = "Remove from Cart"
    console.log(userItems)

    return(
        <div> 
            {userItems.map(item => {
                return <Card cloth={item} key={item.id} handleButtonClick={handleRemoveFromCart} item_button_content={delete_button_content}/>
            })
            }
        </div>
    )
}

export default ShoppingCart;