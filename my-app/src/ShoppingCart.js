import React from "react"
import Card from "./Card"

function ShoppingCart( { userItems, handleRemoveFromCart } ){
    const delete_button_content = "Remove from Cart"

    //let cartTotal;
    let total_price = 0;
    if (userItems.length > 0) {
        // cartTotal = userItems.reduce((item => item.price), 0)
        // console.log(cartTotal)
        
        for (let i = 0; i < userItems.length; i++) {
            total_price += userItems[i].price;
        }
        console.log(total_price)
    }

    return(
        <>
            <div className="shoppin_cart_list"> 
                {userItems.map(item => {
                    return <Card cloth={item} key={item.id} handleButtonClick={handleRemoveFromCart} item_button_content={delete_button_content}/>
                })
                }
            </div>
            <div className='cart_total'>
                Cart Total: ${total_price}
            </div>
        </>
    )
}

export default ShoppingCart;