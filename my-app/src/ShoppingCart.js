import React, { useState, useEffect } from "react"
import Card from "./Card"

function ShoppingCart( {loginUser} ){
    const [userItems, setUserItems] = useState ([])

    useEffect(() => {
        if (loginUser !== {}){
        fetch(`http://localhost:9292/users/${loginUser.id}`)
            .then(res => res.json())
            .then((userItemsData) => {
                // console.log("User items: ", userItemsData)
                setUserItems(userItemsData)
        })}
      }, [loginUser]);

    return(
        <div> 
            {userItems.map(item => {
                return <Card cloth={item} key={item.id}/>
            })
            }
        </div>
    )
}

export default ShoppingCart;